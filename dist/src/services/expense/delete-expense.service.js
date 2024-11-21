"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenseService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const deleteExpenseService = (id) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const index = result.expenses.findIndex((expense) => expense.id === id);
        if (index === -1) {
            throw new Error("expense not found");
        }
        result.expenses.splice(index, 1);
        fs_1.default.writeFileSync(filePath, JSON.stringify(result));
        return { message: "delete expense success" };
    }
    catch (error) {
        throw error;
    }
};
exports.deleteExpenseService = deleteExpenseService;
