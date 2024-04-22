"use client";

import { useProjectByIdQuery } from "@/entities/project";
import { parseLabels } from "@/shared/lib/parse-labels";
import { UIBadge, UILink, UILoadableContent } from "@/shared/ui";
import { UIBreadcrumbs } from "@/shared/ui/breadcrumbs";
import { ProjectLabel } from "@/shared/ui/project-label";
import clsx from "clsx";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { redirect, RedirectType } from "next/navigation";
import {
	getDescriptionAnimationProps,
	getHeaderAnimationProps,
	getLinksAnimationProps,
} from "../model/animation-functions";
import { OneProjectPageFacade } from "./facades/one-project-page-facade";
import { ProjectImagesSwiper } from "./project-images-swiper";
import { OneProjectPageSkeleton } from "./skeletons/one-project-page-skeleton";

import "swiper/css";
import "swiper/css/pagination";
import { errorURL } from "../constants";

type OnePageParams = {
	params: {
		projectId: number;
	};
};

export const OneProjectPage = ({ params }: OnePageParams) => {
	const projectId = params.projectId;

	if (!projectId || Array.isArray(projectId) || !Number(projectId)) {
		redirect(errorURL, RedirectType.replace);
	}

	const projectQuery = useProjectByIdQuery(Number(projectId));

	if (projectQuery.error) {
		redirect(errorURL, RedirectType.replace);
	}

	const labels = parseLabels(projectQuery.data?.attributes.labels ?? "");
	const skills = projectQuery.data?.attributes.skills.data ?? [];
	const githubUrl = projectQuery.data?.attributes.github;
	const deployUrl = projectQuery.data?.attributes.deploy;

	return (
		<UILoadableContent
			canShow={Boolean(projectQuery.data)}
			isLoading={projectQuery.isLoading}
			loader={<OneProjectPageSkeleton />}
		>
			<OneProjectPageFacade
				title={
					<LazyMotion features={domAnimation}>
						<m.h1
							className="text-h2 font-h2 lg:text-h1 lg:font-h1"
							{...getHeaderAnimationProps()}
						>
							{projectQuery.data?.attributes.title}
						</m.h1>
					</LazyMotion>
				}
				breadcrumbs={
					<UIBreadcrumbs
						path={[
							{
								label: "Проекты",
								path: "/projects",
								isCurrent: false,
							},
							{
								label: projectQuery.data?.attributes.title ?? "",
								path: "",
								isCurrent: true,
							},
						]}
					/>
				}
				swiper={
					<>
						{projectQuery.data && (
							<ProjectImagesSwiper
								project={projectQuery.data}
								className="mt-4"
							/>
						)}
					</>
				}
				description={
					<LazyMotion features={domAnimation}>
						<m.p
							className={clsx("text-m text-neutral-400")}
							{...getDescriptionAnimationProps()}
						>
							{projectQuery.data?.attributes.description}
						</m.p>
					</LazyMotion>
				}
				githubLink={
					<LazyMotion features={domAnimation}>
						<m.div {...getLinksAnimationProps(0.2)}>
							{githubUrl && (
								<UILink
									component="a"
									href={githubUrl}
									inNewTab
									className="first:mt-5"
								>
									Посетить GitHub проекта
								</UILink>
							)}
						</m.div>
					</LazyMotion>
				}
				deployLink={
					<LazyMotion features={domAnimation}>
						<m.div {...getLinksAnimationProps(0.4)}>
							{deployUrl && (
								<UILink
									component="a"
									href={deployUrl}
									inNewTab
									className="pt-5"
								>
									Посмотреть на сам проект
								</UILink>
							)}
						</m.div>
					</LazyMotion>
				}
				labels={
					<ul className="flex flex-wrap gap-3">
						{labels.map((label, i) => {
							return (
								<ProjectLabel key={`project_label_${String(i)}`}>
									{label}
								</ProjectLabel>
							);
						})}
					</ul>
				}
				skills={
					<ul className="flex flex-wrap gap-3">
						{skills.map((skill, i) => {
							return (
								<li key={`project_skill_${String(i)}`}>
									<UIBadge className="pointer-events-none" disabled>
										<p className="whitespace-nowrap">
											{skill.attributes.title}
										</p>
									</UIBadge>
								</li>
							);
						})}
					</ul>
				}
			/>
		</UILoadableContent>
	);
};
