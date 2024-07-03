import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import userModel from "./userModel";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { User } from "./userTypes";
import axios from "axios";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;


  try {
    const source = axios.CancelToken.source();

    req.on("close", () => {
      source.cancel("Request cancelled by client");
    });

    const user = await userModel.findOne({ email });

    if (user) {
      const error = createHttpError(
        400,
        "User already exists with this email."
      );
      return next(error);
    }
  } catch (error) {
    return next(createHttpError(500, "Error searching user in database."));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser: User;

  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log("New user created:", newUser);
  } catch (error) {
    console.error("Error creating user in database:", error);
    return next(createHttpError(500, "Error creating user in database."));
  }

  try {
    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 
    };

    res.cookie("token", token, cookieOptions);
    res.status(200).json({ accessToken: token, user: newUser });
  } catch (error) {
    return next(createHttpError(500, "Error generating JWT token."));
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(createHttpError(400, "User not found."));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(createHttpError(400, "Invalid password."));
    }

    const token = sign({ sub: user._id }, config.jwtSecret as string, {
      expiresIn: "7d",
      algorithm: "HS256",
    });

    res.status(200).json({ accessToken: token });
  } catch (error) {
    return next(createHttpError(500, "Error logging in."));
  }
};

export { createUser, loginUser };
