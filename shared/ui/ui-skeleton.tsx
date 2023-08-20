import { classes } from "@/shared/lib";
import { HTMLAttributes } from "react";

interface UISkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export const UISkeleton = ({ className, ...props }: UISkeletonProps) => {
  return (
    <div
      {...props}
      className={classes(className, "bg-neutral-500 rounded animate-pulse")}
    />
  );
};
