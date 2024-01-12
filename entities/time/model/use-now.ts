import { useLayoutEffect, useRef, useState } from "react";

export const useNow = (
  updateInterval: number,
  enabled: boolean = false,
  cb?: (now: number) => void,
) => {
  const cbRef = useRef(cb);

  const [now, setNow] = useState<number>(Date.now());

  useLayoutEffect(() => {
    if (!enabled) {
      return;
    }

    setNow(Date.now());
    if (cbRef.current) {
      cbRef.current(Date.now());
    }

    const interval = setInterval(() => {
      setNow(Date.now());
      if (cbRef.current) {
        cbRef.current(Date.now());
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, [enabled, updateInterval]);

  return now;
};
