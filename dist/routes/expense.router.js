"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_controller_1 = require("../src/controller/expense.controller");
const create_expense_validator_1 = require("../src/middleware/create-expense.validator");
const update_expense_validator_1 = require("../src/middleware/update-expense.validator");
const router = express_1.default.Router();
router.get("/", expense_controller_1.getExpensesController);
router.get("/filter/category", expense_controller_1.getExpensesByCategoryController);
router.get("/filter/date", expense_controller_1.getExpensesByDateController);
router.get("/:id", expense_controller_1.getExpenseController);
router.post("/", create_expense_validator_1.createExpenseValidator, expense_controller_1.createExpenseController);
router.patch("/:id", update_expense_validator_1.updateExpenseValidator, expense_controller_1.updateExpenseController);
router.delete("/:id", expense_controller_1.deleteExpenseController);
exports.default = router;
