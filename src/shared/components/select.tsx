import { useState } from "react";

type SelectProps = {
  label?: string;
};

export function Select({ label }: SelectProps) {
  const [selected, setSelected] = useState("choose");

  return (
    <div className="flex flex-col w-96 p-4">
      <label htmlFor="mySelect" className="text-xs text-gray-300 font-bold">
        {label}
        LABEL
      </label>
      <select
        id="mySelect"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="text-gray-400 border-0 border-b-1 border-b-gray-400 py-2
        focus:outline-none"
      >
        <option
          value="choose"
          disabled
          className="text-2xs font-bold text-gray-400"
        >
          OPÇÕES
        </option>
        <option value="option1">Opção 1</option>
        <option value="option2">Opção 2</option>
        <option value="option3">Opção 3</option>
      </select>
      <label htmlFor="mySelect" className="text-xs text-gray-400 pt-2">
        Helper Text
      </label>
    </div>
  );
}
