import { db } from "../../db";

export async function GET() {
  const allUsers = await db.query.users.findMany({
    limit: 10,
  });
  return Response.json(allUsers);
}
