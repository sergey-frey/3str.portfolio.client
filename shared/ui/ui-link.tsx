import clsx from "clsx";
import Link from "next/link";
import type { HTMLAttributes } from "react";

type UILinkProps = HTMLAttributes<HTMLElement> & {
	component?: "a" | "Link";
	href: string;
	inNewTab?: boolean;
};

export const UILink = ({
	component = "Link",
	href,
	className,
	inNewTab,
	...props
}: UILinkProps) => {
	if (!href) {
		return null;
	}

	const linkClassName = clsx(
		className,
		"text-primary-300",
		"underline underline-offset-2 transition-all",
		"hover:underline hover:underline-offset-4",
	);

	const Component = {
		a: (
			<a
				{...props}
				className={linkClassName}
				href={href}
				target={inNewTab ? "_blank" : ""}
			/>
		),
		Link: <Link {...props} className={linkClassName} href={href} />,
	}[component];

	return Component;
};
