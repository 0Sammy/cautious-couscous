"use client"

import { useState } from "react";
import Image from "next/image";

//Import Needed Libs
import { formatCardNumber } from "@/lib/generateCardNumber";

//Import Needed Components
import Button from "../molecules/Button";

//Import Needed Images
import noCard from "../../../public/Images/frontCard.svg";
import cardBack from "../../../public/Images/userBackCard.svg";
import cardFront from "../../../public/Images/userFrontCard.svg";

//Import Needed Icons
import { InfoCircle } from "iconsax-react";
import CardPayment from "./CardPayment";


type RequestProps = {
    ethWallet: string;
    cardDetails: { id: string; status: string; userId: string | null; cardNumber: string; cardCvv: string; createdAt: Date, updatedAt: Date }[];
    userId: string;
    userEmail: string;
}


const Request = ({ ethWallet, cardDetails, userId, userEmail }: RequestProps) => {

    const [isDeposit, setIsDeposit] = useState<boolean>(false)
    const userCard = cardDetails[0]

    //Functions
    const toggleDeposit = () => {
        setIsDeposit((prev) => !prev)
    }

    return (
        <main>
            {cardDetails.length === 0 && <>
                <p className="text-base md:text-lg xl:text-xl text-red-600 font-semibold text-center my-4">Purchase a virtual Master Card</p>
                <Image src={noCard} alt="Atm Card" className="w-96 mx-auto" />
                <p className="text-black/60 font-semibold mt-8">Payment System</p>
                <div className="rounded-lg bg-black/10 px-5 py-3">
                    <p>Ethereum</p>
                </div>
                <div className="mt-10">
                    <p className="mt-4 text-black/60 font-semibold">Amount</p>
                    <div className="rounded-lg bg-black/10 px-5 py-3 font-semibold">
                        <p className="text-sm md:text-base xl:text-lg">$850</p>
                    </div>
                </div>
                <div className="mt-10" onClick={toggleDeposit}>
                    <Button loading={false} text="Get Card" type="button" />
                </div>
                <div className="flex gap-x-2 text-black/80 border border-black/10 rounded-lg p-2 md:p-4 xl:p-6 font-medium">
                    <InfoCircle size="24" className="text-green-600 shrink-0" variant="Bold" />
                    <p>Purchase a virtual Mastercard which is suitable for online shopping, settling bills, and handling tax-related payments. <span className="font-semibold text-black/90">(Please note that this action is voluntary)</span>
                    </p>
                </div>
                {isDeposit && <CardPayment toggle={toggleDeposit} ethWallet={ethWallet} userId={userId} userEmail={userEmail} />}
            </>}
            {cardDetails && cardDetails.length !== 0 && <>
                <div className="relative my-4">
                    <Image src={cardFront} alt="Atm Card" className="w-96 lg:w-[26rem] xl:w-[28rem] mx-auto" />
                </div>
                <div className="relative">
                    <Image src={cardBack} alt="Atm Card" className="w-96 lg:w-[26rem] xl:w-[28rem] mx-auto" />
                </div>
                <div className="mt-10">
                    <p className="text-green-600 font-semibold">Card Details</p>
                    <div className="flex flex-col gap-y-3 mt-6">
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Card Number</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">{formatCardNumber(userCard.cardNumber)}</p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Expiry Date</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">{ }</p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">CVV</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">{userCard.cardCvv}</p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Card PIN</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">Your card pin is the same as your <span className="text-inkBlue">Transaction Pin</span></p>
                        </div>
                    </div>
                </div>
            </>}
        </main>
    );
}

export default Request;