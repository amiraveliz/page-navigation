import React, { useRef, useState } from "react";
import { EllipsisVertical, LucideIcon } from "lucide-react";
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
  onClick: () => void;
};

const FormPageItem: React.FC<Props> = ({
  id,
  text,
  icon: Icon,
  isActive,
  onClick,
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);
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
      className="flex items-center relative"
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

      <hr className="w-5 h-[1.5px] border border-dashed border-gray-200" />
    </div>
  );
};

export default FormPageItem;
