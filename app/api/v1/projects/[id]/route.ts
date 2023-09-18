import { NextRequest, NextResponse } from "next/server";

type PutProjectParams = {
  params: {
    id: number;
  };
};

export async function PUT(req: NextRequest) {
  const data = await req.formData();
  // const id = data.get("id");
  console.log(data);
  return NextResponse.json(req.body);
}
