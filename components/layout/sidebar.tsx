import React from "react";
import SidebarLogo from "../SidebarLogo";
import SideBarItem from "./SideBarItem";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarTweetButton from "./SidebarTweetButton";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export default function Sidebar() {
  const { data: currentUser , isLoading } = useCurrentUser();
   if(currentUser) {
    // console.log(currentUser.currentUser.id)
   }

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
      auth: true,
    },
    {
      label: "Profile",
      icon: FaUser,
      href: `/users/${currentUser?.currentUser.id}`,
      auth: true,
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
                icon={item.icon}
                href={item.href}
                auth={item.auth}
              />
            );
          })}
          {currentUser && (
            <SideBarItem
              key={"logout"}
              label="Logout"
              icon={BiLogOut}
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
