import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppMode = {
  appMode: "demo" | "normal" | "unset";
  setAppMode: (appMode: "demo" | "normal" | "unset") => void;
};

export const useAppModeStore = create<AppMode>()(
  persist(
    (set) => ({
      appMode: "unset",
      setAppMode: (appMode: "demo" | "normal" | "unset") => {
        set({ appMode });
      },
    }),
    {
      name: "app-mode-storage",
    }
  )
);
