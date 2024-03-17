export const Spinner = (props: {
  width?: number;
  size?: number;
  color?: string;
}) => {
  const { width = 4, size = 4, color } = props;

  return (
    <div
      className={`inline-block animate-spin rounded-full align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
      style={{
        width: `${width / 4}rem`,
        height: `${width / 4}rem`,
        borderWidth: `${size}px`,
        borderTopColor: color ?? "currentcolor",
        borderRightColor: color ?? "currentcolor",
        borderBottomColor: color ?? "currentcolor",
        borderLeftColor: "transparent",
      }}
    />
  );
};
