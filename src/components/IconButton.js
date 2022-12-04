import React from "react";
import classNames from "classnames";

const IconButton = ({ children, className, ...props }) => {
  return (
    <button
      className={classNames(
        "p-4 dark:bg-black bg-white rounded-full dark:text-white text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
