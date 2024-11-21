"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenseService = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const getExpenseService = (id) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const expense = result.expenses.find((expense) => expense.id === id);
        if (!expense) {
            throw new Error("expense not found");
        }
        return expense;
    }
    catch (error) {
        throw error;
    }
};
exports.getExpenseService = getExpenseService;
