import fs from "fs";
import path from "path";
import { UserData } from "../../types";

const filePath = path.join(__dirname, "../../../db.json");

export const deleteUserService = (id: number) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result: UserData = JSON.parse(rawData);

    const index = result.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new Error("user not found");
    }

    result.users.splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(result));

    return { message: "delete user success" };
  } catch (error) {
    throw error;
  }
};
