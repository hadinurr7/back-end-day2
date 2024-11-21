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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.getUserController = exports.createUserController = exports.getUsersController = void 0;
const get_users_service_1 = require("../services/user/get-users.service");
const create_user_service_1 = require("../services/user/create-user.service");
const get_user_service_1 = require("../services/user/get-user.service");
const update_user_service_1 = require("../services/user/update-user.service");
const delete_user_service_1 = require("../services/user/delete-user.service");
// untuk mengambil semua data user
const getUsersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (0, get_users_service_1.getUsersService)();
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsersController = getUsersController;
// membuat satu data user
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = (0, create_user_service_1.createUserService)(req.body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.createUserController = createUserController;
// mengambil satu data user
const getUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = (0, get_user_service_1.getUserService)(Number(id));
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.getUserController = getUserController;
// edit satu data user
const updateUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const body = req.body;
        const result = (0, update_user_service_1.updateUserService)(id, body);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.updateUserController = updateUserController;
// menghapus satu data user
const deleteUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = (0, delete_user_service_1.deleteUserService)(id);
        res.status(200).send(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUserController = deleteUserController;
