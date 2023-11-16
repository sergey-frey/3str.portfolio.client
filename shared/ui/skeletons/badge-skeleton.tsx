import clsx from "clsx";
import { UISkeleton, UISkeletonProps } from "../ui-skeleton";
import { random } from "@/shared/lib/random";

export const BadgeSkeleton = ({
  style,
  className,
  ...props
}: UISkeletonProps) => {
  return (
    <UISkeleton
      {...props}
      style={{ width: 65, height: 30, ...style }}
      className={clsx(className, "rounded-xl")}
    />
  );
};

type BadgeListSkeleton = {
  count: number;
  minWidth: number;
  maxWidth: number;
};

export const BadgeListSkeleton = ({
  count,
  minWidth,
  maxWidth,
}: BadgeListSkeleton) => {
  const data: number[] = [];

  for (let i = 0; i < count; ++i) {
    data.push(random(minWidth, maxWidth));
  }

  return (
    <ul className={clsx("flex flex-wrap gap-2")}>
      {data.map((w, i) => {
        return <BadgeSkeleton key={i} style={{ width: w }} />;
      })}
    </ul>
  );
};
