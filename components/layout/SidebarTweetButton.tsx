'use client'

import useLoginModal from "../../hooks/useLoginModal";
import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

function SidebarTweetButton() {
  const  loginModal = useLoginModal()
  const router = useRouter();

  const handleClick = () => { 
     loginModal.onOpen()
  }
  return (
    <div onClick={handleClick}>
      {/* Mobile  */}
      <div
        className="
        text-white
          p-4 
          mt-6
          rounded-full 
          h-14
          w-14
        bg-sky-400
          lg:hidden
          flex
          justify-center
          items-center
          hover:bg-opacity-80 
          transition 
          cursor-pointer
        "
      >
        <FaFeather />
      </div>
      <div
        className="
       bg-sky-400 
         rounded-full
         hidden
         lg:block
       text-white
         text-center
         py-2
         mt-7
         w-[90%]
         hover:bg-opacity-90 
         cursor-pointer
         

      "
      >
        <p
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
}

export default SidebarTweetButton;
