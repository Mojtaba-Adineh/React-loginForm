import { useField } from "formik";
import React, { Component } from "react";

const CustomInput = ({ labelClass, id, ...props }) => {
  const [field, meta] = useField(props);
  
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="mb-1 d-flex flex-column">
      <label className={labelClass} htmlFor={id}>
        {capitalizeFirstLetter(id)}
      </label>
      <input className={meta.touched && meta.error ? "login-input error-input" : "login-input"} id={id} {...field} {...props} />
      {meta.touched && meta.error ? <p className="error-message">{meta.error}</p> : <p></p>}
    </div>
  );
};

export default CustomInput;
