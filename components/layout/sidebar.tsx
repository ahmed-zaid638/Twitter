import React from "react";
import SidebarLogo from "../SidebarLogo";
import SideBarItem from "./SideBarItem";
import { BsHouseFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";

export default function Sidebar() {
  const items = [
    {
      label: "Home",
      icon: BsHouseFill,
      href: "href",
    },
    {
      label: "Home",
      icon: BsHouseFill,
      href: "href",
    },
    {
      label: "Home",
      icon: BsHouseFill,
      href: "href",
    },
  ];

  return (
    <div className="">
      <div className="">
        <div className="">
          <SidebarLogo />
          {items.map((item, index) => {
            return (
              <SideBarItem
                key={item.href}
                label={item.label}
                Icon={item.icon}
                href={item.href}
                onCick={() => "d"}
              />
            );
          })}
          <SideBarItem
            key={"logout"}
            label="Logout"
            Icon={BiLogOut}
            onCick={() => "d"}
            href={""}
          />
        </div>
        <SidebarTweetButton />
      </div>
    </div>
  );
}
