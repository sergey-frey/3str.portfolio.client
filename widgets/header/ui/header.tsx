import { UILink } from "@/shared/ui";
import clsx from "clsx";
import { HeaderLink } from "./header-link";

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
					"w-full flex items-center justify-end pb-1 pt-2 bg-neutral-1 backdrop-blur-md rounded-b-md overflow-hidden",
				)}
			>
				<nav className="flex items-center gap-2 overflow-x-auto pb-1 px-5">
					<HeaderLink href="/projects">Проекты</HeaderLink>
					<HeaderLink href="/contacts">Контакты</HeaderLink>
				</nav>
			</div>
		</header>
	);
};
