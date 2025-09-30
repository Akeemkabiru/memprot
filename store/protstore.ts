import { create } from "zustand";

interface IProtStore {
  pbID: string;
  setPbID: (value: string) => void;
}

export const useProtStore = create<IProtStore>((set) => ({
  pbID: "",
  setPbID: (pbID) => set(() => ({ pbID })),
}));
