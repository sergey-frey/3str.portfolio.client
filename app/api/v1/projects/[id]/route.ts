import { parseProjectFormData } from "@/shared/helpers";
import { NextRequest, NextResponse } from "next/server";
import { projects } from "../projects";
import { saveImage } from "@/shared/helpers/save-image";
import path from "path";

type PutProjectParams = {
  params: {
    id: number;
  };
};

export async function PUT(req: NextRequest, { params }: PutProjectParams) {
  const data = await req.formData();

  const d = parseProjectFormData(data);
  const image = d.image;
  if (image !== null) {
    const project = projects.getProjectById(Number(params.id));
    if (project) {
      await saveImage(
        path.resolve(
          process.cwd(),
          "img",
          "projects-img",
          String(d.id),
          "main.png"
        ),
        image
      );
    }
  }
  projects.updateProject(d);
  return NextResponse.json(req.body);
}
