import path from "path";
import fs from "fs";
import { DataExpense } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const getExpenseService = (id: number) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: DataExpense = JSON.parse(rawData);

    const expense = result.expenses.find((expense) => expense.id === id);

    if (!expense) {
      throw new Error("expense not found");
    }

    return expense;
  } catch (error) {
    throw error;
  }
};
