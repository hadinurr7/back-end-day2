import fs from "fs";
import path from "path";
import { DataExpense } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const getExpensesByDateService = (
  startDate: string,
  endDate: string
) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: DataExpense = JSON.parse(rawData);

    if (!startDate || !endDate) {
      throw new Error("start date or end date cannot be empty");
    }

    const filteredExpense = result.expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const start = new Date(startDate);
      const end = new Date(endDate);

      return expenseDate >= start && expenseDate <= end;
    });
    const total = filteredExpense.reduce((a, b) => a + b.nominal, 0);
    return { data: filteredExpense, total };
  } catch (error) {
    throw error;
  }
};
