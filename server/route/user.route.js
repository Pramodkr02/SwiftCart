import { Router } from "express";
import {
  forgotPasswordController,
  getuserController,
  loginUserController,
  logoutController,
  refreshtokenControlller,
  registerUserController,
  removeImageCloudinry,
  restPasswordController,
  updateUserDetail,
  userAvtartController,
  verifyEmailController,
  verifyForgotPasswordController,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/multer.js";

const userRouter = Router();
userRouter.post("/register", registerUserController);
userRouter.post("/verifyEmail", verifyEmailController);
userRouter.post("/login", loginUserController);
userRouter.post("/forgot-password", forgotPasswordController);
userRouter.post("/verify-forgot-password-otp", verifyForgotPasswordController);
userRouter.post("/reset-password", restPasswordController);
userRouter.post("/refresh-token", refreshtokenControlller);
userRouter.put(
  "/user-avatar",
  auth,
  upload.array("avatar"),
  userAvtartController
);
userRouter.put("/:id", auth, updateUserDetail);
userRouter.delete("/deleteimage", auth, removeImageCloudinry);
userRouter.get("/logout", auth, logoutController);
userRouter.get("/user-details", auth, getuserController);

export { userRouter };
