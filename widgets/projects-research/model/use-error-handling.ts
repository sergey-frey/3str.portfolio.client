import { useToastsAPIStore } from "@/features/toasts-api";
import { ERRORS } from "@/shared/constants/errors";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type UseErrorHandlingOptions = {
	pageReady: boolean;
};

export const useErrorHandling = ({ pageReady }: UseErrorHandlingOptions) => {
	const addToast = useToastsAPIStore((state) => state.addToast);
	const searchParams = useSearchParams();
	const error = searchParams.get("error");

	useEffect(() => {
		if (!(error && pageReady)) {
			return;
		}

		// FIXME: Заменить на Observer при расширении
		switch (error) {
			case ERRORS.INVALID_PROJECT_ID:
				{
					addToast({
						status: "error",
						title: "Такого проекта нет",
						text: "Похоже, вы пытались посмотреть несуществующий проект. Ничего страшного, посмотрите на те, которые точно есть :)",
					});
				}
				break;
		}
	}, [error, addToast, pageReady]);
};
