"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpensesByDateService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const getExpensesByDateService = (startDate, endDate) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
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
    }
    catch (error) {
        throw error;
    }
};
exports.getExpensesByDateService = getExpensesByDateService;
