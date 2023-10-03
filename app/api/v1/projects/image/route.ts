import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const projectId = Number(searchParams.get("id"));

  if (!projectId) {
    return NextResponse.json({
      error: "Missing fileName parameter",
    });
  }

  const imagePath = path.join(
    process.cwd(),
    "img",
    "projects-img",
    String(projectId),
    "main.png"
  );

  try {
    const buffer = await fs.promises.readFile(imagePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, s-maxage=0",
      },
    });
  } catch (err) {
    return new NextResponse("Ошибка при получении картинки", { status: 404 });
  }
}
