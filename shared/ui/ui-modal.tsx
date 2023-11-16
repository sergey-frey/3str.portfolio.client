import clsx from "clsx";
import {
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef
} from "react";
import { createPortal } from "react-dom";

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
  const handleBackdropClick = (e: MouseEvent<HTMLElement>) => {
    const isModal = (e.target as HTMLElement).closest("[data-id=modal-window]");

    if (isModal) {
      return;
    }

    onClose();
  };

  if (!isOpen) {
    return <ModalPortal>{null}</ModalPortal>;
  }

  return (
    <ModalPortal>
      <section
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0",
          "flex items-center justify-center",
          "bg-neutral-900/40 backdrop-blur",
        )}
        onClick={handleBackdropClick}
      >
        <article
          {...props}
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

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal-portal");
  }, []);

  if (!ref.current) {
    return null;
  }

  return createPortal(children, ref.current);
};
