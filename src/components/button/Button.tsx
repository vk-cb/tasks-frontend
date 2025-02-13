import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  padding?: string;
  borderRadius?: string;
  icon_left?: React.ReactNode;
  icon_right?: React.ReactNode;
  btnClass?: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "outline"
    | "ghost"
    | "info"
    | "dark"
    | "light"
    | "link";
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  text,
  padding = "px-4 py-2",
  borderRadius = "rounded-md",
  icon_left,
  icon_right,
  btnClass = "",
  onClick,
  variant = "primary",
  ...props
}) => {
  // Define variant styles
  const variants: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-300",
    danger: "bg-red-400 text-white hover:bg-red-500 focus:ring-2 focus:ring-red-300",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-300",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300",
    outline: "border border-gray-500 text-black hover:bg-gray-100 focus:ring-2 focus:ring-gray-200",
    ghost: "text-gray-500 bg-transparent hover:bg-gray-100 focus:ring-2 focus:ring-gray-200",
    info: "bg-blue-200 text-blue-800 hover:bg-blue-300 focus:ring-2 focus:ring-blue-400",
    dark: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-600",
    light: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400",
    link: "text-blue-500 underline hover:text-blue-700 focus:ring-2 focus:ring-blue-400",
  };

  return (
    <button
      className={`flex cursor-pointer items-center justify-center font-medium transition-all duration-200 ${padding} ${borderRadius} ${variants[variant]} ${btnClass}`}
      onClick={onClick}
      {...props}
      type={type}
    >
      {icon_left && <span className="mr-2">{icon_left}</span>}
      <span>{text}</span>
      {icon_right && <span className="ml-2">{icon_right}</span>}
    </button>
  );
};

export default Button;
