import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { CrossIcon } from "./icons";

interface UIBadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "delete" | "match";
}

export const UIBadge = ({
	variant = "default",
	className,
	type = "button",
	children,
	...props
}: UIBadgeProps) => {
	const isDelete = variant === "delete";

	const variantClass = {
		default: "text-neutral-300 hover:bg-neutral-500 transition-colors",
		delete:
			"text-neutral-300 hover:bg-neutral-500 hover:border-neutral-300 transition-all",
		match: "bg-primary-600 text-neutral-100",
	}[variant];

	const badgeClassName = clsx(
		`flex items-center gap-2 px-3 py-[6px] bg-neutral-600 border-[1px] border-solid 
    border-neutral-600 rounded-xl text-h3 font-h3 select-none`,
		className,
		variantClass,
	);

	return (
		<button {...props} type={type} className={badgeClassName}>
			{children}

			{isDelete && (
				<>
					<div className="w-[1px] bg-neutral-300 h-5" />
					<CrossIcon />
				</>
			)}
		</button>
	);
};
