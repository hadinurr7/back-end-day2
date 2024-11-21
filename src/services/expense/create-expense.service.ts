import path from "path";
import fs from "fs";
import { Expense } from "../../types/expense";

const filePath = path.join(__dirname, "../../../db.json");

export const createExpenseService = (body: Expense) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result = JSON.parse(rawData);

    const latestId = result.expenses[result.expenses.length - 1].id;

    body.id = latestId + 1;

    result.expenses.push(body);

    fs.writeFileSync(filePath, JSON.stringify(result));

    return { message: "create expense success" };
  } catch (error) {
    throw error;
  }
};
