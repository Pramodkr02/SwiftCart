import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createHomeSliderController,
  getHomeSlidersController,
  deleteHomeSliderController,
  updateHomeSliderController,
  getActiveHomeSlidersController // Exposed for public or auth? Frontend usually needs public access for home page
} from "../controllers/homeSlider.controller.js";

const homeSliderRouter = Router();

// Admin routes (assuming 'auth' middleware protects these)
homeSliderRouter.post("/create", auth, upload.single("image"), createHomeSliderController);
homeSliderRouter.get("/", auth, getHomeSlidersController); // For admin list
homeSliderRouter.delete("/:id", auth, deleteHomeSliderController);
homeSliderRouter.put("/:id", auth, updateHomeSliderController);

// Public route for frontend
// Note: User might not be logged in when viewing home page, so maybe no 'auth' for getActive?
// Checking other routes... usually public GETs don't need auth unless specific.
// I'll make a public endpoint for active slides.
homeSliderRouter.get("/public", getActiveHomeSlidersController); 

export default homeSliderRouter;
