"use client";

import { DEFAULT_FORM_PAGES } from "@/data";
import { Plus } from "lucide-react";
import React from "react";
import FormPageItem from "./FormPageItem";
import { usePagesStore } from "@/store/usePagesStore";

const FormPages = () => {
  const { activePage, setActivePage } = usePagesStore();

  return (
    <div className="flex h-full items-end">
      {DEFAULT_FORM_PAGES.map(({ id, text, icon }, index) => (
        <FormPageItem
          key={id}
          text={text}
          icon={icon}
          isActive={activePage === index}
          onClick={() => setActivePage(index)}
        />
      ))}

      <button className="btn btn-primary">
        <Plus />
        Add page
      </button>
    </div>
  );
};

export default FormPages;
