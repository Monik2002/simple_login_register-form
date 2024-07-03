import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import { config } from "../config/config";

interface UserPayload {
  sub: string;
  // Add other properties if needed
}

interface CustomRequest extends Request {
  user?: UserPayload;
}

const authenticateToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return next(createHttpError(401, "No token provided"));
  }

  try {
    const verified = jwt.verify(
      token,
      config.jwtSecret as string
    ) as UserPayload;
    req.user = verified;
    next();
  } catch (error) {
    next(createHttpError(400, "Invalid Token"));
  }
};

export { authenticateToken };

// -------------------------------------
