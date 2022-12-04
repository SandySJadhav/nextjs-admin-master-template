import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import IconButton from "./IconButton";
import SidePanelItem from "./SidePanelItem";
import { MENUS } from "@constants/SidePanel";
import UserProfile from "./UserProfile";

const SidePanel = ({ toggleSidePanel }) => {
  return (
    <nav className="flex flex-col w-72 absolute h-screen dark:bg-base p-2 bg-sidebar shadow-md">
      <div className="flex justify-end">
        <IconButton onClick={toggleSidePanel} className="bg-sidebar">
          <HiOutlineMenu />
        </IconButton>
      </div>
      <UserProfile />
      <div className="block overflow-auto mt-4">
        {MENUS.map((menu) => (
          <SidePanelItem key={menu.label} menu={menu} />
        ))}
      </div>
    </nav>
  );
};

export default SidePanel;
