"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelectionStore } from "@/store/selection";
import { useWalletStore } from "@/store/wallets";
import { toast } from "sonner";
import { redirect } from "next/navigation";

//Import Needed Images
import bitcoinAddress from "../../../public/Images/BTC.jpg";
import ethAddress from "../../../public/Images/ETH.jpg";
import bnbAddress from "../../../public/Images/BNB.jpg";
import tronAddress from "../../../public/Images/Tron.jpg";
import usdttAddress from "../../../public/Images/USDTT.jpg";
import usdteAddress from "../../../public/Images/USDTE.jpg";
import cardanoAddress from "../../../public/Images/ADA.jpg";
import solanaAddress from "../../../public/Images/Solana.jpg";
import litecoinAddress from "../../../public/Images/Lite.jpg";
import dogeAddress from "../../../public/Images/Doge.jpg";

//Import Needed Icons
import { CloseSquare } from "iconsax-react";



type modalProps = {
    toggleFunction?: ()=> void
}

const Receive = ({toggleFunction}: modalProps) => {

    //State for the copied text
    const [isCopied, setIsCopied] = useState<boolean>(false)

    const { btc, eth, usdte, usdtt, tron, bnb, ada, doge, litecoin, solana } = useWalletStore()

    const {coin} = useSelectionStore()
   //Copy function
   const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(coin === "bitcoin" ? btc : coin === "ethereum" ? eth : coin === "binance" ? bnb : coin === "tron" ? tron : coin === "usdtt" ? usdtt : coin === "usdte" ? usdte : coin === "ada" ? ada : coin === "solana" ? solana : coin === "lite" ? litecoin : coin === "doge" ? doge : "coin"
      );
      setIsCopied(true);
      toast.success("Wallet address was copied to clipboard")
    } catch (err) {
      console.error('Unable to copy text', err);
      toast.error("Unable to copy wallet address, try again later.")
    }
  };
  //Check and redirect a user to overview if they didn't select any coin
  useEffect(() => {
    if (!coin) {
     redirect("/user/overview")
    }
 })
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[100] top-0 left-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] bg-white p-4 md:p-8 rounded-lg">
                <div className="flex items-center justify-between p-2 pb-4 border-b border-slate-500">
                    <p className="uppercase text-xs md:text-sm xl:text-base font-semibold">RECEIVE {coin === "bitcoin" ? "BTC" : coin === "ethereum" ? "ETH" : coin === "binance" ? "BNB" : coin === "tron" ? "TRX" : coin === "usdtt" ? "usdt (trc20)" : coin === "usdte" ? "usdt (erc20)" : coin === "ada" ? "ada" : coin === "solana" ? "SOL" : coin === "lite" ? "LTC" : coin === "doge" ? "DOGE" : "coin"}</p>
                    <CloseSquare size="24" className="text-red-600 cursor-pointer" onClick={toggleFunction}/>
                </div>
              <div className="mt-10 flex justify-center"> 
                <Image className="size-40" src={coin === "bitcoin" ? bitcoinAddress : coin === "ethereum" ? ethAddress : coin === "binance" ? bnbAddress : coin === "tron" ? tronAddress : coin === "usdtt" ? usdttAddress : coin === "usdte" ? usdteAddress : coin === "ada" ? cardanoAddress : coin === "solana" ? solanaAddress : coin === "lite" ? litecoinAddress : coin === "doge" ? dogeAddress : bitcoinAddress} alt="Coin QRCode" />
              </div>
              <div className="text-xs md:text-sm xl:text-base mt-10 flex flex-col items-center">
                <p>Wallet Address</p>
                <div className="border p-2 border-slate-500 rounded-lg break-all">
                    {coin === "bitcoin" ? btc : coin === "ethereum" ? eth : coin === "binance" ? bnb : coin === "tron" ? tron : coin === "usdtt" ? usdtt : coin === "usdte" ? usdte : coin === "ada" ? ada : coin === "solana" ? solana : coin === "lite" ? litecoin : coin === "doge" ? doge : "coin"}
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <button className="bg-primary text-white rounded-lg px-6 md:px-8 xl:px-10 border border-primary hover:bg-inherit hover:text-primary duration-300 text-xs md:text-sm xl:text-base py-3 " onClick = {handleCopyClick}>
                    Copy
                </button>
              </div>
              <div className="border border-slate-200 mt-10 text-xs md:text-sm">
                <div className="border-b border-slate-200 p-2 md:p-4 flex flex-col gap-y-2 my-2">
                   <p className="font-bold">Network</p>
                   <p className="text-[0.6rem] md:text-xs">{coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ERC20" : coin === "binance" ? "BEP20" : coin === "tron" ? "TRC20" : coin === "usdtt" ? "TRC20" : coin === "usdte" ? "ERC20" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGECOIN" : "BITCOIN"}</p>
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
              <div className="flex justify-end mt-10">
                <button className="bg-red-600 border border-red-600 hover:bg-inherit hover:text-red-600 duration-300 text-white rounded-lg px-6 md:px-8 xl:px-10 text-xs md:text-sm xl:text-base py-3" onClick={toggleFunction}>
                  Close
                </button>
              </div>
              
            </div>
        </main>
     );
}
 
export default Receive;

