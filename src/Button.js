import React from "react";
import "./Button.css";

const THEME = [
  "primary",
  "secondary",
  "outline",
  "transparent",
  "semi-transparent-light",
  "semi-transparent-dark"
];

const SHAPE = ["", "pill"];
const SIZE = ["", "thin", "thick", "small", "large", "stretch"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonShape,
  disabled
}) => {
  const checkButtonTheme = THEME.includes(buttonStyle) ? buttonStyle : THEME[0];
  const checkButtonShape = SHAPE.includes(buttonShape) ? buttonShape : SHAPE[0];
  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  const checkButtonDisabled = disabled ? "disabled" : "";

  return (
    <button
      className={`button ${checkButtonTheme} ${checkButtonShape} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      disabled={`${checkButtonDisabled}`}
    >
      {children}
    </button>
  );
};

export default Button;
