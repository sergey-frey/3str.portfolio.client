"use client";

import { TransitionGroup } from "react-transition-group";
import { useToastsAPIStore } from "../model/use-toasts-api-store";
import { Toast } from "./toast";
import clsx from "clsx";

export const ToastsList = () => {
	const toasts = useToastsAPIStore((state) => state.toasts);

	const hasToasts = toasts.length > 0;

	return (
		<TransitionGroup
			enter
			component={"ul"}
			className={clsx(
				"fixed top-0 right-0 flex flex-col gap-3 z-50 max-w-sm w-full p-4",
				hasToasts ? "pointer-events-auto" : "pointer-events-none",
			)}
		>
			{toasts.map((toast) => {
				return <Toast key={toast.id} toast={toast} />;
			})}
		</TransitionGroup>
	);
};
