import { useId, type CSSProperties, type TextareaHTMLAttributes } from "react";
import { classes } from "../lib";

type UITextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  value?: string;
  onChange: (value: string) => void;
};

export const UITextarea = ({
  label,
  required,
  id,
  className,
  value = "",
  onChange,
  ...props
}: UITextareaProps) => {
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
      <textarea
        {...props}
        className={classes(
          className,
          "px-4 py-2 rounded-lg bg-neutral-1 text-neutral-100 resize-none",
          "focused"
        )}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
