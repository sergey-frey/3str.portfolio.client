import clsx from "clsx";
import { HTMLAttributes } from "react";

type ToastTimeProgressBarProps = HTMLAttributes<HTMLDivElement> & {
  progress: number;
  progressClassName?: string;
};

export const ToastTimeProgressBar = ({
  progress,
  className,
  progressClassName,
  ...props
}: ToastTimeProgressBarProps) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "h-1 rounded-md bg-neutral-600 overflow-hidden",
      )}
    >
      <div
        className={clsx(progressClassName, "h-full bg-primary-300")}
        style={{ width: `${progress * 100}%` }}
      ></div>
      <progress hidden max={1} />
    </div>
  );
};
