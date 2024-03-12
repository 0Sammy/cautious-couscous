import { create } from "zustand";


type balanceStore = {
    compiledBalance: number;
    btcBalance: number;
    ethBalance: number;
    binanceBalance: number;
    tronBalance: number;
    usdttBalance: number;
    usdteBalance: number;
    adaBalance: number;
    solBalance: number;
    liteBalance: number;
    dogeBalance: number;
    updateBalance: (newAmount: number) => void;
    updateBTC: (newAmount: number) => void;
    updateETH: (newAmount: number) => void;
    updateBNB: (newAmount: number) => void;
    updateTRX: (newAmount: number) => void;
    updateUSDTT: (newAmount: number) => void;
    updateUSDTE: (newAmount: number) => void;
    updateADA: (newAmount: number) => void;
    updateSOL: (newAmount: number) => void;
    updateLITE: (newAmount: number) => void;
    updateDOGE: (newAmount: number) => void;
}

export const useBalanceStore = create<balanceStore>((set) => ({
    compiledBalance: 0,
    btcBalance: 0,
    ethBalance: 0,
    binanceBalance: 0,
    tronBalance: 0,
    usdttBalance: 0,
    usdteBalance: 0,
    adaBalance: 0,
    solBalance: 0,
    liteBalance: 0,
    dogeBalance: 0,
    updateBalance: (newAmount: number) => set({compiledBalance : newAmount}),
    updateBTC: (newAmount: number) => set({btcBalance : newAmount}),
    updateETH: (newAmount: number) => set({ethBalance : newAmount}),
    updateBNB: (newAmount: number) => set({binanceBalance : newAmount}),
    updateTRX: (newAmount: number) => set({tronBalance : newAmount}),
    updateUSDTT: (newAmount: number) => set({usdttBalance : newAmount}),
    updateUSDTE: (newAmount: number) => set({usdteBalance : newAmount}),
    updateADA: (newAmount: number) => set({adaBalance : newAmount}),
    updateSOL: (newAmount: number) => set({solBalance : newAmount}),
    updateLITE: (newAmount: number) => set({liteBalance : newAmount}),
    updateDOGE: (newAmount: number) => set({dogeBalance : newAmount}),
}))