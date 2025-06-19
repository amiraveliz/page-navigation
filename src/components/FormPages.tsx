import { DEFAULT_FORM_PAGES } from "@/data";
import { Plus } from "lucide-react";
import React from "react";

function FormPages() {
  return (
    <div className="flex">
      {DEFAULT_FORM_PAGES.map(({ id, text, icon: Icon }) => (
        <div key={id} className="flex items-center">
          <button className="btn btn-secondary">
            <Icon size={20} /> {text}
          </button>
          <hr className="w-5 h-[1.5px] border border-dashed border-gray-100" />
        </div>
      ))}

      <button className="btn btn-primary">
        <Plus />
        Add page
      </button>
    </div>
  );
}

export default FormPages;
