import express from "express";

import { createUserValidator } from "../src/middleware/create-user.validator";
import { exampleMiddleware } from "../src/middleware/example";
import { createUserController, deleteUserController, getUserController, getUsersController, updateUserController } from "../src/controller/user.controller";

const router = express.Router();

router.get("/", exampleMiddleware, getUsersController);
router.post("/", createUserValidator, createUserController);
router.get("/:id", getUserController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
