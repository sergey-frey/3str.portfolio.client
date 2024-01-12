import {
  CrossIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "@/shared/ui/icons";
import clsx from "clsx";
import { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { useToastsAPIStore } from "..";
import { ToastStatus, ToastType } from "../types/toast";

import "./animate.css";

import { UIButton } from "@/shared/ui";
import { useDeleteAfterDelay } from "../model/use-delete-after-delay";
import { ToastTimeProgressBar } from "./toast-time-progress-bar";

type ToastProps = {
  toast: ToastType;
} & unknown;

export const Toast = ({ toast, ...props }: ToastProps) => {
  const deleteToastById = useToastsAPIStore((state) => state.deleteToastById);

  const progress = useDeleteAfterDelay(toast.time, () =>
    deleteToastById(toast.id),
  );

  const iconVariants: Record<ToastStatus, ReactNode> = {
    error: <ErrorIcon className="w-7 h-7" />,
    warning: <WarningIcon className="w-7 h-7" />,
    success: <SuccessIcon className="w-7 h-7" />,
    info: <InfoIcon className="w-7 h-7" />,
  };

  const statusClassNameVariants: Record<ToastStatus, string> = {
    error: "border-b-rose-600 text-rose-600",
    warning: "border-b-yellow-500 text-yellow-500",
    success: "border-b-green-600 text-green-600",
    info: "border-b-primary-500 text-primary-500",
  };

  const progressClassNameVariants: Record<ToastStatus, string> = {
    error: "bg-rose-600",
    warning: "bg-yellow-500",
    success: "bg-green-600",
    info: "bg-primary-500",
  };

  const handleCloseButtonClick = () => {
    deleteToastById(toast.id);
  };

  return (
    <CSSTransition {...props} timeout={300} classNames={"toast"}>
      <li>
        <div
          className={clsx(
            "relative p-5 flex gap-5",
            "bg-neutral-800 border border-neutral-500 border-b-2 rounded-lg",
            statusClassNameVariants[toast.status],
          )}
        >
          <div className="flex flex-col justify-between">
            {iconVariants[toast.status]}
            {/* <ToastTimeProgressBar
              progress={progress}
              progressClassName={progressClassNameVariants[toast.status]}
            /> */}
          </div>
          <div>
            <h4 className="font-semibold text-neutral-200">{toast.title}</h4>
            <p className="text-neutral-400">{toast.text}</p>
          </div>

          <UIButton
            color="neutral"
            className="absolute top-2 right-2 text-neutral-200 px-[8px]"
            onClick={handleCloseButtonClick}
          >
            <CrossIcon className="w-2 h-2" />
          </UIButton>
        </div>
      </li>
    </CSSTransition>
  );
};
