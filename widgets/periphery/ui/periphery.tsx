"use client";

import { ToastsList } from "@/features/toasts-api";
import { Metrika } from "@/widgets/yandex-metrika";

const isDev = process.env.NEXT_PUBLIC_MODE === "dev";

export const Periphery = () => {
	return (
		<>
			<ToastsList />
			{!isDev && <Metrika />}
		</>
	);
};
