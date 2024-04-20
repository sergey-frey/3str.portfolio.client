import type { ProjectDto } from "@/shared/api/types";
import { UIImage } from "@/shared/ui";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperPaginationOptions } from "../constants";
import { ProjectImageSwiperArrow } from "./project-image-swiper-arrow";

type ProjectImagesSwiperProps = HTMLAttributes<HTMLDivElement> & {
	project: ProjectDto;
};

export const ProjectImagesSwiper = ({
	project,
	className,
	...props
}: ProjectImagesSwiperProps) => {
	const images = project.attributes.image.data;

	return (
		<div {...props} className={clsx("relative", className)}>
			<ProjectImageSwiperArrow
				type="button"
				className={clsx(
					"right-[calc(100%_+_10px)] swiper-prev",
					images.length < 2 && "!hidden",
				)}
			>
				<span className="sr-only">Предыдущее изображение</span>
				<ChevronLeftIcon className="w-10 h-10" />
			</ProjectImageSwiperArrow>

			<Swiper
				className="rounded-xl"
				modules={[Pagination, Navigation]}
				pagination={swiperPaginationOptions}
				navigation={{
					prevEl: ".swiper-prev",
					nextEl: ".swiper-next",
				}}
				loop
			>
				{images.map((image) => {
					return (
						<SwiperSlide key={image.id}>
							<UIImage
								src={image.attributes.url}
								alt={image.attributes.alternativeText ?? ""}
								width={image.attributes.width}
								height={image.attributes.height}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<ProjectImageSwiperArrow
				type="button"
				className={clsx(
					"left-[calc(100%_+_10px)] swiper-next",
					images.length < 2 && "!hidden",
				)}
			>
				<span className="sr-only">Следующее изображение</span>
				<ChevronRightIcon className="w-10 h-10" />
			</ProjectImageSwiperArrow>
		</div>
	);
};
