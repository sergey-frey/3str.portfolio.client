import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface UISkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export const UISkeleton = ({ className, ...props }: UISkeletonProps) => {
  return (
    <div
      {...props}
      className={clsx(className, "bg-neutral-500 rounded animate-pulse")}
    />
  );
};
