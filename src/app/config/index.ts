import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt: Number(process.env.BYCRYPT_SALT_ROUND),
};
