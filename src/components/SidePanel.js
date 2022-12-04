import React from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import IconButton from "./IconButton";
import SidePanelItem from "./SidePanelItem";
import { MENUS } from "@constants/SidePanel";

const SidePanel = ({ toggleSidePanel }) => {
  return (
    <nav className="flex flex-col w-72 absolute h-screen dark:bg-base p-2 bg-sidebar shadow-md">
      <div className="flex justify-end">
        <IconButton onClick={toggleSidePanel} className="bg-sidebar">
          <HiOutlineMenu />
        </IconButton>
      </div>
      <div className="grid justify-items-center">
        <Image
          className="rounded-full border-8 border-base dark:border-black"
          height={100}
          width={100}
          src="/1605610886733.jpg"
          alt="profile"
        />
        <div>Sandip Jadhav</div>
      </div>
      {MENUS.map((menu) => (
        <SidePanelItem key={menu.label} icon={menu.icon} label={menu.label} />
      ))}
    </nav>
  );
};

export default SidePanel;
