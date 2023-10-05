import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import LoginModal from "../modals/LoginModal";

interface itemsProps {
  label: string;
  href: string;
  Icon: IconType;
  onClick: () => void;
  auth?: Boolean;
}
function SideBarItem({ label, Icon, href, auth, onClick }: itemsProps) {
  const router = useRouter();
  const LoginModal = useLoginModal();
  const currentUser = useCurrentUser();
  // handleClick
  const handleClick = useCallback(() => {
    console.log(currentUser)
    console.log("currentUser")
    if (onClick) {
      return onClick();
    }
    if (auth && !currentUser) {
      LoginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [LoginModal, router, currentUser, href, auth, onClick]);
  return (
    <div
      className="flex flex-row items-center cursor-pointer"
      onClick={handleClick}
    >
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
