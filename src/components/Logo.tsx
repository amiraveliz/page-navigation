"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { usePagesStore } from "@/store/usePagesStore";
import { BookOpenText, FolderSearch, FolderSearch2 } from "lucide-react";

function Logo() {
  const router = useRouter();
  const { setActivePage } = usePagesStore();

  const handleRedirectToHome = () => {
    router.push("/");
    setActivePage("-1");
  };

  return (
    <button className="cursor-pointer" onClick={handleRedirectToHome}>
      {/* <Image
        src={assets.filloutLogo}
        width={300}
        height={100}
        alt="Fillout logo"
      /> */}
      <FolderSearch2 size={300} />
    </button>
  );
}

export default Logo;
