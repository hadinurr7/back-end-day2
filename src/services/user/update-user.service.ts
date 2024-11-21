import fs from "fs";
import path from "path";
import { UserData } from "../../types";
import { User } from "../../types/user";

const filePath = path.join(__dirname, "../../../db.json");

export const updateUserService = (id: number, body: Partial<User>) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: UserData = JSON.parse(rawData);

    const index = result.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new Error("user not found");
    }

    result.users[index] = { ...result.users[index], ...body };

    fs.writeFileSync(filePath, JSON.stringify(result));

    return { message: "update user success" };
  } catch (error) {
    throw error;
  }
};
