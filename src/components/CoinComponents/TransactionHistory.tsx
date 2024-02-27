"use client"
import { useSelectionStore } from "@/store/selection";

//Import Needed Icons
import { Cardano, Bitcoin, Tether, Ethereum, BinanceCoin, Trontron } from "iconsax-react";

const TransactionHistory = () => {

    const {coin} = useSelectionStore()

    return ( 
        <main className="bg-white rounded-lg p-4 shadow-xl mt-10">
            <p className="font-semibold text-xs md:text-sm xl:text-base">TRANSACTION HISTORY</p>
            <p className="text-[0.7rem] md:text-xs xl:text-sm text-black text-opacity-70 mt-4">Transaction History shows information about all <span className="uppercase">{coin === "bitcoin" ? "BTC" : coin === "ethereum" ? "ETH" : coin === "binance" ? "BNB" : coin === "tron" ? "TRX" : coin === "usdtt" ? "usdt (trc20)" : coin === "usdte" ? "usdt (erc20)" : coin === "ada" ? "ada" : "Coin"} </span> Transactions.</p>
            <div className="flex flex-col gap-y-2 mt-6">
                <div className="flex items-center justify-between py-4 cursor-pointer">
                    <div className="flex gap-x-1 items-center">
                        <div className="bg-[#EBEBF599] rounded-[50%] p-2">
                            {coin === "bitcoin" ? <Bitcoin size="24" className="text-[#20BF55]"/> : coin === "ethereum" ? <Ethereum size="24" className="text-[#20BF55]"/> : coin === "binance" ? <BinanceCoin size="24" className="text-[#20BF55]"/> : coin === "tron" ? <Trontron size="24" className="text-[#20BF55]"/> : coin === "usdtt" ? <Tether size="24" className="text-[#20BF55]"/> : coin === "usdte" ? <Tether size="24" className="text-[#20BF55]"/> : coin === "ada" ? <Cardano size="24" className="text-[#20BF55]"/> : <Bitcoin size="24" className="text-[#20BF55]"/>}                               
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[#141619] text-xs md:text-sm xl:text-base font-medium capitalize">Deposit</p>
                            <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">Friday, February 26, 2022</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <p className={`text-[#20BF55] text-xs md:text-sm xl:text-base font-medium`}>+$500</p> 
                        <p className={`bg-[#E6F5EE] text-[#026C3C] rounded-2xl px-2 py-1  text-[8px] md:text-[10px] xl:text-[12px] font-medium`}>successful</p>
                    </div>
                </div>
                <div className="flex items-center justify-between py-4 cursor-pointer">
                    <div className="flex gap-x-1 items-center">
                        <div className="bg-[#EBEBF599] rounded-[50%] p-2">
                            {coin === "bitcoin" ? <Bitcoin size="24" className="text-[#FF5964]"/> : coin === "ethereum" ? <Ethereum size="24" className="text-[#FF5964]"/> : coin === "binance" ? <BinanceCoin size="24" className="text-[#FF5964]"/> : coin === "tron" ? <Trontron size="24" className="text-[#FF5964]"/> : coin === "usdtt" ? <Tether size="24" className="text-[#FF5964]"/> : coin === "usdte" ? <Tether size="24" className="text-[#FF5964]"/> : coin === "ada" ? <Cardano size="24" className="text-[#FF5964]"/> : <Bitcoin size="24" className="text-[#FF5964]"/>}                               
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <p className="text-[#141619] text-xs md:text-sm xl:text-base font-medium capitalize">Sent</p>
                            <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">Friday, February 26, 2022</p>
                        </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                        <p className={`text-[#FF5964] text-xs md:text-sm xl:text-base font-medium`}>+$500</p> 
                        <p className={`bg-[#E6F5EE] text-[#026C3C] rounded-2xl px-2 py-1  text-[8px] md:text-[10px] xl:text-[12px] font-medium`}>successful</p>
                    </div>
                </div>
            </div>
        </main>
     );
}
 //text-[#FF5964] (Withdrawal) bg-[#FEF6E7] text-[#DF930E](status pending) text-red-600 bg-red-100(Status failed)
export default TransactionHistory;