import { NextResponse } from "next/server";
import { PROJECTS } from "./projects";

export async function GET() {
  return NextResponse.json({
    data: PROJECTS,
  });
}
