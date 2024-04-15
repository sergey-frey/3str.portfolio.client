import type { AxiosRequestConfig } from "axios";

export const addApiAuthHeader = (config: AxiosRequestConfig = {}) => {
	const token = process.env.NEXT_PUBLIC_API_ACCESS_KEY;

	if (config.headers) {
		config.headers.Authorization = token;
	} else {
		config.headers = {
			Authorization: token,
		};
	}

	return config;
};
