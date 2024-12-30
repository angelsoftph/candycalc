import React from "react";

interface ButtonProps {
  label: string;
  bgColor: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, bgColor, onClick }) => {
  return (
    <button
      className={`${bgColor} p-2 rounded-sm active:bg-green-200`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
