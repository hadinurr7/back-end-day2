"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidator = void 0;
const createUserValidator = (req, res, next) => {
    if (!req.body.firstName || !req.body.lastName) {
        throw new Error("firstname & lastname is required");
    }
    next();
};
exports.createUserValidator = createUserValidator;
