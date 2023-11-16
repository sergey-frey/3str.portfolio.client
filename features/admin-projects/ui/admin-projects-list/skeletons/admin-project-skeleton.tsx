import { UISkeleton } from "@/shared/ui";
import { BadgeListSkeleton } from "@/shared/ui/skeletons";
import clsx from "clsx";
import { HTMLAttributes } from "react";

type AdminProjectSkeletonProps = HTMLAttributes<HTMLElement>;

export const AdminProjectSkeleton = ({
  className,
  ...props
}: AdminProjectSkeletonProps) => {
  return (
    <article
      {...props}
      className={clsx(
        className,
        "flex flex-col gap-[15px] pl-5 border-l-4 border-l-primary-600",
        "md:flex-row",
      )}
    >
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-h2 font-h2 sm:text-h1 sm:font-h1">
            <UISkeleton style={{ height: 40, width: 200 }} />
          </h3>
          <div className="flex items-center gap-2">
            <UISkeleton style={{ height: 27, width: 124 }} />
            <UISkeleton style={{ height: 27, width: 78 }} />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <UISkeleton style={{ width: 150, height: 24 }} />
          <UISkeleton style={{ width: 80, height: 24 }} />
        </div>
        <ul className="flex gap-[10px] overflow-x-auto mt-3 pb-2">
          <BadgeListSkeleton count={4} minWidth={38} maxWidth={250} />
        </ul>
        <div className="mt-4">
          <UISkeleton style={{ width: "30%", height: 22 }} />
        </div>
        <div className="mt-2">
          <UISkeleton style={{ width: "40%", height: 22 }} />
        </div>
        <div className={clsx("flex flex-col gap-1 mt-4")}>
          <UISkeleton style={{ height: 20 }} />
          <UISkeleton style={{ height: 20, width: "90%" }} />
        </div>
      </div>
    </article>
  );
};
