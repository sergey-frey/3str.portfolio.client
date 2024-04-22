import ky from "ky";

export const sendToTelegram = async (message: string) => {
	const API_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
	const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

	if (!API_TOKEN) {
		throw new Error("Telegram API token not found");
	}

	if (!CHAT_ID) {
		throw new Error("Telegram chat ID not found");
	}

	const url = new URL(`https://api.telegram.org/bot${API_TOKEN}/sendMessage`);
	url.searchParams.append("chat_id", CHAT_ID);
	url.searchParams.append("text", message);

  console.log(url.toString());

	try {
		const response = await ky.get(url.toString());

    if (response.status !== 200) {
      throw new Error("Failed to send message to Telegram");
    }
	} catch (e) {
		console.error(e);
		throw new Error("Failed to send message to Telegram");
	}
};