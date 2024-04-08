import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import { config } from "dotenv";

config();

if (!process.env.DB_URL) {
  throw new Error("DB URL Missing");
}
const client = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN,
});

export const db = drizzle(client, { schema });
