import { NextFunction, Request, Response } from "express";

export const updateExpenseValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.type != "expense" && req.body.type != "income") {
    throw new Error("type is either expense or income");
  }
  next();
};
