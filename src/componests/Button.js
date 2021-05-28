import React from "react";
import "./button.css";

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={ onClick }
    className={`button-text ${className}`}
    disabled={ disabled }
  >
    { children }
  </button>
);

export default Button;
