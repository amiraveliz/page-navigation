import { DEFAULT_FORM_PAGES, FormPage } from "@/data";
import { FileText } from "lucide-react";
import { create } from "zustand";

type PagesState = {
  pages: FormPage[];
  activePage: number;
  setPages: (pages: FormPage[]) => void;
  setActivePage: (activePage: number) => void;
  addNewPage: (index: number) => void;
};

export const usePagesStore = create<PagesState>((set, get) => ({
  pages: DEFAULT_FORM_PAGES,
  activePage: -1,
  setPages: (pages) => set({ pages }),
  setActivePage: (activePage) => set({ activePage }),
  addNewPage: (index: number) => {
    const { pages } = get();
    const newPage = {
      id: crypto.randomUUID(),
      text: `Page ${pages.length + 1}`,
      icon: FileText,
    };
    const updatedPages = [
      ...pages.slice(0, index + 1),
      newPage,
      ...pages.slice(index + 1),
    ];
    set({ pages: updatedPages, activePage: index + 1 });
  },
}));
