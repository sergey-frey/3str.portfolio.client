import clsx from "clsx";

export const Header = () => {
	return (
		<header
			className={clsx(
				"sticky w-full flex gap-[10px] px-4 z-20",
				"lg:px-10",
				"container mx-auto",
			)}
		>
			<div
				className={clsx(
					"text-primary-500 bg-neutral-1 text-h3 font-h3 px-5 py-4 backdrop-blur-md rounded-b-md",
					"md:text-h2 font-h2",
				)}
			>
				3str.Portfolio
			</div>

			<div
				className={clsx(
					"w-full hidden items-center justify-end px-5 py-4 bg-neutral-1 backdrop-blur-md rounded-b-md",
					"md:flex",
				)}
			>
				{/* В разработке */}
			</div>
		</header>
	);
};
