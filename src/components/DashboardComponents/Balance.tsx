"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

//Import Zustand Store
import { useBalanceStore } from "@/store/balance";
import { usePriceStore } from "@/store/prices";


//Import Needed Icons
import { Refresh2, Wallet3 } from "iconsax-react";



const Balance = () => {

    const {btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice } = usePriceStore()
    const {btcBalance, ethBalance, binanceBalance, tronBalance, usdttBalance, usdteBalance, adaBalance, solBalance, liteBalance, dogeBalance} = useBalanceStore()
    const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const btcTotal = btcBalance * btcPrice
        const ethTotal = ethBalance * ethPrice
        const bnbTotal = binanceBalance * bnbPrice
        const tronTotal =  tronBalance * trxPrice
        const usdttTotal= usdttBalance * usdtPrice
        const usdteTotal = usdteBalance * usdtPrice
        const adaTotal = adaBalance * adaPrice
        const solTotal = solBalance * solPrice
        const liteTotal =  liteBalance * ltcPrice
        const dogeTotal = dogeBalance * dogePrice
        
        const total = (btcTotal + ethTotal + bnbTotal + tronTotal + usdttTotal + usdteTotal + adaTotal + solTotal + liteTotal + dogeTotal)
        setTotal(total)
        
        if(total !== null || total !== undefined){
            setIsLoading(false)
        }
    },[adaBalance, adaPrice, binanceBalance, bnbPrice, btcBalance, btcPrice, dogeBalance, dogePrice, ethBalance, ethPrice, liteBalance, ltcPrice, solBalance, solPrice, tronBalance, trxPrice, usdtPrice, usdteBalance, usdttBalance])
    return ( 
        <main className="bg-[#160959] rounded-2xl p-4 md:p-6 xl:p-8 flex flex-col gap-y-10 text-white shadow-xl">
            {isLoading && <>
                <div className="fixed top-0 left-0 flex items-center justify-center bg-black/90 z-[9999] h-screen w-full">
                    <Refresh2 size="40" color="#FF8A65" className="animate-spin" />
                </div>
                </> }
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-1">
                       <p>Total Balance</p>
                       <p className="text-lg md:text-xl xl:text-2xl font-semibold">${(total).toLocaleString("en-US")}</p> 
                    </div>
                    <Wallet3 size="30" variant="Bold"/>
                </div>
                <div className="flex flex-col gap-y-5 font-semibold">
                    <div className="flex gap-x-3">
                        <Link href="/user/overview" className="w-1/2 bg-white text-[#160959] py-2 md:py-3 text-center rounded-2xl border border-white hover:bg-inherit hover:text-white duration-500">Receive</Link>
                        <Link href="/user/overview" className="w-1/2 bg-white text-[#160959] py-2 md:py-3 text-center rounded-2xl border border-white hover:bg-inherit hover:text-white duration-500">Send</Link>
                    </div>
                    <Link href="https://www.moonpay.com" target="_blank" className="mx-auto w-1/2 bg-white text-[#160959] py-2 md:py-3 text-center rounded-2xl border border-white hover:bg-inherit hover:text-white duration-500">Buy</Link>
                </div>
        </main>
     );
}
 
export default Balance;