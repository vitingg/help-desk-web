type SelectProps = {
  label?: string;
};

export function Select({ label }: SelectProps) {
  return (
    <fieldset className="flex flex-col text-gray-300 focus:text-blue-base ">
      <label htmlFor="LABEL" className=" text-2xs font-bold">
        LABEL
      </label>

      <select
        id="LABEL"
        className="border-b-1 focus:outline-0 text-gray-400 focus:text-blue-base"
        defaultValue={""}
        required
      >
        <option value={""} className="font-bold text-2xs" disabled hidden>
          OPÇÕES
        </option>
        <option value="OptionOne">Option one</option>
        <option value="OptionTwo">Option two</option>
        <option value="OptionThree">Option three</option>
      </select>
    </fieldset>
  );
}
