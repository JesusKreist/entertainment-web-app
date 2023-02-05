import { create } from "zustand";

import { devtools } from "zustand/middleware";

export type PageCategory =
  | "home"
  | "movies"
  | "series"
  | "bookmarks"
  | typeof undefined;

interface PageState {
  pageCategory: PageCategory;
  searchBarPlaceHolder: string;
  setSearchBarPlaceHolder: (category: PageCategory) => void;
  setPageCategory: (category: PageCategory) => void;
}

export const usePageStore = create<PageState>()(
  devtools(
    (set) => ({
      pageCategory: undefined,
      searchBarPlaceHolder: "",
      setSearchBarPlaceHolder(category) {
        switch (category) {
          case "home":
            set({ searchBarPlaceHolder: "Search for movies or TV series" });
            break;
          case "movies":
            set({ searchBarPlaceHolder: "Search for movies" });
            break;
          case "series":
            set({ searchBarPlaceHolder: "Search for TV series" });
            break;
          case "bookmarks":
            set({ searchBarPlaceHolder: "Search for bookmarked shows" });
            break;
        }
      },

      setPageCategory: (category: PageCategory) => {
        set({ pageCategory: category });
      },
    }),
    {
      name: "page-data",
    }
  )
);
