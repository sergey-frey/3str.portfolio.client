import clsx from "clsx";
import { HTMLAttributes, MouseEvent, useRef } from "react";
import { Transition } from "react-transition-group";
import { ModalPortal } from "./ui-modal-portal";

import "./animate.css";

export type UIModalProps = HTMLAttributes<HTMLElement> & {
  isOpen: boolean;
  onClose: () => void;
};

export const UIModal = ({
  isOpen,
  onClose,
  className,
  ...props
}: UIModalProps) => {
  const modalRef = useRef<HTMLElement>(null);

  const handleBackdropClick = (e: MouseEvent<HTMLElement>) => {
    const isModal = (e.target as HTMLElement).closest("[data-id=modal-window]");

    if (isModal) {
      return;
    }

    onClose();
  };

  return (
    <Transition
      in={isOpen}
      timeout={150}
      classNames="ui-modal"
      nodeRef={modalRef}
    >
      {(state) => {
        return (
          <ModalPortal>
            <section
              className={clsx(
                "fixed top-0 left-0 right-0 bottom-0 transition-all",
                "flex items-center justify-center",
                "bg-neutral-900/40 backdrop-blur",
                `ui-modal-${state}`,
              )}
              onClick={handleBackdropClick}
            >
              <article
                {...props}
                ref={modalRef}
                className={clsx(
                  className,
                  "flex flex-col",
                  "min-w-[360px] p-5",
                  "bg-neutral-600 border-b-2 border-primary-300 shadow-lg rounded-lg",
                )}
                data-id="modal-window"
              />
            </section>
          </ModalPortal>
        );
      }}
    </Transition>
  );
};

type UIModalHeaderProps = HTMLAttributes<HTMLElement>;

UIModal.Header = function Header({ className, ...props }: UIModalHeaderProps) {
  return (
    <header
      {...props}
      className={clsx("text-xl tracking-wider pb-2 font-semibold", className)}
    />
  );
};

type UIModalBodyProps = HTMLAttributes<HTMLElement>;

UIModal.Body = function Body({ className, ...props }: UIModalBodyProps) {
  return <main {...props} className={clsx("grow text-base pb-5", className)} />;
};

type UIModalFooterProps = HTMLAttributes<HTMLElement>;

UIModal.Footer = function Footer({ className, ...props }: UIModalFooterProps) {
  return (
    <footer
      {...props}
      className={clsx("flex items-center justify-end", className)}
    />
  );
};
