import clsx from "clsx";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Breadcrumb = {
	label: string;
	path: string;
	isCurrent: boolean;
};

type UIBreadcrumbsProps = HTMLAttributes<HTMLElement> & {
	path: Breadcrumb[];
};

export const UIBreadcrumbs = ({
	path,
	className,
	...props
}: UIBreadcrumbsProps) => {
	return (
		<article {...props} className={clsx("flex items-center gap-2", className)}>
			{path.map((crumb, i) => {
				const isLastPoint = i === path.length - 1;
				const tabIndex = crumb.isCurrent ? -1 : 0;

				return (
					<span key={`crumb_${String(i)}`} className="flex items-center gap-2">
						<Link
							className={clsx(
								"text-md underline-offset-4",
								!isLastPoint && "hover:underline",
								isLastPoint && "pointer-events-none",
								crumb.isCurrent ? "text-primary-300" : "text-neutral-300",
							)}
							aria-hidden={crumb.isCurrent}
							tabIndex={tabIndex}
							href={crumb.path}
						>
							{crumb.label}
						</Link>

						{!isLastPoint && <ChevronRightIcon className="w-4 h-4" />}
					</span>
				);
			})}
		</article>
	);
};
