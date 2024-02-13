import { create } from 'zustand';

type UserStore = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    country: string,
    mobileNumber: string;
    customUserId: string;
    updateFirstName: (newFirstName: string) => void;
    updateLastName: (newLastName: string) => void;
    updateEmail: (newEmail: string) => void;
    updatePassword: (newPassword: string) => void;
    updateCountry: (newCountry: string) => void;
    updateMobileNumber: (newMobileNumber: string) => void;
    updateCustomUserId: (newUserId: string) => void;
    reset: () => void;
}

export const useCreateUserStore = create<UserStore>((set) => ({ 

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    mobileNumber: '',
    customUserId: "",
    updateFirstName: (newFirstName: string) => set({ firstName : newFirstName.toLocaleLowerCase() }),
    updateLastName: (newLastName: string) => set({ lastName : newLastName.toLocaleLowerCase() }),
    updateEmail: (newEmail: string) => set({ email : newEmail.toLocaleLowerCase() }),
    updatePassword: (newPassword: string) => set({password : newPassword}),
    updateCountry: (newCountry: string) => set({ country : newCountry}),
    updateMobileNumber: (newMobileNumber: string) => set({ mobileNumber : newMobileNumber }),
    updateCustomUserId: (newUserId : string) => set({customUserId : newUserId}),
    reset: () =>
    set({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: '',
        mobileNumber: '',
        customUserId: "",
    }),
}))