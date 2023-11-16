import clsx from "clsx";
import { useId, type TextareaHTMLAttributes } from "react";

type UITextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value?: string;
  onChange: (value: string) => void;
};

export const UITextarea = ({
  id,
  className,
  value = "",
  onChange,
  ...props
}: UITextareaProps) => {
  const customId = useId();

  return (
    <div className="flex flex-col gap-1">
      <textarea
        {...props}
        className={clsx(
          className,
          "px-4 py-2 rounded-lg bg-neutral-1 text-neutral-100 resize-none",
          "focused",
        )}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
