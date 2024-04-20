import { UISkeleton } from "@/shared/ui";
import { BadgeListSkeleton } from "@/shared/ui/skeletons";
import clsx from "clsx";

export const OneProjectPageSkeleton = () => {
	return (
		<section className="px-4 lg:px-10 pb-[100px] max-w-[800px] mx-auto">
			<div className="flex items-center gap-3">
				<UISkeleton className="w-[30%] h-10 min-w-[200px]" />
			</div>

			<UISkeleton className="w-full aspect-video mt-4" />

			<div className={clsx("flex flex-col gap-8 mt-8", "md:flex-row")}>
				<div className={clsx("flex flex-col gap-8 w-full")}>
					<div className="grid gap-2">
						<UISkeleton className="h-4 w-full" />
						<UISkeleton className="h-4 w-full" />
						<UISkeleton className="h-4 w-full" />
						<UISkeleton className="h-4 w-full" />
					</div>

					<div className="mt-auto flex flex-col gap-5">
						<UISkeleton className="w-1/2 h-4" />
						<UISkeleton className="w-1/2 h-4" />
					</div>
				</div>

				<div
					className={clsx(
						"flex flex-col gap-5 self-start",
						"w-full",
						"p-5 bg-neutral-800 rounded-xl",
						"md:min-w-[300px] md:max-w-[300px]",
					)}
				>
					<BadgeListSkeleton count={2} minWidth={100} maxWidth={140} />
					<BadgeListSkeleton count={8} minWidth={90} maxWidth={120} />
				</div>
			</div>
		</section>
	);
};
