"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Needed Libs
import { formatCardNumber, getExpiryTime } from "@/lib/generateCardNumber";

//Import Needed Components
import Button from "../molecules/Button";
import CardPayment from "./CardPayment";

//Import Needed Images
import noCard from "../../../public/Images/frontCard.svg";
import cardBack from "../../../public/Images/userBackCard.svg";
import cardFront from "../../../public/Images/userFrontCard.svg";

//Import Needed Icons
import { CardCoin, CardRemove, InfoCircle } from "iconsax-react";



type RequestProps = {
    ethWallet: string;
    cardDetails: { id: string; status: string; userId: string | null; cardNumber: string; cardCvv: string; createdAt: Date, updatedAt: Date }[];
    userId: string;
    userEmail: string;
    userName: string;
}


const Request = ({ ethWallet, cardDetails, userId, userEmail, userName }: RequestProps) => {

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
            {/* When the card is still pending */}
            {userCard && userCard.status === "pending" && <>
                <div className="flex gap-x-5 items-center my-8">
                    <p className="text-sm md:text-base xl:text-lg font-semibold">In Production</p>
                    <CardCoin size="32" className="text-green-600 animate-bounce" variant="Bold" />
                </div>

                <p className="mb-8">We have successfully received your request to activate your master card, and it is currently under review. <br /><br /> For further confirmation and inquiries, please kindly reach out to our company support team with proof of your payment.</p>
                <Link className="text-inkBlue font-semibold" href="/user/support">Contact Support</Link>
            </>}
            {/* When the card is successful */}
            {userCard && userCard.status === "successful" && <>
                <div className="relative my-4 h-fit w-fit mx-auto">
                    <Image src={cardFront} alt="Atm Card" className="w-96" />
                    <p className="absolute font-semibold text-sm sm:text-base md:text-lg xl:text-xl top-[52%] left-[15%] text-white tracking-wide z-1">{formatCardNumber(userCard.cardNumber)}</p>
                    <p className="absolute font-semibold text-sm sm:text-base md:text-lg xl:text-xl bottom-[2%] sm:bottom-[5%] left-[5%] text-white z-1 capitalize">{userName}</p>
                    <p className="absolute font-semibold bottom-[8%] right-[2%] text-white z-1 capitalize">{getExpiryTime(userCard.createdAt)}</p>
                </div>
                <div className="relative h-fit w-fit mx-auto">
                    <Image src={cardBack} alt="Atm Card" className="w-96 mx-auto" />
                    <p className="absolute font-semibold text-sm sm:text-base md:text-lg xl:text-xl top-[46%] left-6 sm:left-8 text-black z-1">{userCard.cardCvv}</p>
                </div>
                <div className="mt-10">
                    <p className="text-sm md:text-base xl:text-lg font-semibold text-center">Card Details</p>
                    <div className="flex flex-col gap-y-3 mt-4">
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Card Number</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">{formatCardNumber(userCard.cardNumber)}</p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Expiry Date</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">{getExpiryTime(userCard.createdAt)}</p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">CVV</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">{userCard.cardCvv}</p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Card PIN</p>
                            <p className="font-semibold text-sm md:text-base xl:text-lg">Your card pin is the same as your <span className="text-inkBlue">Transaction Pin</span></p>
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[10px] md:text-xs xl:text-sm text-black/50 font-semibold">Card Status</p>
                            <p className={`text-green-600 font-semibold text-sm md:text-base xl:text-lg`}>Active</p>
                        </div>
                    </div>
                </div>
            </>}
            {/* WHhen the card is not approved */}
            {userCard && userCard.status === "failed" && <>
                <div className="flex gap-x-5 items-center my-8">
                    <p className="text-sm md:text-base xl:text-lg font-semibold">Not Approved</p>
                    <CardRemove size="32" className="text-red-600" variant="Bold" />
                </div>
                <p className="mb-8">We are sorry to let you know that your request for a master card has not been approved yet. <br /><br /> After careful consideration of the details you submitted, it has been concluded that we cannot move forward with your request due to the insufficient Ethereum value, which should be equivalent to $850. <br /><br /> We realize this may be disheartening, and we invite you to contact our customer support team if you need more information or help. <br /><br />Thank you for your comprehension, and we apologize for any inconvenience this may have caused.</p>
                <Link className="text-inkBlue font-semibold" href="/user/support">Contact Support</Link>
            </>}
        </main>
    );
}

export default Request;