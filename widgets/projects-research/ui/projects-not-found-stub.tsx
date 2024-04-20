export const ProjectsNotFoundStub = () => {
	return (
		<article className="flex flex-col gap-2 p-4 border-transparent border-s-2 border-s-primary-500">
			<p className="text-h3 font-semibold">Ничего не найдено</p>
			<p className="text-neutral-300">
				Если выбранная технология не используется ни в одном проекте, то, скорее
				всего, она использована прямо на{" "}
				<span className="text-primary-500">этом</span> сайте!
			</p>
		</article>
	);
};
