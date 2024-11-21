"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExpense = void 0;
const validateExpense = (request, response, next) => {
    const { title, nominal, type, category, date } = request.body;
    if (!title || !nominal || !type || !category || !date) {
        throw new Error("All fields (title, nominal, type, category, date) are required");
    }
    if (typeof nominal !== "number" || nominal <= 0) {
        throw new Error("Nominal must be a positive number");
    }
    if (!["income", "expense"].includes(type)) {
        throw new Error('Type must be either "income" or "expense"');
    }
    if (!["salary", "food", "transport"].includes(category)) {
        throw new Error('Category must be one of "salary", "food", or "transport"');
    }
    next(); // Lanjutkan jika validasi lulus
};
exports.validateExpense = validateExpense;
