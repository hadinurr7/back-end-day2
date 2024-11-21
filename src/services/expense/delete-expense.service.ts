import fs from "fs";
import path from "path";
import { DataExpense } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const deleteExpenseService = (id: number) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: DataExpense = JSON.parse(rawData);

    const index = result.expenses.findIndex((expense) => expense.id === id);

    if (index === -1) {
      throw new Error("expense not found");
    }

    result.expenses.splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(result));

    return { message: "delete expense success" };
  } catch (error) {
    throw error;
  }
};
