import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ProjectImageSwiperArrowProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ProjectImageSwiperArrow = ({
	className,
	...props
}: ProjectImageSwiperArrowProps) => {
	return (
		<button
			type="button"
			{...props}
			className={clsx(
				"hidden absolute top-0 h-full rounded-lg transition-colors",
				"lg:block lg:hover:bg-primary-300/70",
				className,
			)}
		/>
	);
};
