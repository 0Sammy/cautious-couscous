"use client"


import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

//Import Needed Images
import ethAddress from "../../../public/Images/ETH.jpg";


//Import Needed Icons
import { CloseSquare } from "iconsax-react";


type CardPaymentProps = {
    toggle: () => void;
    ethWallet: string;
}


const CardPayment = ({ toggle, ethWallet }: CardPaymentProps) => {

    const [isCopy, setIsCopy] = useState<boolean>(false)

    //Functions
    const copyToClipboard = () => {
        navigator.clipboard.writeText(ethWallet).then(() => {
            setIsCopy(true)
            toast.success(`Wallet address was copied to clipboard`)
        }).catch(err => {
            setIsCopy(false)
            toast.error("Sorry, something went wrong, try again.")
        });
    };


    return (
        <main className="fixed bg-black bg-opacity-80 flex items-center justify-center z-[100] inset-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] bg-white p-4 md:p-8 rounded-lg">
                <div className="flex items-center justify-between p-2 pb-4 border-b border-slate-500">
                    <p className="uppercase text-xs md:text-sm xl:text-base font-semibold"></p>
                    <CloseSquare size="30" variant="Bold" className="text-red-600 cursor-pointer" onClick={toggle} />
                </div>
                <div className="mt-10">

                </div>
            </div>
        </main>
    );
}

export default CardPayment;