import path from "path";
import fs from "fs";

const filePath = path.join(__dirname, "../../../db.json");

export const getUsersService = () => {
  try {
    const rawData = fs.readFileSync(filePath).toString();
    const result = JSON.parse(rawData);
    return result.users;
  } catch (error) {
    throw error;
  }
};
