import { create } from "zustand";

import { devtools } from "zustand/middleware";

export type PageCategory =
  | "home"
  | "movies"
  | "series"
  | "bookmarks"
  | typeof undefined;

type ShowBookmarkState = {
  [key: string]: boolean;
};

interface PageState {
  pageCategory: PageCategory;
  searchBarPlaceHolder: string;
  setSearchBarPlaceHolder: (category: PageCategory) => void;
  setPageCategory: (category: PageCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showBookmarksState: ShowBookmarkState;
  updateShowBookmarksState: (extraShowBookmarks: ShowBookmarkState) => void;
  updateOneShowBookmarkState: (showId: string, newState: boolean) => void;
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
      searchQuery: "",
      setSearchQuery: (query: string) => {
        set({ searchQuery: query });
      },
      showBookmarksState: {},
      updateOneShowBookmarkState: (showId: string, newState: boolean) => {
        set((state) => {
          const updatedShowBookmarksState = {
            ...state.showBookmarksState,
            [showId]: newState,
          };
          return { showBookmarksState: updatedShowBookmarksState };
        });
      },
      updateShowBookmarksState: (extraState: ShowBookmarkState) => {
        set((state) => {
          const updatedShowBookmarksState = {
            ...state.showBookmarksState,
            ...extraState,
          };
          return { showBookmarksState: updatedShowBookmarksState };
        });
      },
    }),
    {
      name: "page-data",
    }
  )
);
