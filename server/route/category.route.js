import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createCategoryController,
  getCategories,
  getCategoriesCountController,
  getSubCategoriesCountController,
  // upoadImageController, // Not needed separately if handled in create/update
  deleteCategoryController,
  updateCategoryController,
  getCategoryById
} from "../controllers/category.controller.js";

const categoryRouter = Router();

// Create with optional images
categoryRouter.post("/create", auth, upload.array("images"), createCategoryController);

// Read
categoryRouter.get("/", getCategories); // Make public potentially, or keep auth? User said "Frontend Fetch" -> Public
categoryRouter.get("/:id", getCategoryById);
categoryRouter.get("/get/count", getCategoriesCountController);
categoryRouter.get("/get/count/subCat", getSubCategoriesCountController);

// Update/Delete
categoryRouter.delete("/:id", auth, deleteCategoryController);
categoryRouter.put("/:id", auth, upload.array("images"), updateCategoryController);

export default categoryRouter;
