import clsx from "clsx";
import { HTMLAttributes } from "react";
import { AdminProjectSkeleton } from "./admin-project-skeleton";

type AdminProjectsListSkeletonProps = HTMLAttributes<HTMLUListElement>;

export const AdminProjectsListSkeleton = ({
  className,
  ...props
}: AdminProjectsListSkeletonProps) => {
  return (
    <ul
      {...props}
      className={clsx(className, "flex-1 flex flex-col gap-4 overflow-y-auto")}
    >
      <AdminProjectSkeleton />
      <AdminProjectSkeleton />
      <AdminProjectSkeleton />
    </ul>
  );
};
