import clsx from "clsx";
import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

type UIInputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftAddon?: ReactNode;
};

export const UIInput = forwardRef<HTMLInputElement, UIInputProps>(
  (
    { className, leftAddon, required, value = "", onChange, id, ...props },
    ref,
  ) => {
    const customId = useId();
    return (
      <div className="flex flex-col gap-1">
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
            className={clsx(
              "flex-1 px-4 py-2 rounded-lg bg-neutral-1 text-neutral-100",
              "focused",
              !!leftAddon && "rounded-s-none",
            )}
            required={required}
            value={value}
            onChange={onChange}
            ref={ref}
          />
        </div>
      </div>
    );
  },
);

UIInput.displayName = "UIInput";
