import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { getExpensesService } from "../services/expense/get-expenses.service";
import { getExpenseService } from "../services/expense/get-expense.service";
import { createExpenseService } from "../services/expense/create-expense.service";
import { updateExpenseService } from "../services/expense/update-expense.service";
import { deleteExpenseService } from "../services/expense/delete-expense.service";
import { getExpensesByCategoryService } from "../services/expense/get-expenses-by-category.service";
import { getExpensesByDateService } from "../services/expense/get-expenses-by-date.service";

const filePath = path.join(__dirname, "../../db.json");
const rawData = fs.readFileSync(filePath).toString();
const result = JSON.parse(rawData);

// Get expense list
export const getExpensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = getExpensesService();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Get expense details
export const getExpenseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = getExpenseService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Create new expense data
export const createExpenseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const result = createExpenseService(body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Update expense data
export const updateExpenseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const result = updateExpenseService(id, body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// Delete expense data
export const deleteExpenseController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = deleteExpenseService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// get total expenses by category
export const getExpensesByCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = req.query.category as string;
    const result = getExpensesByCategoryService(category);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// get total expenses by date
export const getExpensesByDateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const startDate = req.query.startDate as string;
    const endDate = req.query.endDate as string;
    const result = getExpensesByDateService(startDate, endDate);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
