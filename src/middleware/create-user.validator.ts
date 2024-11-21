import { NextFunction, Request, Response } from "express";

export const createUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.firstName || !req.body.lastName) {
    throw new Error("firstname & lastname is required");
  }

  next();
};
