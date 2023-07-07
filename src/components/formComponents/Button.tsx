import React from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean | undefined;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
