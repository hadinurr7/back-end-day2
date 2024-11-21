"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpensesByDateController = exports.getExpensesByCategoryController = exports.deleteExpenseController = exports.updateExpenseController = exports.createExpenseController = exports.getExpenseController = exports.getExpensesController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const get_expenses_service_1 = require("../services/expense/get-expenses.service");
const get_expense_service_1 = require("../services/expense/get-expense.service");
const create_expense_service_1 = require("../services/expense/create-expense.service");
const update_expense_service_1 = require("../services/expense/update-expense.service");
const delete_expense_service_1 = require("../services/expense/delete-expense.service");
const get_expenses_by_category_service_1 = require("../services/expense/get-expenses-by-category.service");
const get_expenses_by_date_service_1 = require("../services/expense/get-expenses-by-date.service");
const filePath = path_1.default.join(__dirname, "../../db.json");
const rawData = fs_1.default.readFileSync(filePath).toString();
const result = JSON.parse(rawData);
// Get expense list
const getExpensesController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (0, get_expenses_service_1.getExpensesService)();
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getExpensesController = getExpensesController;
// Get expense details
const getExpenseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = (0, get_expense_service_1.getExpenseService)(id);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getExpenseController = getExpenseController;
// Create new expense data
const createExpenseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = (0, create_expense_service_1.createExpenseService)(body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createExpenseController = createExpenseController;
// Update expense data
const updateExpenseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        const result = (0, update_expense_service_1.updateExpenseService)(id, body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateExpenseController = updateExpenseController;
// Delete expense data
const deleteExpenseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = (0, delete_expense_service_1.deleteExpenseService)(id);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteExpenseController = deleteExpenseController;
// get total expenses by category
const getExpensesByCategoryController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.category;
        const result = (0, get_expenses_by_category_service_1.getExpensesByCategoryService)(category);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getExpensesByCategoryController = getExpensesByCategoryController;
// get total expenses by date
const getExpensesByDateController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;
        const result = (0, get_expenses_by_date_service_1.getExpensesByDateService)(startDate, endDate);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getExpensesByDateController = getExpensesByDateController;
