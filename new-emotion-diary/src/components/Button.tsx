import React from "react";
import "./Button.css";

const Button = ({
  text,
  type,
  onClick,
}: {
  text: string;
  type?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
