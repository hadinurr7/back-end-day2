import express from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
} from "../controller/user.controller";
import { createUserValidator } from "../middleware/create-user.validator";
import { exampleMiddleware } from "../middleware/example";

const router = express.Router();

router.get("/", exampleMiddleware, getUsersController);
router.post("/", createUserValidator, createUserController);
router.get("/:id", getUserController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
