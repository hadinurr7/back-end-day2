import fs from "fs";
import path from "path";
import { DataExpense } from "../../types";
import { Expense } from "../../types/expense";

const filePath = path.join(__dirname, "../../../db.json");

export const updateExpenseService = (id: number, body: Partial<Expense>) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: DataExpense = JSON.parse(rawData);

    const index = result.expenses.findIndex((expense) => expense.id === id);

    if (index === -1) {
      throw new Error("expense not found");
    }

    result.expenses[index] = { ...result.expenses[index], ...body };

    fs.writeFileSync(filePath, JSON.stringify(result));

    return { message: "update expense success" };
  } catch (error) {
    throw error;
  }
};
