import { useNow } from "@/entities/time";
import { useRef, useState } from "react";

export const useDeleteAfterDelay = (
  delay: number | undefined,
  deleteCb: () => void,
) => {
  const startedAtRef = useRef<number>(Date.now());
  const [progress, setProgress] = useState<number>(0);

  useNow(10, Boolean(delay), (now) => {
    if (!delay) {
      return;
    }

    setProgress((now - startedAtRef.current) / delay);

    if (now - startedAtRef.current >= delay) {
      deleteCb();
    }
  });

  return progress;
};
