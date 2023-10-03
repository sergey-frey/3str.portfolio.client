import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { classes } from "../lib";

export const UIImage = ({
  alt,
  onLoadingComplete,
  width,
  height,
  className,
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleCompleteLoading = (e: HTMLImageElement) => {
    setIsLoading(false);
    if (onLoadingComplete) {
      onLoadingComplete(e);
    }
  };

  return (
    <Image
      {...props}
      className={className}
      width={width}
      height={height}
      alt={alt}
      onLoadingComplete={handleCompleteLoading}
    />
  );
};
