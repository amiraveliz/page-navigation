"use client";

import { usePagesStore } from "@/store/usePagesStore";
import { FormPage } from "@/types/page";
import React from "react";

type Props = {
  id: string;
};

const PageDetails: React.FC<Props> = ({ id }) => {
  const { pages } = usePagesStore();

  const page: FormPage | undefined = pages.find((page) => page.id === id);

  if (!page) return;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl my-2">Page: {page.text}</h1>
    </div>
  );
};

export default PageDetails;
