import { useContactMessageMutation } from "@/entities/contacts";
import { useToastsAPIStore } from "@/features/toasts-api";
import type { FormEvent } from "react";

type UseContactMeOptions = {
	onSuccess?: () => void;
};

export const useContactMe = ({
	onSuccess: customOnSuccess,
}: UseContactMeOptions) => {
	const addToast = useToastsAPIStore((store) => store.addToast);

	const onSuccess = () => {
		if (customOnSuccess) {
			customOnSuccess();
		}

		addToast({
			status: "success",
			title: "Сообщение отправлено",
			text: "Я свяжусь с вами в ближайшее время!",
			time: 5000,
		});
	};

	const onError = () => {
		addToast({
			status: "error",
			title: "Произошла ошибка",
			text: "К сожалению, это сообщение я не получу. Буду благодарен если вы свяжетесь со мной по моим реквизитам",
			time: 5000,
		});
	};

	const { mutate } = useContactMessageMutation({
		onSuccess,
		onError,
	});

	const handleSubmit = (message: string) => (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!message) {
			return;
		}

		mutate(message);
	};

	return { handleSubmit };
};
