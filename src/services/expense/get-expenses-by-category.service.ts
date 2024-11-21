import fs from "fs";
import path from "path";
import { DataExpense } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const getExpensesByCategoryService = (category: string) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: DataExpense = JSON.parse(rawData);

    const filteredExpense = result.expenses.filter((expense) => {
      return expense.category.includes(category);
    });

    const total = filteredExpense.reduce((a, b) => a + b.nominal, 0);

    return {
      data: filteredExpense,
      total,
    };
  } catch (error) {
    throw error;
  }
};
