"use client";

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type PortalProps = { children: ReactNode; selector: string };

export const Portal = ({ children, selector }: PortalProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>(selector);
  }, [selector]);

  if (!ref.current) {
    return null;
  }

  return createPortal(children, ref.current);
};
