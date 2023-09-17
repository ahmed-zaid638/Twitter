import React from "react";
import SidebarLogo from "../SidebarLogo";
import SideBarItem from "./SideBarItem";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarTweetButton from "./SidebarTweetButton";
import FollowBar from "./FollowBar";

export default function Sidebar() {
  const items = [
    {
      label: "Home",
      icon: BsHouseFill,
      href: "/",
    },
    {
      label: "Notifications",
      icon: BsBellFill,
      href: "/notifications",
    },
    {
      label: "Profile",
      icon: FaUser,
      href: "/users",
    },
  ];

  return (
    <div className="">
      <div className="p-3">
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
