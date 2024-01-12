import { ReactNode } from "react";
import { Portal } from "..";

export const UIModalPortal = ({ children }: { children: ReactNode }) => {
  return <Portal selector="#modal-portal">{children}</Portal>;
};
