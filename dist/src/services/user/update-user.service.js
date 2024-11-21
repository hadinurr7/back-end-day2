"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const updateUserService = (id, body) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const index = result.users.findIndex((user) => user.id === id);
        if (index === -1) {
            throw new Error("user not found");
        }
        result.users[index] = Object.assign(Object.assign({}, result.users[index]), body);
        fs_1.default.writeFileSync(filePath, JSON.stringify(result));
        return { message: "update user success" };
    }
    catch (error) {
        throw error;
    }
};
exports.updateUserService = updateUserService;
