import clsx from "clsx";
import type { HTMLAttributes } from "react";

type ProjectLabelProps = HTMLAttributes<HTMLElement>;

export const ProjectLabel = ({ className, ...props }: ProjectLabelProps) => {
	return (
		<p
			{...props}
			className={clsx(
				"text-primary-300 px-2 py-1 rounded-xl border-[1px] border-primary-300 select-none",
				"text-nowrap",
				className,
			)}
		/>
	);
};
