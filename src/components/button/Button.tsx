import React from "react";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
    text: string;
    padding?: string;
    borderRadius?: string;
    icon_left?: React.ReactNode;
    icon_right?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "outline";
}

const Button = ({
  type = "button",
  text,
  padding = "px-4 py-2",
  borderRadius = "rounded-md",
  icon_left,
  icon_right,
  className = "",
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
    outline: "border border-gray-500 text-black hover:bg-gray-100",
  };

  return (
    <button
      className={`flex items-center justify-center ${padding} ${borderRadius} ${variants[variant]} ${className}`}
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