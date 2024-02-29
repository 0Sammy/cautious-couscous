"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectionStore } from "@/store/selection";

//Import Needed Components
import Receive from "./Receive";
import SendingForm from "./Send";
//Import Needed Images
import bitcoinLogo from "../../../public/Images/bitcoin.svg";
import ethLogo from "../../../public/Images/eth.svg";
import bnbLogo from "../../../public/Images/bnb.svg";
import tronLogo from "../../../public/Images/tron.svg";
import usdtLogo from "../../../public/Images/usdt.svg";
import cardanoLogo from "../../../public/Images/cardano.png";
import solanaLogo from "../../../public/Images/solana.png";
import litecoinLogo from "../../../public/Images/litecoin.png";
import dogeLogo from "../../../public/Images/doge.png";

//Import Needed Icons
import { ArrowDown, Send } from "iconsax-react";


const CoinOverview = () => {

    const [isReceiveOpen, SetIsReceiveOpen] = useState<boolean>(false)
    const {coin} = useSelectionStore()
    //console.log({coin})
    //Functions
    const toggleReceive = () => {
        SetIsReceiveOpen((prevIsReceiveOpen) => !prevIsReceiveOpen)
    }

    return ( 
        <>
        { isReceiveOpen && <Receive toggleFunction={toggleReceive}/>}
            <main className="bg-white rounded-tl-2xl rounded-tr-2xl p-4 shadow-xl">
                <div className="flex flex-col items-center p-4">
                   <Image className="rounded-[50%] size-14" src={coin === "bitcoin" ? bitcoinLogo : coin === "ethereum" ? ethLogo : coin === "binance" ? bnbLogo : coin === "tron" ? tronLogo : coin.includes("usdt") ? usdtLogo : coin === "ada" ? cardanoLogo : coin === "solana" ? solanaLogo : coin === "lite" ? litecoinLogo : coin === "doge" ? dogeLogo : bitcoinLogo} alt="Icon" />
                    <p className="mt-2 uppercase text-xl md:text-2xl font-semibold">0.00 {coin === "bitcoin" ? "BTC" : coin === "ethereum" ? "ETH" : coin === "binance" ? "BNB" : coin === "tron" ? "TRX" : coin === "usdtt" ? "usdt (trc20)" : coin === "usdte" ? "usdt (erc20)" : coin === "ada" ? "ada" : coin === "solana" ? "SOL" : coin === "lite" ? "LTC" : coin === "doge" ? "DOGE" : "coin"}</p>
                    <p className="text-base md:text-lg font-medium">$0.00</p> 
                </div>

                <div className="flex border-t border-slate-200 p-4 mt-4 text-xs md:text-sm xl:text-base">
                    <div className="w-1/2 flex items-center justify-center border-r border-slate-400">
                        <div className="flex gap-x-2 text-primary p-2 items-center cursor-pointer hover:text-black duration-500" onClick={toggleReceive}>
                            <ArrowDown size="20"/> 
                            <p className="font-semibold">Receive</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        <Link href="/user/send" className="flex gap-x-2 text-primary p-2 items-center cursor-pointer hover:text-black duration-500">
                            <Send size="20"/>
                            <p className="font-bold">Send</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default CoinOverview;