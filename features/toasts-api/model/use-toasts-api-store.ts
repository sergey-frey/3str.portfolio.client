import { create } from "zustand";
import { ToastOptions, ToastType } from "../types/toast";

type UseToastsAPIStore = {
  toasts: ToastType[];
  addToast: (toastOptions: ToastOptions) => void;
  deleteToastById: (id: number) => void;
};

export const useToastsAPIStore = create<UseToastsAPIStore>((set, get) => ({
  toasts: [],
  addToast: (toastOptions) => {
    set({
      toasts: [...get().toasts, { id: Date.now(), ...toastOptions }],
    });
  },
  deleteToastById: (id) => {
    set({ toasts: get().toasts.filter((t) => t.id !== id) });
  },
}));
