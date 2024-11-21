"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const filePath = path_1.default.join(__dirname, "../../../db.json");
const createUserService = (body) => {
    try {
        const rawData = fs_1.default.readFileSync(filePath).toString();
        const result = JSON.parse(rawData);
        const latestId = result.users[result.users.length - 1].id;
        body.id = latestId + 1;
        result.users.push(body);
        fs_1.default.writeFileSync(filePath, JSON.stringify(result));
        return { message: "create user success" };
    }
    catch (error) {
        throw error;
    }
};
exports.createUserService = createUserService;
