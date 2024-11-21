"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_user_validator_1 = require("../src/middleware/create-user.validator");
const example_1 = require("../src/middleware/example");
const user_controller_1 = require("../src/controller/user.controller");
const router = express_1.default.Router();
router.get("/", example_1.exampleMiddleware, user_controller_1.getUsersController);
router.post("/", create_user_validator_1.createUserValidator, user_controller_1.createUserController);
router.get("/:id", user_controller_1.getUserController);
router.patch("/:id", user_controller_1.updateUserController);
router.delete("/:id", user_controller_1.deleteUserController);
exports.default = router;
