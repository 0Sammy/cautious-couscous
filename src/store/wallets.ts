import { create } from 'zustand';

type walletStore = {
    btc: string,
    eth: string,
    usdte: string,
    usdtt: string,
    tron: string,
    bnb: string,
    ada: string
    doge: string,
    litecoin: string,
    solana: string,
    depositMessage: string,
    updateBTC: (newAddress : string) => void;
    updateETH: (newAddress : string) => void;
    updateUSDTE: (newAddress : string) => void;
    updateUSDTT: (newAddress : string) => void;
    updateTRON: (newAddress : string) => void;
    updateBNB: (newAddress : string) => void;
    updateADA: (newAddress : string) => void;
    updateDOGE: (newAddress : string) => void;
    updateLITECOIN: (newAddress : string) => void;
    updateSOLANA: (newAddress : string) => void;
    updateDepositMessage: (newMessage : string) => void;
}


export const useWalletStore = create<walletStore>((set) => ({

    btc: "",
    eth: "",
    usdte: "",
    usdtt: "",
    tron: "",
    bnb: "",
    ada: "",
    doge: "",
    litecoin: "",
    solana: "",
    depositMessage: "",
    updateBTC: (newAddress: string ) => set({ btc : newAddress }),
    updateETH: (newAddress: string ) => set({ eth : newAddress }),
    updateUSDTE: (newAddress: string ) => set({ usdte : newAddress }),
    updateUSDTT: (newAddress: string ) => set({ usdtt : newAddress }),
    updateTRON: (newAddress: string ) => set({ tron : newAddress }),
    updateBNB: (newAddress: string ) => set({ bnb : newAddress }),
    updateADA: (newAddress: string ) => set({ ada : newAddress }),
    updateDOGE: (newAddress: string ) => set({ doge : newAddress }),
    updateLITECOIN: (newAddress: string ) => set({ litecoin : newAddress }),
    updateSOLANA: (newAddress: string ) => set({ solana : newAddress }),
    updateDepositMessage: (newMessage: string) => set({depositMessage : newMessage})

}))