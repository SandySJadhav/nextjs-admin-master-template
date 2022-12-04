import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import IconButton from "./IconButton";

const SidePanel = ({ panel, toggleSidePanel }) => {
  return (
    <nav className="flex flex-col w-72 absolute h-screen dark:bg-base p-2 bg-sidebar shadow-md">
      <div className="flex justify-end">
        <IconButton onClick={toggleSidePanel} className="bg-sidebar">
          <HiOutlineMenu />
        </IconButton>
      </div>
    </nav>
  );
};

export default SidePanel;
