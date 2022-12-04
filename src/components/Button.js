import classNames from "classnames";
import React from "react";

const Button = ({ children, className, variant, ...props }) => {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  const danger = variant === "danger";
  const link = variant === "link";

  const buttonClasses = classNames(
    "min-w-[128px]",
    "uppercase",
    "cursor-pointer",
    "font-bold",
    "text-xs",
    "rounded-lg",
    "shadow-none hover:shadow-lg active:shadow-lg",
    "transition",
    "ease-in-out",
    "duration-150",
    "px-4 py-4",
    {
      "bg-primary text-white border": primary,
    },
    {
      "bg-white text-primary border": secondary,
    },
    {
      "bg-danger text-white border": danger,
    },
    {
      "text-primary bg-white border-none hover:shadow-none hover:underline":
        link,
    },
    className
  );
  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
