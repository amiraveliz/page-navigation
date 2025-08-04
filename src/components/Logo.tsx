"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePagesStore } from "@/store/usePagesStore";
import { FolderSearch2 } from "lucide-react";

function Logo() {
  const router = useRouter();
  const { setActivePage } = usePagesStore();

  const handleRedirectToHome = () => {
    router.push("/");
    setActivePage("-1");
  };

  return (
    <button className="cursor-pointer" onClick={handleRedirectToHome}>
      <FolderSearch2 size={300} />
    </button>
  );
}

export default Logo;
