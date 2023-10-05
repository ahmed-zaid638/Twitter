import React from "react";
import SidebarLogo from "../SidebarLogo";
import SideBarItem from "./SideBarItem";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarTweetButton from "./SidebarTweetButton";
import FollowBar from "./FollowBar";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";


export default function Sidebar() {
  const currentUser = useCurrentUser();
 

  const items = [
    {
      label: "Home",
      icon: BsHouseFill,
      href: "/",
      auth: true,
    },
    {
      label: "Notifications",
      icon: BsBellFill,
      href: "/notifications",
      auth: true,
    },
    {
      label: "Profile",
      icon: FaUser,
      href: "/users",
      auth: false,
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
                onClick={() => "d"}
                auth={item.auth}
              />
            );
          })}
          {4 > 2 && (
            <SideBarItem
              key={"logout"}
              label="Logout"
              Icon={BiLogOut}
              onClick={() => signOut()}
              href={""}
            />
          )}
        </div>
        <SidebarTweetButton />
      </div>
    </div>
  );
}
