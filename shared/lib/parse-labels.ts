export const parseLabels = (labels: string): string[] => {
  if (!parseLabels) return [];

  return labels.split(" ").filter((s) => s.length > 0);
};
