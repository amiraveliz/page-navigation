"use client";

import { Plus } from "lucide-react";
import React from "react";
import FormPageItem from "./FormPageItem";
import { usePagesStore } from "@/store/usePagesStore";
import {
  useSensor,
  useSensors,
  DndContext,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";

const FormPages = () => {
  const { activePage, setActivePage, pages, setPages, addNewPage } =
    usePagesStore();
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = pages.findIndex((page) => page.id === active.id);
    const newIndex = pages.findIndex((page) => page.id === over?.id);
    const updatedPages = arrayMove(pages, oldIndex, newIndex);
    if (active.id !== over?.id) {
      setPages(updatedPages);
    }
  };

  return (
    <DndContext id="dnd-app" sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="flex flex-wrap items-center">
        <SortableContext items={pages}>
          {pages.map(({ id, text, icon }, index) => (
            <FormPageItem
              key={id}
              isLast={index === pages.length - 1}
              id={id}
              text={text}
              icon={icon}
              isActive={activePage === index}
              onClick={() => setActivePage(index)}
              handleAddNewPage={() => addNewPage(index)}
            />
          ))}

          <button
            className="btn btn-primary"
            onClick={() => addNewPage(pages.length)}
          >
            <Plus />
            Add page
          </button>
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default FormPages;
