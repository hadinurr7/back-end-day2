import fs from "fs";
import path from "path";
import { DataExpense } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const getExpensesService = () => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: DataExpense = JSON.parse(rawData);
    return result.expenses;
  } catch (error) {
    throw error;
  }
};
