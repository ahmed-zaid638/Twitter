import React from "react";
import { IconType } from "react-icons";

interface itemsProps {
  label: string;
  href: string;
  Icon: IconType;
  onCick: () => void;
}
function SideBarItem({ label, Icon, href }: itemsProps) {
  return (
    <div className="flex flex-row items-center">
      <div className="text-white p-4">
        <Icon size={24} />
      </div>

      <div className="relative  ">
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}

export default SideBarItem;
