import { NextFunction, Request, Response } from "express";
import axios, { CancelTokenSource } from "axios";

// Define a proper type for the requestMap
const requestMap = new Map<string, CancelTokenSource>();

export const requestTracker = (req: Request, res: Response, next: NextFunction) => {
  // Ensure req.ip is defined
  const clientIp = req.ip || 'unknown-ip';

  const source = axios.CancelToken.source();
  requestMap.set(clientIp, source);

  req.on("close", () => {
    if (requestMap.has(clientIp)) {
      const source = requestMap.get(clientIp);
      if (source) {
        source.cancel("Request cancelled by client");
      }
      requestMap.delete(clientIp);
    }
  });

  next();
};
