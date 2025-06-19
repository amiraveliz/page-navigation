import { create } from "zustand";

type PagesState = {
  activePage: number;
  setActivePage: (activePage: number) => void;
};

export const usePagesStore = create<PagesState>((set) => ({
  activePage: -1,
  setActivePage: (activePage) => set({ activePage }),
}));
