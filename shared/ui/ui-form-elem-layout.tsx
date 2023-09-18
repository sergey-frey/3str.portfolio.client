import { classes } from "@/shared/lib";
import type { HTMLAttributes } from "react";

type UIFormElemLayoutProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  isRequired?: boolean;
  helperText?: string;
  errorText?: string;
};

export const UIFormElemLayout = ({
  label,
  isRequired,
  helperText,
  errorText,
  className,
  children,
  ...props
}: UIFormElemLayoutProps) => {
  const getSubTextElem = (): JSX.Element | null => {
    if (!(helperText || errorText)) {
      return null;
    }

    if (errorText) {
      return <p className="text-red-500 text-sm">{errorText}</p>;
    }

    if (helperText) {
      return <p className="text-neutral-500 text-sm">{helperText}</p>;
    }

    return null;
  };

  return (
    <div {...props} className={classes("flex flex-col gap-1", className)}>
      {label && (
        <span className="flex gap-1">
          <label className="text-md">{label}</label>
          {isRequired && <span className="text-primary-300">*</span>}
        </span>
      )}
      {children}
      {getSubTextElem()}
    </div>
  );
};
