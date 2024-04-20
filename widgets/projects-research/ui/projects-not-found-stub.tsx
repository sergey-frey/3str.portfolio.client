import { DETAILS } from "@/shared/constants/details";
import { UILink } from "@/shared/ui";

export const ProjectsNotFoundStub = () => {
	return (
		<article className="flex flex-col gap-2 p-4 border-transparent border-s-2 border-s-primary-500">
			<p className="text-h3 font-semibold">Ничего не найдено</p>
			<p className="text-neutral-300">
				Если выбранная технология не используется ни в одном проекте, то, скорее
				всего, она использована прямо на{" "}
				<UILink component="a" href={DETAILS.PORTFOLIO_GITHUB} inNewTab={true}>
					этом
				</UILink>{" "}
				сайте!
			</p>
		</article>
	);
};
