"use client";

import { ROUTES } from "@/shared/constants/routes";
import { UILink } from "@/shared/ui";
import clsx from "clsx";

export const Footer = () => {
  return (
    <footer
      className={clsx(
        "flex justify-end gap-4 px-4 py-7",
        "border-t-2 border-primary-500",
        "lg:px-10",
      )}
    >
      <UILink href={ROUTES.PROJECTS}>Проекты</UILink>
      <UILink href={ROUTES.ADMIN_HOME}>Админ панель</UILink>
    </footer>
  );
};
