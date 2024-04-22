import { NextResponse } from "next/server";
import { safeParse } from "valibot";
import { sendToTelegram } from "./senders";
import { type ContactMessageDTO, contactMessageSchema } from "./validations";

const isDev = process.env.MODE === "dev";
const whitelistUrls = [
	isDev
		? "http://localhost:3000/api/contacts"
		: "https://3str.vercel.app/api/contacts",
];

export async function POST(req: Request) {
	const url = req.url;

	if (!whitelistUrls.includes(url)) {
		return NextResponse.json("Forbidden", { status: 403 });
	}

	const data: ContactMessageDTO = await req.json();
	const parseResult = safeParse(contactMessageSchema, data);

	if (!parseResult.success) {
		return NextResponse.json("Bad request", { status: 400 });
	}

	return await Promise.all([sendToTelegram(data.message)])
		.catch(() => {
			return NextResponse.json("Internal server error", { status: 500 });
		})
		.then(() => {
			return NextResponse.json("Success", { status: 200 });
		});
}
