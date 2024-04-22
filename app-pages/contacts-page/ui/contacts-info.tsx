"use client";

import { DETAILS } from "@/shared/constants/details";
import { UILink } from "@/shared/ui";
import { TelegramIcon } from "@/shared/ui/icons";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
	type HTMLMotionProps,
	LazyMotion,
	domAnimation,
	m,
} from "framer-motion";

type ContactsInfoProps = HTMLMotionProps<"div">;

export const ContactsInfo = ({ className, ...props }: ContactsInfoProps) => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				{...props}
				className={clsx("grid gap-10", className)}
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					type: "spring",
					damping: 10,
					stiffness: 120,
					duration: 0.4,
				}}
				viewport={{
					once: true,
				}}
			>
				<div className="flex items-center gap-4 flex-wrap">
					<TelegramIcon className="text-primary-300 w-7 h-7" />
					<UILink component="a" inNewTab href={DETAILS.TELEGRAM_LINK}>
						Telegram
					</UILink>
					<span className="text-neutral-300 whitespace-nowrap ml-auto">
						[&nbsp;{DETAILS.TELEGRAM_USERNAME}&nbsp;]
					</span>
				</div>

				<div className="flex items-center gap-4 flex-wrap">
					<PhoneIcon className="text-primary-300 w-7 h-7" />
					<UILink component="a" inNewTab href={`tel:${DETAILS.PHONE_NUMBER}`}>
						{DETAILS.PHONE_NUMBER}
					</UILink>
					<span className="text-neutral-300 whitespace-nowrap ml-auto">
						[&nbsp;+WhatsApp&nbsp;]
					</span>
				</div>

				<div className="flex items-center gap-4 text-primary-300">
					<AtSymbolIcon className="w-7 h-7" />
					{DETAILS.EMAIL}
				</div>
			</m.div>
		</LazyMotion>
	);
};
