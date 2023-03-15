import React from "react";
import "../form-input/form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={` ${
            otherProps.value.length ? "shrink" : null
          } form-input-label`}
        >
          {label}
        </label>
      )}

      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
