import clsx from "clsx";
import type { HTMLAttributes } from "react";
import { CheckedIcon } from "./icons";

type UICheckboxProps = HTMLAttributes<HTMLSpanElement> & {
  isChecked?: boolean;
};

export const UICheckbox = ({
  isChecked = false,
  className,
  ...props
}: UICheckboxProps) => {
  return (
    <span
      className={clsx(
        className,
        "flex items-center justify-center w-5 h-5 bg-neutral-500 rounded-md text-primary-300 overflow-hidden",
      )}
      {...props}
    >
      <CheckedIcon
        className={clsx(
          "w-[14px] h-[14px] transition-transform",
          isChecked ? "transform-none" : "-translate-y-[110%]",
        )}
      />
    </span>
  );
};
