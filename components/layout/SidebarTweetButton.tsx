import { useRouter } from "next/router";
import React from "react";
import { FaFeather } from "react-icons/fa";

function SidebarTweetButton() {
  const router = useRouter();
  return (
    <div>
      
      <div className="">
        <FaFeather />
      </div>
    </div>
  );
}

export default SidebarTweetButton;
