import { ERRORS } from "@/shared/constants/errors";
import type { PaginationOptions } from "swiper/types";

export const swiperPaginationOptions: PaginationOptions = {
	clickable: true,
};

export const errorURL = `/projects?error=${ERRORS.INVALID_PROJECT_ID}`;
