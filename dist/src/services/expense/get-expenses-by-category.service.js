"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpensesByCategoryService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const getExpensesByCategoryService = (category) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const filteredExpense = result.expenses.filter((expense) => {
            return expense.category.includes(category);
        });
        const total = filteredExpense.reduce((a, b) => a + b.nominal, 0);
        return {
            data: filteredExpense,
            total,
        };
    }
    catch (error) {
        throw error;
    }
};
exports.getExpensesByCategoryService = getExpensesByCategoryService;
