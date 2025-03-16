import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const orders = [
    { id: 1, total: 100, user: "John Doe", status: "pending" },
    { id: 2, total: 200, user: "Jane Doe", status: "completed" },
  ]
  return NextResponse.json(orders);
}

