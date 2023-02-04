import { create } from "zustand";

import { devtools } from "zustand/middleware";

type PageCategory = "home" | "movies" | "series" | "bookmarks";

interface PageState {
  pageCategory: PageCategory;
  setPageCategory: (category: PageCategory) => void;
}

export const usePageStore = create<PageState>()(
  devtools(
    (set) => ({
      pageCategory: "home",

      setPageCategory: (category: PageCategory) => {
        set({ pageCategory: category });
      },
    }),
    {
      name: "page-data",
    }
  )
);
