import React, { useCallback, useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";
import ContextMenu from "./ContextMenu";
import useOutsideClick from "@/hooks/useClickOutside";
import { cn } from "clsx-for-tailwind";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AddPageDashed from "./AddPageDashed";
import { FormPage } from "@/types/page";

type Props = {
  page: FormPage;
  isActive: boolean;
  isLast: boolean;
  onSelectPage: () => void;
  onAddNewPage: () => void;
};

const FormPageItem: React.FC<Props> = ({
  page,
  isActive,
  isLast,
  onSelectPage,
  onAddNewPage,
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState<boolean>(false);

  const { listeners, attributes, setNodeRef, transform, transition } =
    useSortable({
      id: page.id,
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

  const handleCloseMenu = useCallback(() => {
    setIsContextMenuOpen(false);
  }, []);
  useOutsideClick<SVGSVGElement>(ref, handleCloseMenu);

  const { text, icon: Icon } = page;

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
        onClick={onSelectPage}
        aria-label="Select a form page"
      >
        <Icon size={20} aria-hidden="true" /> {text}
        <EllipsisVertical
          ref={ref}
          size={20}
          className={cn("stroke-gray-600", { hidden: !isActive })}
          onClick={() => setIsContextMenuOpen(!isContextMenuOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsContextMenuOpen((isContextMenuOpen) => !isContextMenuOpen);
            }
          }}
          aria-label="Toggle context menu"
          aria-expanded={isContextMenuOpen}
          role="button"
          tabIndex={0}
        />
      </button>

      {isContextMenuOpen && <ContextMenu />}

      <AddPageDashed onAddNewPage={onAddNewPage} isLast={isLast} />
    </div>
  );
};

export default FormPageItem;
