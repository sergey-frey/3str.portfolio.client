"use client";

import { ToastsList } from "@/features/toasts-api";
import { Metrika } from "@/widgets/yandex-metrika";

export const Periphery = () => {
	return (
		<>
			<ToastsList />
			<Metrika />
		</>
	);
};
