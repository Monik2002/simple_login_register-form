// middleware/globalErrorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
import { config } from '../config/config';

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.status || 500;
  const status = res.status(statusCode);
  
  // Extracting message and errors if they are provided as an array
  const message = Array.isArray(err.message) ? err.message.join(', ') : err.message;

  return status.json({
    message: message,
    stack: config.env === 'production' ? '🤫' : err.stack,
  });
};

export default globalErrorHandler;
