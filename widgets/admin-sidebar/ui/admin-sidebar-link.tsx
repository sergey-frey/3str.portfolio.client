import clsx from "clsx";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { HTMLAttributes } from "react";

type AdminSidebarLinkProps = HTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    isActive?: boolean;
  };

export const AdminSidebarLink = ({
  className,
  children,
  isActive = false,
  ...props
}: AdminSidebarLinkProps) => {
  const linkClassName = clsx(
    className,
    "rounded-lg px-4 py-2 transition-colors",
    isActive && "bg-primary-600",
    !isActive && "hover:bg-neutral-500",
  );
  return (
    <Link className={linkClassName} {...props}>
      {children}
    </Link>
  );
};
