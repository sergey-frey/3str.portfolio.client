import { classes } from "@/shared/lib";
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
  const linkClassName = classes(
    className,
    "rounded-lg px-4 py-3 transition-colors",
    isActive && "bg-primary-600",
    !isActive && "hover:bg-primary-600/40"
  );
  return (
    <Link className={linkClassName} {...props}>
      {children}
    </Link>
  );
};
