import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import userModel from "../userModel";

interface UserPayload {
  sub: string;
  [key: string]: unknown; // Add other properties if needed
}

// Extend the Express Request interface to include user
interface CustomRequest extends Request {
  user?: UserPayload;
}

const getCurrentUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return next(createHttpError(401, "Unauthorized"));
  }

  const userId = req.user.sub;

  try {
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return next(createHttpError(404, "User not found"));
    }
    res.status(200).json(user);
  } catch (error) {
    next(createHttpError(500, "Error fetching user data"));
  }
};

export { getCurrentUser };
