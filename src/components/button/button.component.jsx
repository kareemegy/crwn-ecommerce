import React from "react";
import "../button/button.styles.scss";
const BUTTONS_TYPES_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTONS_TYPES_CLASS[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
