import { CONTEXT_MENU_ITEMS } from "@/data";
import { Trash2 } from "lucide-react";
import { cn } from "clsx-for-tailwind";

const ContextMenu = () => {
  return (
    <div className="absolute left-0 bottom-10 w-60 rounded-xl border-[0.5px] border-gray-300 border-solid menu-shadow slide-in bg-white">
      <span className="text-black-500 font-medium text-base p-3 block border-b-[0.5px] border-gray-300 border-solid">
        Settings
      </span>

      <div className="flex flex-col p-3 gap-3.5">
        {CONTEXT_MENU_ITEMS.map(({ id, text, icon: Icon, iconColor }) => (
          <button
            key={id}
            className="flex gap-1 items-center font-medium text-sm text-black-500"
          >
            <Icon size={16} className={cn(iconColor || "stroke-gray-600")} />
            {text}
          </button>
        ))}
      </div>

      <span className="flex items-center gap-1 text-red font-medium text-base m-3 pt-3 border-t-[0.5px] border-gray-300 border-solid">
        <Trash2 size={16} className="stroke-red" />
        Delete
      </span>
    </div>
  );
};

export default ContextMenu;
