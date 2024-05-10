export const OutlinedInput = (props: {
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}) => {
  const { label, inputProps, startAdornment, endAdornment } = props;

  return (
    <div className="mb-6">
      <label className="block font-medium text-slate-500 mb-1">{label}</label>
      <div className="form-input">
        {startAdornment ? (
          <span className="flex align-middle text-slate-500 text-2xl">
            {startAdornment}
          </span>
        ) : null}
        <input className="outline-none w-full" {...inputProps} />
        {endAdornment ? (
          <span className="flex align-middle text-slate-500 text-2xl">
            {endAdornment}
          </span>
        ) : null}
      </div>
    </div>
  );
};
