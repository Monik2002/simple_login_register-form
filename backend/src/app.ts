import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/config";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: config.frontendUrl,
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome" });
});

app.use("/api/users", userRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(globalErrorHandler);

export default app;
