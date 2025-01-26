import React from "react";
interface ButtonProps {
    button_text: string;
    width?: string;
    height?: string;
    padding?: string;
    borderRadius?: string;
    icon_left?: React.ReactNode;
    icon_right?: React.ReactNode;
    second_className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "outline";
}

const Button = ({
  button_text,
  width = "auto",
  height = "auto",
  padding = "px-4 py-2",
  borderRadius = "rounded-md",
  icon_left,
  icon_right,
  second_className = "",
  onClick,
  variant = "primary",
  ...props
}: ButtonProps) => {
  // Define variant styles
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  return (
    <button
      className={`flex items-center justify-center ${padding} ${borderRadius} ${variants[variant]} ${second_className}`}
      style={{ width, height }}
      onClick={onClick}
      {...props}
    >
      {icon_left && <span className="mr-2">{icon_left}</span>}
      <span>{button_text}</span>
      {icon_right && <span className="ml-2">{icon_right}</span>}
    </button>
  );
};



export default Button;