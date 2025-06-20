"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <button className="cursor-pointer" onClick={() => router.push("/")}>
      <Image
        src={assets.filloutLogo}
        width={100}
        height={50}
        alt="Fillout logo"
      />
    </button>
  );
}

export default Logo;
