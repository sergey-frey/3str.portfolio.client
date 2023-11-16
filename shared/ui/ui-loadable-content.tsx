import { ReactNode } from "react";

type UILoadableContentProps = {
  loader: ReactNode;
  children: ReactNode;
  isLoading: boolean;
  canShow: boolean;
};

export const UILoadableContent = ({
  loader,
  children,
  isLoading,
  canShow,
}: UILoadableContentProps) => {
  if (isLoading) {
    return loader;
  }

  if (canShow) {
    return children;
  }

  return null;
};
