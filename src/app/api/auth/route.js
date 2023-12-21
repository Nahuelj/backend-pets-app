import { NextResponse as res } from "next/server";
import { connectMongo } from "../../../db/connect";

export async function GET() {
  await connectMongo();

  return res.json({ message: "hola" });
}
