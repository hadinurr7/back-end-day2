"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExpenseValidator = void 0;
const createExpenseValidator = (req, res, next) => {
    if (!req.body.title) {
        throw new Error("title is required");
    }
    else if (!req.body.nominal) {
        throw new Error("nominal is required");
    }
    else if (!req.body.type) {
        throw new Error("type is required");
    }
    else if (!req.body.category) {
        throw new Error("type is required");
    }
    next();
};
exports.createExpenseValidator = createExpenseValidator;
