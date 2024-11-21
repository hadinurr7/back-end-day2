import { NextFunction, Request, Response } from "express";
import path from "path";
import { getUsersService } from "../services/user/get-users.service";
import { createUserService } from "../services/user/create-user.service";
import { getUserService } from "../services/user/get-user.service";
import { updateUserService } from "../services/user/update-user.service";
import { deleteUserService } from "../services/user/delete-user.service";

// untuk mengambil semua data user
export const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = getUsersService();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// membuat satu data user
export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = createUserService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// mengambil satu data user
export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = getUserService(Number(id));
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// edit satu data user
export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const result = updateUserService(id, body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

// menghapus satu data user
export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const result = deleteUserService(id);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
