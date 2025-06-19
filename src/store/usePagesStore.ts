import { DEFAULT_FORM_PAGES, FormPage } from "@/data";
import { create } from "zustand";

type PagesState = {
  pages: FormPage[];
  activePage: number;
  setPages: (pages: FormPage[]) => void;
  setActivePage: (activePage: number) => void;
};

export const usePagesStore = create<PagesState>((set) => ({
  pages: DEFAULT_FORM_PAGES,
  activePage: -1,
  setPages: (pages) => set({ pages }),
  setActivePage: (activePage) => set({ activePage }),
}));
