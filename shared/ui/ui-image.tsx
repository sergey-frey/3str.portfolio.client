import Image, { ImageProps } from "next/image";

export const UIImage = ({
  alt,
  onLoadingComplete,
  width,
  height,
  className,
  ...props
}: ImageProps) => {
  return (
    <Image
      {...props}
      className={className}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
