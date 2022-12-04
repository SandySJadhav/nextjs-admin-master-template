import classNames from "classnames";
import React, { useState } from "react";
import {
  HiSun,
  HiMoon,
  HiUser,
  HiOutlineCog,
  HiOutlineMenu,
} from "react-icons/hi";
import IconButton from "./IconButton";

const Header = ({ panel, toggleSidePanel }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <header className="dark:bg-base p-2 bg-white shadow-md">
      <nav
        className={classNames(
          "flex flex-row",
          {
            "justify-between": !panel,
          },
          {
            "justify-end": panel,
          }
        )}
      >
        <div
          className={classNames(
            { hidden: panel },
            {
              flex: !panel,
            }
          )}
        >
          <IconButton onClick={toggleSidePanel}>
            <HiOutlineMenu />
          </IconButton>
        </div>
        <div className="flex">
          <IconButton onClick={toggleTheme}>
            {theme !== "dark" ? (
              <HiMoon className="h-4 w-4" />
            ) : (
              <HiSun className="h-4 w-4" />
            )}
          </IconButton>
          <IconButton>
            <HiOutlineCog />
          </IconButton>
          <IconButton>
            <HiUser />
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
