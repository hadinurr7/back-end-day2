"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserService = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const getUserService = (id) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const user = result.users.find((user) => user.id === id);
        if (!user) {
            throw new Error("user not found");
        }
        return user;
    }
    catch (error) {
        throw error;
    }
};
exports.getUserService = getUserService;
