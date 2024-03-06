import { create } from 'zustand';

type pricesStore = {
    btcPrice: number
    btcChangePercent : number
    updateBtcPrice: (newPrice : number) => void;
    updateBtcPercent: (newPercent : number) => void;
    ethPrice: number
    ethChangePercent : number
    updateEthPrice: (newPrice : number) => void;
    updateEthPercent: (newPercent : number) => void;
    bnbPrice: number
    bnbChangePercent : number
    updateBnbPrice: (newPrice : number) => void;
    updateBnbPercent: (newPercent : number) => void;
    trxPrice: number
    trxChangePercent : number
    updateTrxPrice: (newPrice : number) => void;
    updateTrxPercent: (newPercent : number) => void;
    usdtPrice: number
    usdtChangePercent : number
    updateUsdtPrice: (newPrice : number) => void;
    updateUsdtPercent: (newPercent : number) => void;
    adaPrice: number
    adaChangePercent : number
    updateAdaPrice: (newPrice : number) => void;
    updateAdaPercent: (newPercent : number) => void;
    solPrice: number
    solChangePercent : number
    updateSolPrice: (newPrice : number) => void;
    updateSolPercent: (newPercent : number) => void;
    ltcPrice: number
    ltcChangePercent : number
    updateLtcPrice: (newPrice : number) => void;
    updateLtcPercent: (newPercent : number) => void;
    dogePrice: number
    dogeChangePercent : number
    updateDogePrice: (newPrice : number) => void;
    updateDogePercent: (newPercent : number) => void;
}

export const usePriceStore = create<pricesStore>((set) => ({

    btcPrice: 0,
    btcChangePercent: 0,
    updateBtcPrice: (newPrice: number ) => set({ btcPrice : newPrice }),
    updateBtcPercent: (newPercent: number ) => set({ btcChangePercent : newPercent }),
    ethPrice: 0,
    ethChangePercent: 0,
    updateEthPrice: (newPrice: number ) => set({ethPrice : newPrice }),
    updateEthPercent: (newPercent: number ) => set({ ethChangePercent : newPercent }),
    bnbPrice: 0,
    bnbChangePercent: 0,
    updateBnbPrice: (newPrice: number ) => set({ bnbPrice : newPrice }),
    updateBnbPercent: (newPercent: number ) => set({ bnbChangePercent : newPercent }),
    trxPrice: 0,
    trxChangePercent: 0,
    updateTrxPrice: (newPrice: number ) => set({ trxPrice : newPrice }),
    updateTrxPercent: (newPercent: number ) => set({ trxChangePercent : newPercent }),
    usdtPrice: 0,
    usdtChangePercent: 0,
    updateUsdtPrice: (newPrice: number ) => set({ usdtPrice : newPrice }),
    updateUsdtPercent: (newPercent: number ) => set({ usdtChangePercent : newPercent }),
    adaPrice: 0,
    adaChangePercent: 0,
    updateAdaPrice: (newPrice: number ) => set({ adaPrice : newPrice }),
    updateAdaPercent: (newPercent: number ) => set({ adaChangePercent : newPercent }),
    solPrice: 0,
    solChangePercent: 0,
    updateSolPrice: (newPrice: number ) => set({ solPrice : newPrice }),
    updateSolPercent: (newPercent: number ) => set({ solChangePercent : newPercent }),
    ltcPrice: 0,
    ltcChangePercent: 0,
    updateLtcPrice: (newPrice: number ) => set({ ltcPrice : newPrice }),
    updateLtcPercent: (newPercent: number ) => set({ ltcChangePercent : newPercent }),
    dogePrice: 0,
    dogeChangePercent: 0,
    updateDogePrice: (newPrice: number ) => set({ dogePrice : newPrice }),
    updateDogePercent: (newPercent: number ) => set({ dogeChangePercent : newPercent })

}))