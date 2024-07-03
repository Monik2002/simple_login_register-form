// middleware/validate.ts
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import createHttpError from 'http-errors';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = createHttpError(400, errors.array().map(err => err.msg).join(', '));
    return next(error);
  }
  next();
};
