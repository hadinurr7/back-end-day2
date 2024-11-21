import { NextFunction, Request, Response } from "express";

export const exampleMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Ini middleware example");

  next();
};