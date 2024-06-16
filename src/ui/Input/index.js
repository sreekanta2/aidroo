/* eslint-disable react/display-name */
import React from "react";

const Input = React.forwardRef(
  (
    { className = "", placeholder = "", type = "text", onChange, ...restProps },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={`border rounded-lg  py-2 md:py-1: focus:outline-none focus:border-blue-500 bg-white px-4 ${className}`}
        {...restProps}
      />
    );
  }
);

export default Input;
