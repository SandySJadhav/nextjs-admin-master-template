import React from "react";

const SidePanelItem = ({ icon, label }) => {
  return (
    <div className="grid justify-items-center mt-4 cursor-pointer hover:text-base dark:hover:text-white">
      <div className="flex">
        <span className="p-2">{icon}</span>
        <span className="p-2">{label}</span>
      </div>
    </div>
  );
};

export default SidePanelItem;
