import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
interface headerProps {
  label: string;
  showBackArrow: boolean;
}

function Header({ showBackArrow, label }: headerProps) {
  const router = useRouter();
  const handleBack = useCallback(() => {
    return router.back();
  }, [router]);

  return (
    <div className="border-b   p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="
            cursor-pointer 
            hover:opacity-70 
            transition
        "
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
}

export default Header;
