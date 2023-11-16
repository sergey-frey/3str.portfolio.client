import { useEffect, useState } from "react";
import { ProjectFormModel } from "../types/form";

export const usePreview = (image: ProjectFormModel["image"]) => {
  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (image && image.size) {
      setPreview(URL.createObjectURL(image));
    } else {
      setPreview(undefined);
    }
  }, [image]);

  return preview;
};
