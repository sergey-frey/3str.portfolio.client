import TodoListImage from "@/shared/assets/projects-img/todo-list/main.png";
import TravelXImage from "@/shared/assets/projects-img/travel-x/main.png";
import CastawayImage from "@/shared/assets/projects-img/castaway/main.png";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: 1,
        title: "Travel X",
        description:
          "Вёрстка минималистичного лендинга для турагентства. Сайт хорошо выглядит на экранах с любым разрешением. Используется сторонняя библиотека Swiper для организации перелистывания локаций ",
        skills: [
          { id: 1, title: "Адаптивная вёрстка" },
          { id: 2, title: "Кросс-браузерная вёрстка" },
          { id: 8, title: "Gulp" },
          { id: 9, title: "Sass" },
        ],
        image: TravelXImage,
        links: {
          github: "https://github.com/3str-webdev/travel_x_project",
          deploy: "https://travel-x-project.netlify.app/",
        },
        labels: ["Self-education"],
      },
      {
        id: 2,
        title: "ToDo list",
        description:
          "Выполненное тестовое задание на позицию Junior Frontend Developer. Самостоятельно реализованы UI компоненты с использованием Styled components.",
        skills: [
          { id: 7, title: "Next" },
          { id: 5, title: "Redux Toolkit" },
          { id: 4, title: "TypeScript" },
          { id: 13, title: "React Hook Form" },
          { id: 12, title: "Styled components" },
        ],
        image: TodoListImage,
        links: {
          github: "https://github.com/3str-webdev/todo_list_test",
          deploy: "https://3str-todo.vercel.app/",
        },
        labels: ["Тестовое задание"],
      },
      {
        id: 3,
        title: "Castaway",
        description:
          "Адаптивная вёрстка сайта подкаста с использованием Astro, Tailwind и Typescript.",
        skills: [
          { id: 1, title: "Адаптивная вёрстка" },
          { id: 2, title: "Кросс-браузерная вёрстка" },
          { id: 4, title: "TypeScript" },
          { id: 14, title: "Astro" },
          { id: 15, title: "Tailwind" },
          { id: 16, title: "UI/UX" },
        ],
        image: CastawayImage,
        links: {
          github: "https://github.com/3str-webdev/castaway_site",
          deploy: "https://castaway-project.netlify.app/",
        },
        labels: ["Self-education"],
      },
    ],
  });
}
