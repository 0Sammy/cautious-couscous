import { create } from 'zustand';

type kycStore = {
    idType: string
    idNumber: string
    dateOfExpiry: string;
    idCardFrontImgSrc: string;
    idCardBackImgSrc: string;
    updateIdType: (newIdType: string) => void;
    updateIdNumber: (newIdNumber: string) => void;
    updateDateOfExpiry: (newDateOfExpiry: string) => void;
    updateIdCardFrontImgSrc: (newIdCardFrontImgSrc: string) => void;
    updateIdCardBackImgSrc: (newIdCardBackImgSrc: string) => void;
    reset: () => void;
}

export const useKycStore = create<kycStore>((set) => ({

    idType: '',
    idNumber: '',
    dateOfExpiry: '',
    idCardFrontImgSrc: '',
    idCardBackImgSrc: '',
    updateIdType: (newIdType: string) => set({idType : newIdType}),
    updateIdNumber: (newIdNumber: string) => set({idNumber : newIdNumber}),
    updateDateOfExpiry: (newDateOfExpiry: string) => set({dateOfExpiry : newDateOfExpiry}),
    updateIdCardFrontImgSrc: (newIdCardFrontImgSrc: string) => set({idCardFrontImgSrc : newIdCardFrontImgSrc}),
    updateIdCardBackImgSrc: (newIdCardBackImgSrc: string) => set({idCardBackImgSrc : newIdCardBackImgSrc}),
    reset: () =>
    set({
        idType: '',
        idNumber: '',
        dateOfExpiry: '',
        idCardFrontImgSrc: '',
        idCardBackImgSrc: '',
    })
}))