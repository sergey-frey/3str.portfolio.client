import { ProjectModel } from "@/shared/types";
import { ProjectFormModel } from "@/shared/types/project-form-model";

class Projects {
  data: ProjectModel[] = [];
  constructor() {
    this.data = [
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
        image: "/api/v1/projects/image?id=1",
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
        image: "/api/v1/projects/image?id=2",
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
        image: "/api/v1/projects/image?id=3",
        links: {
          github: "https://github.com/3str-webdev/castaway_site",
          deploy: "https://castaway-project.netlify.app/",
        },
        labels: ["Self-education"],
      },
      {
        id: 4,
        title: "Munchkin Counter",
        description:
          "Приложение для подсчёта силы в настольной игре Munchkin. Приложение активно развивается, внедряются функции, которых нехватает пользователям. Приложение mobile-first, но хорошо выглядит на любых устройствах.",
        skills: [
          { id: 3, title: "React" },
          { id: 6, title: "Zustand" },
          { id: 17, title: "Анимация" },
          { id: 18, title: "React-transition-group" },
        ],
        image: "/api/v1/projects/image?id=4",
        links: {
          github: "https://github.com/3str-webdev/Munchkin_Counter/tree/main",
          deploy: "https://3str-webdev.github.io/Munchkin_Counter/",
        },
        labels: ["Этим пользуются"],
      },
    ];
  }

  updateProject(data: ProjectFormModel) {
    this.data = this.data.map((p) => {
      if (p.id !== +data.id) return p;
      return { ...data, image: p.image };
    });
  }

  getProjectById(id: ProjectModel["id"]): ProjectModel | undefined {
    return this.data.find((p) => p.id === id);
  }

  getProjects(): ProjectModel[] {
    return this.data;
  }
}
const projects = new Projects();

export { projects };

// export let PROJECTS: ProjectModel[] = [
//   {
//     id: 1,
//     title: "Travel X",
//     description:
//       "Вёрстка минималистичного лендинга для турагентства. Сайт хорошо выглядит на экранах с любым разрешением. Используется сторонняя библиотека Swiper для организации перелистывания локаций ",
//     skills: [
//       { id: 1, title: "Адаптивная вёрстка" },
//       { id: 2, title: "Кросс-браузерная вёрстка" },
//       { id: 8, title: "Gulp" },
//       { id: 9, title: "Sass" },
//     ],
//     image: "/projects-img/travel-x/main.png",
//     links: {
//       github: "https://github.com/3str-webdev/travel_x_project",
//       deploy: "https://travel-x-project.netlify.app/",
//     },
//     labels: ["Self-education"],
//   },
//   {
//     id: 2,
//     title: "ToDo list",
//     description:
//       "Выполненное тестовое задание на позицию Junior Frontend Developer. Самостоятельно реализованы UI компоненты с использованием Styled components.",
//     skills: [
//       { id: 7, title: "Next" },
//       { id: 5, title: "Redux Toolkit" },
//       { id: 4, title: "TypeScript" },
//       { id: 13, title: "React Hook Form" },
//       { id: 12, title: "Styled components" },
//     ],
//     image: "/projects-img/todo-list/main.png",
//     links: {
//       github: "https://github.com/3str-webdev/todo_list_test",
//       deploy: "https://3str-todo.vercel.app/",
//     },
//     labels: ["Тестовое задание"],
//   },
//   {
//     id: 3,
//     title: "Castaway",
//     description:
//       "Адаптивная вёрстка сайта подкаста с использованием Astro, Tailwind и Typescript.",
//     skills: [
//       { id: 1, title: "Адаптивная вёрстка" },
//       { id: 2, title: "Кросс-браузерная вёрстка" },
//       { id: 4, title: "TypeScript" },
//       { id: 14, title: "Astro" },
//       { id: 15, title: "Tailwind" },
//       { id: 16, title: "UI/UX" },
//     ],
//     image: "/projects-img/castaway/main.png",
//     links: {
//       github: "https://github.com/3str-webdev/castaway_site",
//       deploy: "https://castaway-project.netlify.app/",
//     },
//     labels: ["Self-education"],
//   },
// ];
