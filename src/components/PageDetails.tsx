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

  return (
    <div>
      <h1>{page?.id}</h1>
      <h1>{page?.text}</h1>
    </div>
  );
};

export default PageDetails;
