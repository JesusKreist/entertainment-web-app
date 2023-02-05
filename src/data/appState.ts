import { create } from "zustand";

import { devtools } from "zustand/middleware";

export type PageCategory =
  | "home"
  | "movies"
  | "series"
  | "bookmarks"
  | undefined;

interface PageState {
  pageCategory: PageCategory;
  setPageCategory: (category: PageCategory) => void;
}

export const usePageStore = create<PageState>()(
  devtools(
    (set) => ({
      pageCategory: undefined,

      setPageCategory: (category: PageCategory) => {
        set({ pageCategory: category });
      },
    }),
    {
      name: "page-data",
    }
  )
);
