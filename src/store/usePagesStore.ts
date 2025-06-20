import { DEFAULT_FORM_PAGES } from "@/data";
import { FormPage } from "@/types/page";
import { RouterType } from "@/types/router";
import { FileText } from "lucide-react";
import { create } from "zustand";

type PagesState = {
  pages: FormPage[];
  activePage: string;
  setPages: (pages: FormPage[]) => void;
  setActivePage: (activePage: string) => void;
  addNewPage: (index: number, router: RouterType) => void;
};

export const usePagesStore = create<PagesState>((set, get) => ({
  pages: DEFAULT_FORM_PAGES,
  activePage: "-1",

  setPages: (pages) => set({ pages }),
  setActivePage: (activePage) => set({ activePage }),
  addNewPage: (index: number, router: RouterType) => {
    const { pages } = get();
    const newPage = {
      id: crypto.randomUUID(),
      text: `Other ${pages.length + 1}`,
      icon: FileText,
    };
    const updatedPages = [
      ...pages.slice(0, index + 1),
      newPage,
      ...pages.slice(index + 1),
    ];
    set({ pages: updatedPages, activePage: newPage.id });
    router.push(`/page/${newPage.id}`);
  },
}));
