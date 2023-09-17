import React from "react";
interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

function Button({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline,
}: ButtonProps) {
  return (
    <button
      className="
     disabled:opacity-70
    "
    ></button>
  );
}

export default Button;
