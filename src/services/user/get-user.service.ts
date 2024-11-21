import path from "path";
import fs from "fs";
import { UserData } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const getUserService = (id: number) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: UserData = JSON.parse(rawData);

    const user = result.users.find((user) => user.id === id);

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  } catch (error) {
    throw error;
  }
};
