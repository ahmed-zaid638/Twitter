import { useRouter } from "next/router";
import React, { useCallback } from "react";
interface headerProps {
  label: boolean;
  showBackArrow: boolean;
}

function Header({}: headerProps) {
  const router = useRouter();
  const handleBack = useCallback(() => {
    return router.back();
  }, [router]);

  return (
    <div className="text-white border-b-[1px]  p-5">
      <div className="">Home</div>
    </div>
  );
}

export default Header;
