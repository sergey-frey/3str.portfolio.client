import { ProjectModel } from "@/shared/types";
import TravelXImage from "@/shared/assets/projects-img/travel-x/main.png";
import TodoListImage from "@/shared/assets/projects-img/todo-list/main.png";

export const projects: ProjectModel[] = [
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
      { id: 4, title: "TypeScript" },
      { id: 12, title: "Styled components" },
      { id: 5, title: "Redux Toolkit" },
    ],
    image: TodoListImage,
    links: {
      github: "https://github.com/3str-webdev/todo_list_test",
      deploy: "https://3str-todo.vercel.app/",
    },
    labels: ["Тестовое задание"],
  },
];
