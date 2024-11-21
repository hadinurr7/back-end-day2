"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpenseService = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const createExpenseService = (body) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const latestId = result.expenses[result.expenses.length - 1].id;
        body.id = latestId + 1;
        result.expenses.push(body);
        fs_1.default.writeFileSync(filePath, JSON.stringify(result));
        return { message: "create expense success" };
    }
    catch (error) {
        throw error;
    }
};
exports.createExpenseService = createExpenseService;
