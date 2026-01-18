import HomeSliderModel from "../models/homeSlider.model.js";
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

// Create Home Slider
export async function createHomeSliderController(req, res) {
  try {
    const file = req.file; // Expecting single file upload for a slide

    if (!file) {
      return res.status(400).json({
        message: "Please upload an image",
        error: true,
        success: false,
      });
    }

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    const imgResult = await cloudinary.uploader.upload(file.path, options);

    // Delete file from local uploads after upload
    fs.unlinkSync(file.path);

    const newSlide = new HomeSliderModel({
      image: imgResult.secure_url,
      isActive: true, // Default active
    });

    const savedSlide = await newSlide.save();

    return res.status(201).json({
      message: "Home Slide created successfully",
      error: false,
      success: true,
      data: savedSlide,
    });
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
       fs.unlinkSync(req.file.path);
    }
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Get All Home Sliders
export async function getHomeSlidersController(req, res) {
  try {
    const slides = await HomeSliderModel.find().sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Fetched all slides",
      error: false,
      success: true,
      data: slides,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Get Active Home Sliders (For Frontend)
export async function getActiveHomeSlidersController(req, res) {
  try {
    const slides = await HomeSliderModel.find({ isActive: true }).sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Fetched active slides",
      error: false,
      success: true,
      data: slides,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Delete Home Slider
export async function deleteHomeSliderController(req, res) {
  try {
    const { id } = req.params;
    const slide = await HomeSliderModel.findById(id);

    if (!slide) {
      return res.status(404).json({
        message: "Slide not found",
        error: true,
        success: false,
      });
    }

    // Optional: Delete from cloud as well. 
    // Extract public_id if needed, but for now just delete record is simpler 
    // unless we parse the URL.
    // Given requirements, db delete is primary.

    await HomeSliderModel.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Slide deleted successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// Update Home Slider (e.g., Toggle Active Status)
export async function updateHomeSliderController(req, res) {
    try {
        const { id } = req.params;
        const { isActive } = req.body;

        const updateData = {};
        if (isActive !== undefined) updateData.isActive = isActive;

        const updatedSlide = await HomeSliderModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedSlide) {
            return res.status(404).json({
                message: "Slide not found",
                error: true,
                success: false
            });
        }

        return res.status(200).json({
            message: "Slide updated successfully",
            error: false,
            success: true,
            data: updatedSlide
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}
