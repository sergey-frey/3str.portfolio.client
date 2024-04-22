import { useMutation } from "@tanstack/react-query";
import ky from "ky";

type MutationCbOptions = {
	onSuccess?: () => void;
	onError?: () => void;
};

const sendContactMessage = async (message: string) => {
	try {
		const response = await ky.post("/api/contacts", {
			json: {
				message,
			},
		});

		return response.json();
	} catch (e) {
		throw new Error("Failed to send message");
	}
};

export const useContactMessageMutation = ({
	onSuccess,
	onError,
}: MutationCbOptions) => {
	return useMutation({
		mutationFn: sendContactMessage,
		onSuccess,
		onError,
	});
};
