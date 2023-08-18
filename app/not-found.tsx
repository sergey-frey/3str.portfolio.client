import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Страница не найдена",
  description:
    "Страница по указанному пути не найдена. Возможно, вы допустили ошибку в адресе.",
};

export default function Error404Page() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-neutral-900 p-4 select-none">
      <div className="flex flex-col justify-center">
        <h2 className="text-[5rem] text-primary-500 text-center">404</h2>
        <p className="max-w-md text-center text-neutral-300">
          Такой страницы не существует!
        </p>
      </div>
    </div>
  );
}
