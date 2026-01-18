import ProductModel from "../models/product.model.js";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

// Image Upload Controller (Stateless)
export async function upoadImageController(req, res) {
  try {
    const images = req.files;
    
    if (!images || images.length === 0) {
        return res.status(400).json({
            message: "No image files provided",
            error: true,
            success: false
        });
    }

    let imageArr = [];

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < images.length; i++) {
      try {
          const result = await cloudinary.uploader.upload(images[i].path, options);
          imageArr.push(result.secure_url);
      } catch (uploadError) {
          console.error("Cloudinary upload failed for file:", images[i].originalname, uploadError);
          // Continue with other images or throw? 
          // If we fail one, likely fine to continue or fail. 
          // For now let's just log and continue, but careful about partial success.
      }
      
      // Delete file from local uploads/ folder after upload
      try {
         if (fs.existsSync(`uploads/${images[i].filename}`)) {
             fs.unlinkSync(`uploads/${images[i].filename}`);
         }
      } catch (fsError) {
          console.error("Failed to delete local file:", images[i].filename, fsError);
      }
    }
    
    if (imageArr.length === 0) {
        return res.status(500).json({
            message: "Failed to upload any images to Cloudinary",
            error: true,
            success: false
        });
    }

    return res.status(200).json({
      images: imageArr,
      message: "Images uploaded successfully",
      success: true,
      error: false
    });
  } catch (error) {
    console.error("Image Upload Controller Error:", error);
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Create Product
export async function createProduct(req, res) {
  try {
    const { 
        name, discription, images, brand, price, oldPrice, 
        catName, catId, subCatId, subCat, subCatName,
        thirdSubCat, thirdSubCatId, countInStock, rating, 
        isFeatured, discount, productRam, size, productWeight 
    } = req.body;

    // Basic Validation
    if (!name || !price || !catId || !subCatId || !images || images.length === 0) {
        return res.status(400).json({
             message: "Name, Price, Category, SubCategory, and Images are required.",
             error: true,
             success: false
        });
    }

    let product = new ProductModel({
      name,
      discription,
      images, // Expecting array of URLs from frontend
      brand,
      price,
      oldPrice,
      catName,
      catId,
      subCatId,
      subCat,
      subCatName,
      thirdSubCat,
      thirdSubCatId,
      countInStock,
      category: catId, // Using catId as reference
      rating,
      isFeatured,
      discount,
      productRam,
      size,
      productWeight,
    });

    product = await product.save();

    if (!product) {
      return res.status(500).json({
        message: "Product not created",
        error: true,
        success: false,
      });
    }

    return res.status(201).json({
      message: "Product created successfully",
      error: false,
      success: true,
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Get All Products with Filtering
export async function getAllProducts(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 100; // Default to 100 to show more
    
    // Filtering
    let filter = {};
    if (req.query.catId) {
        filter.catId = req.query.catId;
    }
    if (req.query.subCatId) {
        filter.subCatId = req.query.subCatId;
    }
    if (req.query.isFeatured) {
        filter.isFeatured = req.query.isFeatured === 'true';
    }

    const totalPosts = await ProductModel.countDocuments(filter);
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages && totalPosts > 0) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await ProductModel.find(filter)
      .populate("category")
      .sort({ createdAt: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    return res.status(200).json({
      error: false,
      success: true,
      data: products, // Standardized to "data" usually, but keeping compatible if "products" used elsewhere
      products: products, 
      totalPages: totalPages,
      page: page,
      totalPosts: totalPosts
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Get Product By ID
export async function getProductById(req, res) {
    try {
        const product = await ProductModel.findById(req.params.id).populate("category");
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }
        return res.status(200).json({
            product: product,
            success: true,
            error: false
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

// Delete Product
export async function deleteProduct(req, res) {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        // Optional: Delete images from Cloudinary here if needed
        // For now, we just delete the record
        
        await ProductModel.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            error: false
        });
    } catch (error) {
         return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}

// Update Product
export async function updateProduct(req, res) {
    try {
        const productId = req.params.id;
        
        // Exclude fields that shouldn't be updated loosely if needed
        // For now, we update everything sent in body
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            productId,
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
             return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct,
            success: true,
            error: false
        });

    } catch (error) {
         return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}
