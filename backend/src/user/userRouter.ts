import express from "express";
import { createUser, loginUser } from "./userController";
import { userValidationRules, loginValidationRules } from '../validators/userValidator';
import { validate } from "../middlewares/validate";
import rateLimit from "express-rate-limit";
import { requestTracker } from "../middlewares/handleapiCancellation";
import { authenticateToken } from "../middlewares/authenticateToken";
import { getCurrentUser } from "./userProfile/currentUserController";

const userRouter = express.Router();

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, 
  message: "Too many requests, please try again later.", 
});

userRouter.use(limiter);
userRouter.use(requestTracker);

// routes
userRouter.post("/register", userValidationRules(), validate, createUser);
userRouter.post("/login", loginValidationRules(),validate,loginUser);
userRouter.get("/me", authenticateToken, getCurrentUser);

export default userRouter;