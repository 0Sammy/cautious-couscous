import { create } from 'zustand';

type onboardingStore = {

    name: string | any;
    email: string | any;
    updateName: (newName: string | any) => void;
    updateEmail: (newEmail: string | any) => void;
}

export const useOnboardingStore = create<onboardingStore>((set) => ({

    name: "",
    email: "",
    updateName: (newName: string | any) => set({ name : newName }),
    updateEmail: (newEmail: string | any) => set({email : newEmail })

 }))