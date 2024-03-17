import { create } from "zustand";

type forgotPasswordStore = {
    email: string
    updateEmail: (newEmail: string) => void;
}

export const useForgotPasswordStore = create<forgotPasswordStore>((set) => ({  

    email: "",
    updateEmail: (newEmail: string) => set({email: newEmail})

}))