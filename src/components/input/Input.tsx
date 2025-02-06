import React from "react";
interface InputProps {
    type?: "email" | "text" | "password";
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    label?: string;
    second_class?: string;
    className? : string;
    star?: string;
    options_hint?: string;
    hint?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
    min?: number;
    max?: number;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
const Input = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  second_class = "",
  star,
  options_hint,
  hint,
  name,
  required,
  disabled,
  min,
  max,
  onFocus,
  onBlur,
  className,
}:InputProps) => {
  return (
    <div className={`mb-4 ${second_class}`}>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {options_hint && (
          <span className="text-xs text-gray-500 ml-1">{options_hint}</span>
        )}
        {star && <span className="text-red-500 ml-1">{star}</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        name={name}
        required={required || Boolean(star)}
        disabled={disabled}
        min={min}
        max={max}
        className={`outline-none block w-full px-3 py-1 border rounded-md  ${className}
          ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-white"}
        
        `}
      />
      {hint && (
        <p className="mt-1 text-xs text-gray-500">
          {hint}
        </p>
      )}
    </div>
  );
};



export default Input;