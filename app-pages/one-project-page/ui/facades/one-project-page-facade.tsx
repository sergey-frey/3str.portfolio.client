import clsx from "clsx";
import type { ReactNode } from "react";

type OneProjectPageFacadeProps = {
	title: ReactNode;
	swiper: ReactNode;
	description: ReactNode;
	githubLink: ReactNode;
	deployLink: ReactNode;
	labels: ReactNode;
	skills: ReactNode;
};

export const OneProjectPageFacade = ({
	title,
	swiper,
	description,
	githubLink,
	deployLink,
	labels,
	skills,
}: OneProjectPageFacadeProps) => {
	return (
		<section className="px-4 lg:px-10 pb-[100px] max-w-[800px] mx-auto">
			<div className="flex items-center gap-3">{title}</div>

			<div className="mt-4">{swiper}</div>

			<div className={clsx("flex flex-col gap-8 mt-8", "md:flex-row")}>
				<div className={clsx("flex flex-col gap-8")}>
					{description}

					<div className="mt-auto flex flex-col gap-5">
						{githubLink}
						{deployLink}
					</div>
				</div>

				<div
					className={clsx(
						"flex flex-col gap-5 self-start",
						"w-full",
						"p-5 bg-neutral-800 rounded-xl",
						"md:min-w-[300px]",
					)}
				>
					{labels}
					{skills}
				</div>
			</div>
		</section>
	);
};
