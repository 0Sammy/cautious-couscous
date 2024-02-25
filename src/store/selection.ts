import { create } from 'zustand';

type selectionStore = {
    coin: string
    updateCoin: (newCoin : string) => void;
}

export const useSelectionStore = create<selectionStore>((set) => ({

    coin: "",
    updateCoin: (newCoin: string ) => set({ coin : newCoin })

}))