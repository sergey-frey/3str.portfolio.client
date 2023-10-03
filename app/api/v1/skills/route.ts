import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      { id: 1, title: "Адаптивная вёрстка" },
      { id: 2, title: "Кросс-браузерная вёрстка" },
      { id: 3, title: "React" },
      { id: 4, title: "TypeScript" },
      { id: 5, title: "Redux Toolkit" },
      { id: 6, title: "Zustand" },
      { id: 7, title: "Next" },
      { id: 8, title: "Gulp" },
      { id: 9, title: "Sass" },
      { id: 10, title: "Webpack" },
      { id: 11, title: "Vite" },
      { id: 12, title: "Styled Components" },
      { id: 13, title: "React Hook Form" },
      { id: 14, title: "Astro" },
      { id: 15, title: "Tailwind" },
      { id: 16, title: "UI/UX" },
      { id: 17, title: "Анимация" },
      { id: 18, title: "React-transition-group" },
    ],
  });
}
