"use client"

import { FormEvent, useState } from "react";
import Image from "next/image";

//Import Needed Components
import Button from "../molecules/Button";

//Import Needed Images
import noCard from "../../../public/Images/frontCard.svg";
import cardFront from "../../../public/Images/userBackCard.svg";
import cardBack from "../../../public/Images/userFrontCard.svg";


type RequestProps = {
    ethWallet: string;
    cardDetails: any;
}


const Request = ({ ethWallet, cardDetails }: RequestProps) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [isDeposit, setIsDeposit] = useState<boolean>(false)

    //Functions
    const toggleDeposit = () => {
        setIsDeposit((prev) => !prev)
    }

    //Submit Function
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("The button was clicked")
    }

    return (
        <main>
            {cardDetails.length === 0 && <>
                <p className="text-base md:text-lg xl:text-xl text-red-600 font-semibold text-center my-4">Purchase a virtual Master Card</p>
                <Image src={noCard} alt="Atm Card" className="w-96 mx-auto" />
                <p className="text-black/60 font-semibold mt-8">Payment System</p>
                <div className="rounded-md bg-black/10 px-5 py-3">
                    <p>Ethereum</p>
                </div>
                <div className="mt-10">
                    <p className="mt-4 text-black/60 font-semibold">Amount</p>
                    <div className="rounded-md bg-black/10 px-5 py-3">
                        <p>$850</p>
                    </div>
                </div>
                <div className="mt-10">
                    <Button loading={loading} text="Get Card" type="button" onClick={toggleDeposit} />
                </div>
            </>}
        </main>
    );
}

export default Request;