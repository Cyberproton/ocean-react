const formatter = Intl.NumberFormat("en-US", {
  notation: "compact",
});

export const compactFormatNumber = (number: number) => {
  return formatter.format(number);
};
