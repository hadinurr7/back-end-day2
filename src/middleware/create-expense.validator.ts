import { NextFunction, Request, Response } from "express";

export const createExpenseValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.title) {
    throw new Error("title is required");
  } else if (!req.body.nominal) {
    throw new Error("nominal is required");
  } else if (!req.body.type) {
    throw new Error("type is required");
  } else if (!req.body.category) {
    throw new Error("type is required");
  }

  next();
};
