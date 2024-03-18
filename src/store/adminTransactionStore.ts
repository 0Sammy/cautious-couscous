import { create } from "zustand";

type transactionStore = {
    amount: number;
    coin: string;
    network: string;
    transactionType: string;
    doneByAdmin: boolean;
    status: string;
    userId: string;
    userEmail: string;
    userName: string;
    updateAmount: (newAmount: number) => void;
    updateCoin: (newCoin: string) => void;
    updateNetwork: (newNetwork: string) => void;
    updateTransactionType: (newType: string) => void;
    updateStatus: (newStatus: string) => void;
    updateUserId: (newId: string) => void;
    updateUserEmail: (newEmail: string) => void;
    updateUserName: (newName: string) => void;
}


export const useTransactionStore = create<transactionStore>((set) => ({  

    amount: 0,
    coin: "",
    network: "",
    transactionType: "",
    doneByAdmin: true,
    status: "",
    userId: "",
    userEmail: "",
    userName: "",
    updateAmount: (newAmount: number) => set({ amount: newAmount }),
    updateCoin: (newCoin: string) => set({ coin: newCoin}),
    updateNetwork: (newNetwork: string) => set({ network: newNetwork }),
    updateTransactionType: (newType: string) => set({ transactionType: newType }),
    updateStatus: (newStatus: string) => set({ status: newStatus}),
    updateUserId: (newId: string) => set({ userId: newId }),
    updateUserEmail: (newEmail: string) => set({ userEmail: newEmail }),
    updateUserName: (newName: string) => set({ userName: newName }),

}))