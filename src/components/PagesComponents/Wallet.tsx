"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import walletImg from "../../../public/Images/wallet.svg";



const Wallet = () => {
    //Set State and toggle them
    const [isMobile, setIsMobile] = useState<boolean>(true)
    const toggleMobile = () => {
        setIsMobile((prev) => !prev)
    }
    return ( 
        <main className="grid w-full gap-6 md:min-h-[450px] md:grid-cols-2 mt-24">
            <div className="rounded-[20px] p-5 lg:rounded-[30px] lg:p-8 border border-[#DBDCE5] bg-[#E0E0E3] flex flex-col gap-5 md:justify-center md:gap-7">
                <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Your one-stop, Web3 wallet</h3>
                <p className="text-sm md:text-base xl:text-lg text-[#242426]">Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.</p>
                <div className="rounded-[20px] border border-[#DBDCE5] bg-black w-fit p-10 md:hidden">
                    <Image src={walletImg} alt="An Image" loading="lazy"/>
                </div>
                <div className="flex w-[220px] items-stretch gap-1 rounded-full border border-black p-1">
                    <button onClick={toggleMobile} className={`${isMobile ? "bg-inkBlue text-white" : "text-[#242426]"} text-xs md:text-sm xl:text-base flex-1 py-3 rounded-full`}>Mobile</button>
                    <button onClick={toggleMobile} className={`${!isMobile ? "bg-inkBlue text-white" : "text-[#242426]"} text-xs md:text-sm xl:text-base flex-1 py-3 rounded-full`}>Extension</button>
                </div>
                <Link href="/create" className="text-center rounded-full font-medium py-3 px-8 md:px-10 w-fit text-xs md:text-sm xl:text-base bg-inkBlue text-white hover:bg-green-400 hover:text-black duration-300">{`Download ${isMobile ? "Mobile App" : "Extension"}`}</Link>
            </div>
            <div className="hidden overflow-hidden rounded-[20px] border border-[#DBDCE5] bg-[#171717] md:flex md:justify-center md:rounded-[30px]">
                <Image src={walletImg} alt="An Image" />
            </div>
        </main>
     );
}
 
export default Wallet;