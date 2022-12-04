import React from "react";
import classNames from "classnames";

const IconButton = ({ children, type, variant, className, ...props }) => {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  const danger = variant === "danger";
  const link = variant === "link";
  const rounded = type !== "button";

  const buttonClasses = classNames(
    "p-4 dark:text-white text-base",
    "cursor-pointer",
    "font-bold",
    "text-xs",
    {
      "rounded-full": rounded,
    },
    {
      "rounded-lg": !rounded,
    },
    "shadow-none hover:shadow-lg active:shadow-lg",
    "transition",
    "ease-in-out",
    "duration-150",
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
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default IconButton;
