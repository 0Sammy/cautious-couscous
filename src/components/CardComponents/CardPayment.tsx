"use client"


import { FormEvent, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

//Import Needed Utils and lib
import { makeApiRequest } from "@/lib/apiUtils";
import { generateFakeMastercardNumber, generateRandomThreeDigits } from "@/lib/generateCardNumber";

//Import Needed Comppnents
import Button from "../molecules/Button";

//Import Needed Images
import ethAddress from "../../../public/Images/ETH.jpg";

//Import Needed Icons
import { CloseSquare, Copy, CopySuccess } from "iconsax-react";



type CardPaymentProps = {
    toggle: () => void;
    ethWallet: string;
    userId: string;
    userEmail: string;
}


const CardPayment = ({ toggle, ethWallet, userEmail, userId }: CardPaymentProps) => {

    const [isCopy, setIsCopy] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

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

    //OnSubmit Function
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        toast.message("Card request in process")

        const cardNumber = generateFakeMastercardNumber()
        const cardCvv = generateRandomThreeDigits()

        const formData = {id: userId, email: userEmail, cardNumber, cardCvv}
        makeApiRequest("/cardRequest", "post", formData, {
            onSuccess: () => {
                // Handle success
                toast.success("Your Master Card request was sent")
            },
            onError: (error: any) => {
                // Handle error
                toast.error("we couldn't process your Master Card request, kindly try again later")
                console.log(error);
            },
        });

}

return (
    <main className="fixed bg-black bg-opacity-80 flex items-center justify-center z-[100] inset-0">
        <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] bg-white p-4 md:p-8 rounded-lg">
            <div className="flex justify-between gap-x-3 p-2 pb-4 border-b border-slate-500">
                <p className="capitalize">Please transfer <span className="font-semibold">$850</span> worth of Ethereum to the following wallet address to activate your card.</p>
                <CloseSquare size="26" variant="Bold" className="text-red-600 cursor-pointer shrink-0" onClick={toggle} />
            </div>
            <div className="mt-10">
                <Image className="size-40 mx-auto" src={ethAddress} alt="Ethereum Address" />
                <div className="mt-10 flex flex-col text-center">
                    <p>Wallet Address</p>
                    <div className="flex items-center justify-between gap-x-3 mt-1">
                        <div className="border py-2 px-2 md:px-4 xl:px-6 border-slate-500 rounded-lg break-all font-medium">
                            <p className="font-semibold">{ethWallet}</p>
                        </div>
                        {isCopy ? <CopySuccess size="30" className="text-green-600 cursor-pointer" variant="Bold" onClick={copyToClipboard} /> : <Copy size="30" className="text-black/70 cursor-pointer" variant="Bold" onClick={copyToClipboard} />}
                    </div>
                </div>
                <div className="border border-slate-200 mt-10 text-xs md:text-sm rounded-lg">
                    <div className="border-b border-slate-200 p-2 md:p-4 flex flex-col gap-y-2 my-2">
                        <p className="font-bold">Network</p>
                        <p className="text-[0.6rem] md:text-xs">ERC20</p>
                    </div>
                    <div className="border-b border-slate-200 p-2 md:p-4 flex flex-col gap-y-2 my-2">
                        <p className="font-bold">
                            Expected Arrival
                        </p>
                        <p className="text-[0.6rem] md:text-xs">1 network confirmation</p>
                    </div>
                    <div className="p-2 md:p-4 flex flex-col gap-y-2 my-2">
                        <p className="font-bold">
                            Expected Unlock
                        </p>
                        <p className="text-[0.6rem] md:text-xs">2 network confirmations</p>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <Button type="submit" text="Request Card" loading={loading} />
                </form>
            </div>
        </div>
    </main>
);
}

export default CardPayment;