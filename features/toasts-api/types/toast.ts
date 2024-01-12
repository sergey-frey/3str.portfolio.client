export type ToastStatus = "error" | "warning" | "success" | "info";

export type ToastType = {
  id: number;
  status: ToastStatus;
  title: string;
  text: string;
  time?: number;
};

export type ToastOptions = Omit<ToastType, "id">;
