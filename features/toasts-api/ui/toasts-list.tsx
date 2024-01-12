"use client";

import { TransitionGroup } from "react-transition-group";
import { useToastsAPIStore } from "../model/use-toasts-api-store";
import { Toast } from "./toast";

export const ToastsList = () => {
  const toasts = useToastsAPIStore((state) => state.toasts);

  return (
    <TransitionGroup
      enter
      component={"ul"}
      className="fixed top-0 right-0 flex flex-col gap-3 z-50 max-w-sm w-full p-4"
    >
      {toasts.map((toast) => {
        return <Toast key={toast.id} toast={toast} />;
      })}
    </TransitionGroup>
  );
};
