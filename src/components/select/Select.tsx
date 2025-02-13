import React from "react";
interface Option {
    label: string;
    value: string;
}
interface SelectProps {
    label?: string;
    options?: Option[];
    second_class?: string;
    star?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    optionLabel?: keyof Option;
    optionValue?: keyof Option;
    name?: string;
    className? : string;
}
const Select = ({
  label,
  options,
  second_class = "",
  className,
  star,
  placeholder,
  onChange,
  value,
  optionLabel = "label",
  optionValue = "value",
  name,
}:SelectProps) => {
  return (
    <div className={`w-full ${second_class}`}>
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}{" "}
          {star && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="relative pt-2">
        <select
          name={name}
          required={!!star}
          value={value}
          onChange={onChange}
          className={`w-full p-2 border border-gray-400 rounded-md outline-none text-gray-700 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 ${className}`}
        >
          {placeholder && (
            <option value="">
              {placeholder}
            </option>
          )}
          {Array.isArray(options) &&
            options?.map((option, index) => (
              <option key={index} value={option[optionValue]}>
                {option[optionLabel]}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Select;