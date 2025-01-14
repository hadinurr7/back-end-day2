import express from "express";
import {
  createExpenseController,
  deleteExpenseController,
  getExpenseController,
  getExpensesByCategoryController,
  getExpensesByDateController,
  getExpensesController,
  updateExpenseController,
} from "../controller/expense.controller";
import { createExpenseValidator } from "../middleware/create-expense.validator";
import { updateExpenseValidator } from "../middleware/update-expense.validator";

const router = express.Router();

router.get("/", getExpensesController);
router.get("/filter/category", getExpensesByCategoryController);
router.get("/filter/date", getExpensesByDateController);
router.get("/:id", getExpenseController);
router.post("/", createExpenseValidator, createExpenseController);
router.patch("/:id", updateExpenseValidator, updateExpenseController);
router.delete("/:id", deleteExpenseController);

export default router;
