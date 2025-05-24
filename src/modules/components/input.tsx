import circle_alert from "../../shared/assets/circle-alert.svg";

type InputProps = React.ComponentProps<"input"> & {
  legend: string;
  helperText?: string;
  className?: string;
  isError?: boolean;
};

export function Input({
  legend,
  helperText,
  className,
  isError,
  ...rest
}: InputProps) {
  return (
    <fieldset className="focus-within:text-blue-600 flex flex-col text-gray-600">
      {legend && (
        <legend className={` uppercase placeholder:text-gray-900 text-2xs focus:text-inherit mb-2 font-medium ${isError ? "text-red-600" : ""}`}>
          {legend}
        </legend>
      )}

      <input
        type="text"
        {...rest}
        className={`w-full pb-2 border-0 border-b-1 border-gray-300 font-normal text-gray-900  focus:border-blue-400 focus:outline-none focus:placeholder:text-transparent`}
      />

      {helperText && (
        <p
          className={`text-xs mt-2 flex ${
            isError ? "text-red-600" : "italic text-gray-400"
          }`}
        >
          {isError && <img className="mr-2" src={circle_alert} />}
          {helperText}
        </p>
      )}
    </fieldset>
  );
}
