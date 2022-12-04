import classNames from "classnames";
import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} className={classNames(className)}>
      {children}
    </button>
  );
};

export default Button;
