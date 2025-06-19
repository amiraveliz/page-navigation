import React, { useRef, useState } from "react";
import { EllipsisVertical, LucideIcon, Plus } from "lucide-react";
import ContextMenu from "./ContextMenu";
import useOutsideClick from "@/hooks/useClickOutside";
import { cn } from "clsx-for-tailwind";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  text: string;
  icon: LucideIcon;
  isActive: boolean;
  isLast: boolean;
  onClick: () => void;
  handleAddNewPage: () => void;
};

const FormPageItem: React.FC<Props> = ({
  id,
  text,
  icon: Icon,
  isActive,
  isLast,
  onClick,
  handleAddNewPage,
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);
  const [isAddNewHover, setIsAddNewHover] = useState<boolean>(false);
  const { listeners, attributes, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString({
      x: transform?.x || 0,
      y: transform?.y || 0,
      scaleX: 1,
      scaleY: 1,
    }),
    transition,
  };

  const handleCloseMenu = () => setIsContextMenuOpen(false);
  useOutsideClick<SVGSVGElement>(ref, handleCloseMenu);

  return (
    <div
      className="flex items-center relative my-2"
      ref={setNodeRef}
      style={{ ...style }}
      {...listeners}
      {...attributes}
    >
      <button
        className={cn("btn btn-secondary", {
          "btn-secondary-active": isActive,
        })}
        onClick={onClick}
      >
        <Icon size={20} /> {text}
        {isActive && (
          <EllipsisVertical
            ref={ref}
            size={20}
            className="stroke-gray-600"
            onClick={() => setIsContextMenuOpen(!isContextMenuOpen)}
          />
        )}
      </button>

      {isContextMenuOpen && <ContextMenu />}

      <div
        className="h-8 flex items-center relative"
        onMouseEnter={() => setIsAddNewHover(true)}
        onMouseLeave={() => setIsAddNewHover(false)}
      >
        <div
          className={cn(
            "absolute w-full h-full left-1/2 top-1/2 -translate-1/2 flex justify-center items-center transition-all duration-200 ease-[ease-in-out]",
            isAddNewHover && !isLast ? "opacity-100" : "opacity-0"
          )}
        >
          <button
            onClick={handleAddNewPage}
            className="w-4 h-4 border border-gray-200 rounded-full flex items-center justify-center bg-white cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>
        <hr
          className={cn(
            "w-5 h-[1.5px] border border-dashed border-gray-200 transition-all duration-200 ease-[ease-in-out]",
            {
              "w-14": isAddNewHover && !isLast,
            }
          )}
        />
      </div>
    </div>
  );
};

export default FormPageItem;
