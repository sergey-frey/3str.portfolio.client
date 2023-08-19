import { classes } from "@/shared/lib";
import { UISkeleton } from "@/shared/ui";
import { HTMLAttributes } from "react";

interface SkillsFilterSkeletonProps extends HTMLAttributes<HTMLUListElement> {}

const skeletonWidthList: number[] = [100, 130, 80, 90, 120];

export const SkillsFilterSkeleton = ({
  className,
  ...props
}: SkillsFilterSkeletonProps) => {
  return (
    <ul {...props} className={classes(className, "flex flex-wrap gap-2")}>
      {skeletonWidthList.map((width, index) => {
        return (
          <li key={`free_skill_skeleton_${index}`}>
            <UISkeleton style={{ width, height: 30 }} />
          </li>
        );
      })}
    </ul>
  );
};
