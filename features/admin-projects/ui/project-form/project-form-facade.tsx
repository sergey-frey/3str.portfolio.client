import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, HTMLAttributes, MutableRefObject, ReactNode } from "react";

type ProjectFormFacadeProps = {
  formTitle: ReactNode;
  formElement: ReactNode;
  formActions: ReactNode;
  formCloseButton: ReactNode;
  isProjectSelected: boolean;
  isOpen: boolean;
  onClose: () => void;
  initialFocus?: MutableRefObject<HTMLElement | null>;
} & HTMLAttributes<HTMLElement>;

export const ProjectFormFacade = ({
  formTitle,
  formElement,
  formActions,
  formCloseButton,
  isProjectSelected,
  isOpen,
  onClose,
  className,
  initialFocus,
  ...props
}: ProjectFormFacadeProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog initialFocus={initialFocus} onClose={onClose}>
        <Dialog.Backdrop className="hidden" />
        <Transition.Child
          as={Fragment}
          enter="duration-[400ms] ease-out"
          enterFrom="translate-x-full"
          enterTo="transform-none"
          leave="duration-[400ms] ease-out"
          leaveFrom="transform-none"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel
            as={"section"}
            {...props}
            className={clsx(
              className,
              "flex flex-col py-7 overflow-hidden z-30",
              "fixed right-0 top-0 max-w-[700px] w-full h-screen transition-transform duration-500",
              "bg-neutral-600 border-l-2 border-l-primary-600",
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
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
