import { classes } from "@/shared/lib";
import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

type UIInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  leftAddon?: ReactNode;
};

export const UIInput = forwardRef<HTMLInputElement, UIInputProps>(
  (
    {
      className,
      label,
      leftAddon,
      required,
      value = "",
      onChange,
      id,
      ...props
    },
    ref
  ) => {
    const customId = useId();
    return (
      <div className="flex flex-col gap-1">
        <span className="flex gap-1">
          {label && (
            <label className="text-md" htmlFor={id ?? customId}>
              {label}
            </label>
          )}
          {required && <span className="text-primary-300">*</span>}
        </span>
        <div className="flex">
          {leftAddon && (
            <span className="flex h-full px-4 bg-neutral-500 rounded-s-lg">
              {leftAddon}
            </span>
          )}
          <input
            {...props}
            id={id ?? customId}
            type="text"
            className={classes(
              "flex-1 px-4 py-2 rounded-lg bg-neutral-1 text-neutral-100",
              "focused",
              !!leftAddon && "rounded-s-none"
            )}
            required={required}
            value={value}
            onChange={onChange}
            ref={ref}
          />
        </div>
      </div>
    );
  }
);

UIInput.displayName = "UIInput";
