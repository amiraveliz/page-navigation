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

    if (!over || active.id === over.id) return;

    const oldIndex = pages.findIndex((p) => p.id === active.id);
    const newIndex = pages.findIndex((p) => p.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1) {
      const updatedPages = arrayMove(pages, oldIndex, newIndex);
      setPages(updatedPages);
    }
  };

  return (
    <DndContext id="dnd-id" sensors={sensors} onDragEnd={handleDragEnd}>
      <div
        className="flex flex-wrap gap-y-2"
        role="list"
        aria-label="List of form pages"
      >
        <SortableContext items={pages.map((p) => p.id)}>
          {pages.map((page, index) => (
            <FormPageItem
              key={page.id}
              page={page}
              isLast={index === pages.length - 1}
              isActive={activePage === index}
              onSelectPage={() => setActivePage(index)}
              onAddNewPage={() => addNewPage(index)}
            />
          ))}

          <button
            className="btn btn-primary"
            onClick={() => addNewPage(pages.length)}
            aria-label="Add a new form page"
            title="Add a new page"
            type="button"
          >
            <Plus aria-hidden="true" />
            Add page
          </button>
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default FormPages;
