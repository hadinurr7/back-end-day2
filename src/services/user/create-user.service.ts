import path from "path";
import fs from "fs";
import { User } from "../../types/user";

const filePath = path.join(__dirname, "../../../db.json");

export const createUserService = (body: User) => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result = JSON.parse(rawData);

    const latestId = result.users[result.users.length - 1].id;

    body.id = latestId + 1;

    result.users.push(body);

    fs.writeFileSync(filePath, JSON.stringify(result));

    return { message: "create user success" };
  } catch (error) {
    throw error;
  }
};
