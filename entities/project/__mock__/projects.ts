import type { ProjectDto } from "@/shared/api/types";
import munchkinCounterMain from "./assets/munchkin_counter.png";
import getadsMain from "./assets/getads-main.png";
import designPrismaMain from "./assets/design-prisma.png";
import wbsMain from "./assets/WBS-main.png";
import wbsServerMain from "./assets/WBS-server-main.png";
import wbsExtMain from "./assets/WBS-ext-main.png";

export const PROJECTS: ProjectDto[] = [
	{
		id: 2,
		attributes: {
			description:
				"Лендинг для одного из продуктов компании GetShop.TV. Верстал по готовому дизайну, лендинг статически генерируется Next.js. Верстка полностью адаптивная, а дизайн система зашита в tailwind config",
			title: "getads.ru",
			labels: "#этимпользуются real-work",
			updatedAt: "2024-04-15T17:47:49.060Z",
			publishedAt: "2024-04-15T17:43:52.835Z",
			github: null,
			deploy: "https://getads.ru",
			image: {
				data: [
					{
						id: 2,
						attributes: {
							name: "getads-main.png",
							alternativeText: null,
							width: 2518,
							height: 1678,
							formats: {
								thumbnail: {
									name: "thumbnail_getads-main.png",
									hash: "thumbnail_getads_main_7599ceb445",
									ext: ".png",
									mime: "image/png",
									width: 234,
									height: 156,
									size: 31.62,
									sizeInBytes: 31621,
									url: "/uploads/thumbnail_getads_main_7599ceb445.png",
								},
								small: {
									name: "small_getads-main.png",
									hash: "small_getads_main_7599ceb445",
									ext: ".png",
									mime: "image/png",
									width: 500,
									height: 333,
									size: 103.43,
									sizeInBytes: 103434,
									url: "/uploads/small_getads_main_7599ceb445.png",
								},
								medium: {
									name: "medium_getads-main.png",
									hash: "medium_getads_main_7599ceb445",
									ext: ".png",
									mime: "image/png",
									width: 750,
									height: 500,
									size: 199.36,
									sizeInBytes: 199358,
									url: "/uploads/medium_getads_main_7599ceb445.png",
								},
								large: {
									name: "large_getads-main.png",
									hash: "large_getads_main_7599ceb445",
									ext: ".png",
									mime: "image/png",
									width: 1000,
									height: 666,
									size: 314.16,
									sizeInBytes: 314163,
									url: "/uploads/large_getads_main_7599ceb445.png",
								},
							},
							hash: "getads_main_7599ceb445",
							ext: ".png",
							mime: "image/png",
							size: 437.25,
							url: getadsMain.src,
							updatedAt: "2024-04-15T17:42:54.734Z",
						},
					},
				],
			},
			skills: {
				data: [
					{
						id: 6,
						attributes: {
							title: "Next",
							updatedAt: "2024-04-15T17:37:38.011Z",
							publishedAt: "2024-04-15T17:37:38.009Z",
						},
					},
					{
						id: 4,
						attributes: {
							title: "TypeScript",
							updatedAt: "2024-04-15T10:46:35.904Z",
							publishedAt: "2024-04-15T10:46:35.903Z",
						},
					},
					{
						id: 3,
						attributes: {
							title: "Tailwind",
							updatedAt: "2024-04-15T10:45:53.704Z",
							publishedAt: "2024-04-15T10:45:53.703Z",
						},
					},
					{
						id: 7,
						attributes: {
							title: "HeadlessUI",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 8,
						attributes: {
							title: "Adaptive",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 13,
						attributes: {
							title: "Git",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
				],
			},
		},
	},
	{
		id: 4,
		attributes: {
			description:
				"WBS (Web Block Service) - сервис для блокировки контента в браузере. Это клиентская часть - админка для управления блокируемыми ресурсами. Реализована регистрация и авторизация, кэширование и инвалидация данных. Проект сделан специально для портфолио и нигде не размещён, но вы можете запустить его локально, следуя инструкциям в README",
			title: "WBS [Client]",
			labels: "self-education fullstack",
			updatedAt: "2024-04-15T17:47:49.060Z",
			publishedAt: "2024-04-15T17:43:52.835Z",
			github: "https://github.com/3str-webdev/web-block-service-client",
			deploy: "",
			image: {
				data: [
					{
						id: 3,
						attributes: {
							name: "WBS-main.png",
							alternativeText: null,
							width: 2514,
							height: 1420,
							formats: {
								thumbnail: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 234,
									height: 156,
									size: 31.62,
									sizeInBytes: 31621,
									url: "",
								},
								small: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 500,
									height: 333,
									size: 103.43,
									sizeInBytes: 103434,
									url: "",
								},
								medium: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 750,
									height: 500,
									size: 199.36,
									sizeInBytes: 199358,
									url: "",
								},
								large: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 1000,
									height: 666,
									size: 314.16,
									sizeInBytes: 314163,
									url: "",
								},
							},
							hash: "WBS_main_7599ceb445",
							ext: ".png",
							mime: "image/png",
							size: 437.25,
							url: wbsMain.src,
							updatedAt: "2024-04-15T17:42:54.734Z",
						},
					},
				],
			},
			skills: {
				data: [
					{
						id: 6,
						attributes: {
							title: "Next",
							createdAt: "2024-04-15T17:37:33.694Z",
							updatedAt: "2024-04-15T17:37:38.011Z",
							publishedAt: "2024-04-15T17:37:38.009Z",
						},
					},
					{
						id: 4,
						attributes: {
							title: "TypeScript",
							updatedAt: "2024-04-15T10:46:35.904Z",
							publishedAt: "2024-04-15T10:46:35.903Z",
						},
					},
					{
						id: 15,
						attributes: {
							title: "React Query",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 3,
						attributes: {
							title: "Tailwind",
							updatedAt: "2024-04-15T10:45:53.704Z",
							publishedAt: "2024-04-15T10:45:53.703Z",
						},
					},
					{
						id: 20,
						attributes: {
							title: "react-hook-form",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 14,
						attributes: {
							title: "Orval",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 13,
						attributes: {
							title: "Git",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
				],
			},
		},
	},
	{
		id: 5,
		attributes: {
			description:
				"WBS (Web Block Service) Это серверная часть - backend для управления блоками в базе данных и синхронизации их с клиентом, а так же, для авторизации и регистрации пользователей. Вы можете запустить его локально, следуя инструкциям в README",
			title: "WBS [Server]",
			labels: "self-education fullstack",
			updatedAt: "2024-04-15T17:47:49.060Z",
			publishedAt: "2024-04-15T17:43:52.835Z",
			github: "https://github.com/3str-webdev/web-block-service-server",
			deploy: "",
			image: {
				data: [
					{
						id: 3,
						attributes: {
							name: "WBS-main.png",
							alternativeText: null,
							width: 2514,
							height: 1420,
							formats: {
								thumbnail: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 234,
									height: 156,
									size: 31.62,
									sizeInBytes: 31621,
									url: "",
								},
								small: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 500,
									height: 333,
									size: 103.43,
									sizeInBytes: 103434,
									url: "",
								},
								medium: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 750,
									height: 500,
									size: 199.36,
									sizeInBytes: 199358,
									url: "",
								},
								large: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 1000,
									height: 666,
									size: 314.16,
									sizeInBytes: 314163,
									url: "",
								},
							},
							hash: "WBS_server_main_7599ceb445",
							ext: ".png",
							mime: "image/png",
							size: 437.25,
							url: wbsServerMain.src,
							updatedAt: "2024-04-15T17:42:54.734Z",
						},
					},
				],
			},
			skills: {
				data: [
					{
						id: 16,
						attributes: {
							title: "Nest",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 4,
						attributes: {
							title: "TypeScript",
							updatedAt: "2024-04-15T10:46:35.904Z",
							publishedAt: "2024-04-15T10:46:35.903Z",
						},
					},
					{
						id: 17,
						attributes: {
							title: "PrismaORM",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 13,
						attributes: {
							title: "Git",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 18,
						attributes: {
							title: "Authentication",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
				],
			},
		},
	},
	{
		id: 6,
		attributes: {
			description:
				"WBS (Web Block Service) Это браузерное расширение - оно и обеспечивает блокировку ресурсов с помощью браузерного API. Вы можете запустить его локально, следуя инструкциям в README",
			title: "WBS [Extension]",
			labels: "self-education fullstack",
			updatedAt: "2024-04-15T17:47:49.060Z",
			publishedAt: "2024-04-15T17:43:52.835Z",
			github: "https://github.com/3str-webdev/web-block-service-extension",
			deploy: "",
			image: {
				data: [
					{
						id: 3,
						attributes: {
							name: "WBS-main.png",
							alternativeText: null,
							width: 2514,
							height: 1420,
							formats: {
								thumbnail: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 234,
									height: 156,
									size: 31.62,
									sizeInBytes: 31621,
									url: "",
								},
								small: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 500,
									height: 333,
									size: 103.43,
									sizeInBytes: 103434,
									url: "",
								},
								medium: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 750,
									height: 500,
									size: 199.36,
									sizeInBytes: 199358,
									url: "",
								},
								large: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 1000,
									height: 666,
									size: 314.16,
									sizeInBytes: 314163,
									url: "",
								},
							},
							hash: "WBS_server_main_7599ceb445",
							ext: ".png",
							mime: "image/png",
							size: 437.25,
							url: wbsExtMain.src,
							updatedAt: "2024-04-15T17:42:54.734Z",
						},
					},
				],
			},
			skills: {
				data: [
					{
						id: 1,
						attributes: {
							title: "React",
							createdAt: "2024-04-15T10:33:04.434Z",
							updatedAt: "2024-04-15T10:44:20.179Z",
							publishedAt: "2024-04-15T10:44:20.177Z",
						},
					},
					{
						id: 4,
						attributes: {
							title: "TypeScript",
							updatedAt: "2024-04-15T10:46:35.904Z",
							publishedAt: "2024-04-15T10:46:35.903Z",
						},
					},
					{
						id: 15,
						attributes: {
							title: "React Query",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 13,
						attributes: {
							title: "Git",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 19,
						attributes: {
							title: "crxjs",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 14,
						attributes: {
							title: "Orval",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
				],
			},
		},
	},
	{
		id: 3,
		attributes: {
			description: `Design Prisma - бесплатный плагин, позволяющий больше не тратить деньги на "Figma Dev mode". С его помощью можно: Копировать стили элементов в привычном CSS формате Получать заданную дизайн систему в виде CSS переменных Использовать различные единицы измерения Настраивать получаемые стили И многое другое!`,
			title: "Design Prisma",
			labels: "#этимпользуются no-commerce",
			updatedAt: "2024-04-15T17:47:49.060Z",
			publishedAt: "2024-04-15T17:43:52.835Z",
			github: null,
			deploy:
				"https://www.figma.com/community/plugin/1336241927997783599/design-prisma",
			image: {
				data: [
					{
						id: 3,
						attributes: {
							name: "design-prisma.png",
							alternativeText: null,
							width: 2518,
							height: 1678,
							formats: {
								thumbnail: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 234,
									height: 156,
									size: 31.62,
									sizeInBytes: 31621,
									url: "",
								},
								small: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 500,
									height: 333,
									size: 103.43,
									sizeInBytes: 103434,
									url: "",
								},
								medium: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 750,
									height: 500,
									size: 199.36,
									sizeInBytes: 199358,
									url: "",
								},
								large: {
									name: "",
									hash: "",
									ext: ".png",
									mime: "image/png",
									width: 1000,
									height: 666,
									size: 314.16,
									sizeInBytes: 314163,
									url: "",
								},
							},
							hash: "getads_main_7599ceb445",
							ext: ".png",
							mime: "image/png",
							size: 437.25,
							url: designPrismaMain.src,
							updatedAt: "2024-04-15T17:42:54.734Z",
						},
					},
				],
			},
			skills: {
				data: [
					{
						id: 9,
						attributes: {
							title: "Svelte",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 4,
						attributes: {
							title: "TypeScript",
							updatedAt: "2024-04-15T10:46:35.904Z",
							publishedAt: "2024-04-15T10:46:35.903Z",
						},
					},
					{
						id: 3,
						attributes: {
							title: "Tailwind",
							updatedAt: "2024-04-15T10:45:53.704Z",
							publishedAt: "2024-04-15T10:45:53.703Z",
						},
					},
					{
						id: 7,
						attributes: {
							title: "HeadlessUI",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 10,
						attributes: {
							title: "Advanced Vite",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 13,
						attributes: {
							title: "Git",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
				],
			},
		},
	},
	{
		id: 1,
		attributes: {
			description:
				"Веб-приложение для подсчёта очков в настольной игре Munchkin, которая мне очень нравится. Все настройки и значения в приложении сохраняются в кэш браузера с использованием Zustand, а сам проект постоянно мигрирует на актуальные технологии. CI/CD - GitHub Actions",
			title: "Munchkin Counter",
			labels: "#длясебя #этимпользуются no-commerce",
			updatedAt: "2024-04-15T12:22:28.063Z",
			publishedAt: "2024-04-15T10:53:04.217Z",
			github: "https://github.com/3str-webdev/Munchkin_Counter/tree/main",
			deploy: "https://3str-webdev.github.io/Munchkin_Counter/",
			image: {
				data: [
					{
						id: 1,
						attributes: {
							name: "Снимок экрана 2024-04-15 152046.png",
							alternativeText: null,
							width: 2517,
							height: 1678,
							formats: {
								thumbnail: {
									name: "thumbnail_Снимок экрана 2024-04-15 152046.png",
									hash: "thumbnail_Snimok_ekrana_2024_04_15_152046_771b67d095",
									ext: ".png",
									mime: "image/png",
									width: 234,
									height: 156,
									size: 3.98,
									sizeInBytes: 3980,
									url: "/uploads/thumbnail_Snimok_ekrana_2024_04_15_152046_771b67d095.png",
								},
								large: {
									name: "large_Снимок экрана 2024-04-15 152046.png",
									hash: "large_Snimok_ekrana_2024_04_15_152046_771b67d095",
									ext: ".png",
									mime: "image/png",
									width: 1000,
									height: 667,
									size: 26.36,
									sizeInBytes: 26358,
									url: "/uploads/large_Snimok_ekrana_2024_04_15_152046_771b67d095.png",
								},
								small: {
									name: "small_Снимок экрана 2024-04-15 152046.png",
									hash: "small_Snimok_ekrana_2024_04_15_152046_771b67d095",
									ext: ".png",
									mime: "image/png",
									width: 500,
									height: 333,
									size: 10.68,
									sizeInBytes: 10677,
									url: "/uploads/small_Snimok_ekrana_2024_04_15_152046_771b67d095.png",
								},
								medium: {
									name: "medium_Снимок экрана 2024-04-15 152046.png",
									hash: "medium_Snimok_ekrana_2024_04_15_152046_771b67d095",
									ext: ".png",
									mime: "image/png",
									width: 750,
									height: 500,
									size: 17.58,
									sizeInBytes: 17579,
									url: "/uploads/medium_Snimok_ekrana_2024_04_15_152046_771b67d095.png",
								},
							},
							hash: "Snimok_ekrana_2024_04_15_152046_771b67d095",
							ext: ".png",
							mime: "image/png",
							size: 9.48,
							url: munchkinCounterMain.src,
							updatedAt: "2024-04-15T12:21:23.935Z",
						},
					},
				],
			},
			skills: {
				data: [
					{
						id: 1,
						attributes: {
							title: "React",
							updatedAt: "2024-04-15T10:44:20.179Z",
							publishedAt: "2024-04-15T10:44:20.177Z",
						},
					},
					{
						id: 4,
						attributes: {
							title: "TypeScript",
							updatedAt: "2024-04-15T10:46:35.904Z",
							publishedAt: "2024-04-15T10:46:35.903Z",
						},
					},
					{
						id: 3,
						attributes: {
							title: "Tailwind",
							updatedAt: "2024-04-15T10:45:53.704Z",
							publishedAt: "2024-04-15T10:45:53.703Z",
						},
					},
					{
						id: 2,
						attributes: {
							title: "Zustand",
							updatedAt: "2024-04-15T10:45:25.631Z",
							publishedAt: "2024-04-15T10:45:25.629Z",
						},
					},
					{
						id: 5,
						attributes: {
							title: "Jest",
							updatedAt: "2024-04-15T10:47:27.521Z",
							publishedAt: "2024-04-15T10:47:27.520Z",
						},
					},
					{
						id: 13,
						attributes: {
							title: "Git",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
					{
						id: 21,
						attributes: {
							title: "СI/CD",
							createdAt: "2024-04-15T17:38:06.730Z",
							updatedAt: "2024-04-15T17:38:07.421Z",
							publishedAt: "2024-04-15T17:38:07.420Z",
						},
					},
				],
			},
		},
	},
];
