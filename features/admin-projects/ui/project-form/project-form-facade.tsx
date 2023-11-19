import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type ProjectFormFacadeProps = {
  formTitle: ReactNode;
  formElement: ReactNode;
  formActions: ReactNode;
  formCloseButton: ReactNode;
  isProjectSelected: boolean;
  isOpen: boolean;
} & HTMLAttributes<HTMLElement>;

export const ProjectFormFacade = ({
  formTitle,
  formElement,
  formActions,
  formCloseButton,
  isProjectSelected,
  isOpen,
  className,
  ...props
}: ProjectFormFacadeProps) => {
  return (
    <section
      {...props}
      className={clsx(
        className,
        "flex flex-col py-7 overflow-hidden z-30",
        "fixed right-0 top-0 max-w-[700px] w-full h-screen transition-transform duration-500",
        "bg-neutral-600 border-l-2 border-l-primary-600",
        isOpen ? "transform-none" : "translate-x-full",
      )}
    >
      <div className="px-8 flex justify-end">{formCloseButton}</div>
      {isProjectSelected && (
        <>
          <h2 className="px-8 text-h2">{formTitle}</h2>
          <div className="flex-1 flex flex-col gap-5 overflow-y-auto">
            {formElement}
            <div className="flex gap-3 px-8">{formActions}</div>
          </div>
        </>
      )}
    </section>
  );
};
