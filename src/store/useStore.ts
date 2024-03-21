import { create } from "zustand";

interface ColorNavState {
  isColorNav: boolean;
  setIsColorNav: (isColorNav: boolean) => void;
}

export const useColorNavStore = create<ColorNavState>((set) => ({
  isColorNav: false,
  setIsColorNav: (isColorNav) => set({ isColorNav }),
}));
