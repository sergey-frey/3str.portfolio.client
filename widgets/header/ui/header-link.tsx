"use client";

import clsx from "clsx";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

type HeaderLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const HeaderLink = ({ className, ...props }: HeaderLinkProps) => {
	const pathname = usePathname();

	const isActive = pathname === props.href;

	return (
		<Link
			{...props}
			className={clsx(
				"text-primary-500 transition-colors",
				"px-2 py-1 rounded-lg text-sm",
				"md:py-2 md:px-4 md:text-md",
				"hover:bg-primary-500/20 hover:text-neutral-50",
				isActive && "!bg-primary-500/60 !text-neutral-50",
				className,
			)}
		/>
	);
};
