import { UISkeleton } from "@/shared/ui";
import { BadgeListSkeleton } from "@/shared/ui/skeletons";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ProjectSkeletonProps extends HTMLAttributes<HTMLElement> {}

export const ProjectSkeleton = ({
  className,
  ...props
}: ProjectSkeletonProps) => {
  return (
    <article
      {...props}
      className={clsx(className, "flex flex-col gap-[15px]", "md:flex-row")}
    >
      <UISkeleton className="w-full rounded-xl h-[200px] md:h-[180px] md:max-w-xs lg:h-[200px] lg:max-w-md" />
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-3 flex-wrap">
          <UISkeleton className="w-full max-w-sm h-4 sm:h-6" />
        </div>
        <UISkeleton className="w-full max-w-[140px] h-5 sm:h-6 mt-2" />
        <ul className="flex gap-[10px] overflow-x-auto mt-3 pb-2 scroll-stable">
          <BadgeListSkeleton count={5} minWidth={80} maxWidth={120} />
        </ul>
        <div className="mt-5 flex flex-col gap-2">
          <UISkeleton className="w-full h-4" />
          <UISkeleton className="w-full h-4" />
        </div>
      </div>
    </article>
  );
};
