import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const UIModalPortal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal-portal");
  }, []);

  if (!ref.current) {
    return null;
  }

  return createPortal(children, ref.current);
};
