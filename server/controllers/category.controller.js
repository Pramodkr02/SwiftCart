import CategoryModel from "../models/category.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

// Create Category (Handles both Root and Sub Categories)
export async function createCategoryController(req, res) {
  try {
    let images = [];

    // Handle Image Upload if available (Only for Root categories usually, but logic allows flexibility)
    if (req.files && req.files.length > 0) {
       for (let i = 0; i < req.files.length; i++) {
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: false,
        };
        const img = await cloudinary.uploader.upload(req.files[i].path, options);
        images.push(img.secure_url);
        fs.unlinkSync(req.files[i].path);
       }
    }

    let category = new CategoryModel({
      name: req.body.name,
      images: images, // Will be empty array if no images
      parentId: req.body.parentId || undefined, // undefined for root categories
      // parentCatName is optional, can be derived
    });

    if (!category) {
      return res.status(500).json({
        message: "Category not created",
        error: true,
        success: false,
      });
    }

    category = await category.save();

    return res.status(201).json({
      message: "Category created successfully",
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
     // Cleanup files if error
     if (req.files) {
        req.files.forEach(file => {
            if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
        });
     }
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Get Categories (Hierarchical or Flat)
export async function getCategories(req, res) {
  try {
    const categories = await CategoryModel.find().sort({ createdAt: -1 }); // Get all
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId && categoryMap[cat.parentId]) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else if (!cat.parentId) { // Provide check to avoid orphans if parent deleted
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return res.status(200).json({
      success: true,
      error: false,
      data: rootCategories, // Returns tree structure
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Get Category By ID (Single)
export async function getCategoryById(req, res) {
    try {
        const category = await CategoryModel.findById(req.params.id);
        if(!category) {
            return res.status(404).json({ message: "Category not found", success: false, error: true});
        }
        return res.status(200).json({
            success: true,
            error: false,
            data: category
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}


// Delete Category
export async function deleteCategoryController(req, res) {
    try {
        const { id } = req.params;
        
        // Safety Check: Check if it has children
        const children = await CategoryModel.find({ parentId: id });
        if (children.length > 0) {
            return res.status(400).json({
                message: "Cannot delete category with subcategories. Delete subcategories first.",
                error: true,
                success: false
            });
        }

        const category = await CategoryModel.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            message: "Category deleted successfully",
            error: false,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

// Update Category
export async function updateCategoryController(req, res) {
    try {
        const { id } = req.params;
        const { name, images } = req.body; // Images might be passed as URL strings if keeping old ones

        let newImages = [];
        // If keeping existing images (frontend sends them back or we merge)
        // For simplicity, let's assume if files are uploaded, we replace/add.
        // Or if 'images' in body is array of strings, we keep those.
        
        if (req.body.images && Array.isArray(req.body.images)) {
             newImages = [...req.body.images];
        } else if (req.body.images && typeof req.body.images === 'string') {
             newImages = [req.body.images];
        }

        if (req.files && req.files.length > 0) {
            for (let i = 0; i < req.files.length; i++) {
                 const options = {
                     use_filename: true,
                     unique_filename: false,
                     overwrite: false,
                 };
                 const img = await cloudinary.uploader.upload(req.files[i].path, options);
                 newImages.push(img.secure_url);
                 fs.unlinkSync(req.files[i].path);
            }
         }

        const updateData = {
            name: name,
            images: newImages
        };

        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedCategory) {
             return res.status(404).json({
                message: "Category not found",
                error: true,
                success: false
             });
        }

        return res.status(200).json({
             message: "Category updated successfully",
             error: false,
             success: true,
             data: updatedCategory
        });

    } catch (error) {
        if (req.files) {
            req.files.forEach(file => {
                if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
            });
         }
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

//get categories count
export async function getCategoriesCountController(req, res) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: { $in: [null, undefined] }, // Count only roots
    });

    res.status(200).json({
        categoryCount: categoryCount,
    });
    
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

//get  sub categories count
export async function getSubCategoriesCountController(req, res) {
  try {
    const subCategoryCount = await CategoryModel.countDocuments({
        parentId: { $exists: true, $ne: null }
    });
     res.send({
        subCategoryCount: subCategoryCount,
      });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

