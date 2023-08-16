type ClassValue = string | boolean | undefined;

export const classes = (...classNames: ClassValue[]): string => {
  return classNames
    .filter((className) => {
      if (typeof className === "string" && className.length) {
        return true;
      }
      return false;
    })
    .join(" ");
};
