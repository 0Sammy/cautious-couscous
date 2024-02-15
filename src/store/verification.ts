import { create } from 'zustand';

type otpStore = {

    otpNumber: number;
    updateOtpNumber: (newOtp: number) => void;
}

export const useOtpStore = create<otpStore>((set) => ({

    otpNumber: 4442,
    updateOtpNumber: (newOtp: number) => set({ otpNumber : newOtp }),

 }))