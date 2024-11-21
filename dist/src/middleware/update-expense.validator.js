"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenseValidator = void 0;
const updateExpenseValidator = (req, res, next) => {
    if (req.body.type != "expense" && req.body.type != "income") {
        throw new Error("type is either expense or income");
    }
    next();
};
exports.updateExpenseValidator = updateExpenseValidator;
