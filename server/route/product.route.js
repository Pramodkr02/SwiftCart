import { Router } from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";
import {
  createProduct,
  getAllProducts,
  upoadImageController,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();


productRouter.post(
  "/uploadImages",
  auth,
  upload.array("images"),
  upoadImageController
);
productRouter.post("/create", auth, createProduct);
productRouter.get("/", getAllProducts); // Cleaner route
productRouter.get("/:id", getProductById);
productRouter.delete("/:id", auth, deleteProduct);
productRouter.put("/:id", auth, updateProduct);

export default productRouter;
