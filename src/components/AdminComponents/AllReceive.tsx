"use client"
import { FormEvent, useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/dateTimeUtils";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";


//Import Needed Icons
import { More, Bitcoin, Ethereum, BinanceCoin, Trontron, Tether, Cardano, Solana, Litecoin, Coin } from "iconsax-react";




const AllReceive = ({receive}: any) => {
    
    const pendingReceive = receive.filter((deposit: { status: string; }) => deposit.status === 'pending')
    const processedReceive = receive.filter((deposit: { status: string; }) => deposit.status !== 'pending')

    //States
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleMenu = (id: string) => {
        // If the clicked item is already expanded, close it; otherwise, open it
        setExpandedItem((prevItem) => (prevItem === id ? null : id));
    };
    //OnSubmit Function
    const onSubmit = (event: FormEvent) => {
        event.preventDefault();

        const clickedButton = (event as any).nativeEvent.submitter;

        const currentUpdate = clickedButton.name === 'approve' ? 'successful' : 'failed';

        const formData = { id: expandedItem, currentUpdate };
        console.log({formData})

        makeApiRequest("/modifyTransaction", "post", formData, {

            onSuccess: () => {
                toast.success("Transaction status was modified successfully")
                window.location.reload()
            },

            onError: (error: any) => {
                toast.error("Unable to change transaction status, please try again later.")
                window.location.reload()
            }

        })
    }
    return ( 
    <>
        <main className="min-h-screen text-xs md:text-sm xl:text-base">
            <div className="h-[50vh] overflow-y-auto px-2 sm:px-4 md:px-6 xl:px-8 py-4 special">
                <p className="text-base md:text-lg xl:text-xl font-semibold text-white">Pending Transaction</p>
                <div className="flex flex-col gap-y-3 mt-4">
                {pendingReceive && pendingReceive.map((pending: any) => (
                    <div key={pending.id} className="hover:bg-slate-800 duration-500 p-2 rounded-md">
                       <div className="flex items-center justify-between cursor-pointer">
                           <Link href={`history/${pending.id}`} className="flex gap-x-1 items-center">
                               <div className="bg-green-600 rounded-[50%] p-2 bg-opacity-30 text-green-600">
                                   {pending.coin === "bitcoin" ? <Bitcoin size="20" /> : pending.coin === "ethereum" ? <Ethereum size="20" /> : pending.coin === "binance" ? <BinanceCoin size="20" /> : pending.coin === "tron" ? <Trontron size="20" /> : pending.coin.includes('usd') ? <Tether size="20" /> : pending.coin === "ada" ? <Cardano size="20" /> : pending.coin === "solana" ? <Solana size="20" /> : pending.coin === "lite" ? <Litecoin size="20" /> : pending.coin === "doge" ? <Coin size="20" /> : <Coin size="20" />} 
                               </div>

                               <div className="flex flex-col gap-y-0.5">
                                   <p className="text-[#141619] text-xs md:text-sm xl:text-base font-medium capitalize">{pending.coin === "bitcoin" ? "Bitcoin" : pending.coin === "ethereum" ? "Ethereum" : pending.coin === "binance" ? "Binancecoin" : pending.coin === "tron" ? "Tron" : pending.coin.includes('usd') ? "Tether" : pending.coin === "ada" ? "Cardano" : pending.coin === "solana" ? "Solana" : pending.coin === "lite" ? "Litecoin" : pending.coin === "doge" ? "Doge" : "Coin"} was received</p>
                                   <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(pending.createdAt)}</p>
                               </div>
                           </Link>
                           <div className="relative flex gap-x-2 items-center">
                               <p className="text-[#FF5964] text-xs md:text-sm xl:text-base font-medium">+{pending.amount}</p> 
                               <p className="bg-[#FEF6E7] text-[#DF930E] rounded-2xl px-2 py-0.5  text-[8px] md:text-[10px] xl:text-[12px] font-medium capitalize">{pending.status}</p>
                               <More size="24" className="text-[#F0F0F0] cursor-pointer"  onClick={() => toggleMenu(pending.id)}/>
                               {expandedItem === pending.id && ( 
                                <div className="bg-white absolute w-36 z-[50] top-10 -left-12 rounded-md py-2 border border-slate-300 shadow-sm">
                                    <form className="flex flex-col gap-y-2 text-black" onSubmit={onSubmit}>
                                        <button type="submit" className="hover:text-primary duration-300" name="approve">Approve</button> 
                                        <button type="submit" className="hover:text-primary duration-300" name="deny">Deny</button>
                                    </form>
                               </div>
                                )}
                               
                           </div>
                       </div>
                    </div>
                  ))}
                </div>
            </div>
            <div className="my-4 flex justify-end ">
               <Link href="/admin/create" className="bg-green-600 text-white px-4 md:px-6 xl:px-8 py-3 rounded-md hover:bg-green-800 duration-300">New Transaction</Link> 
            </div>
        
            <div className="h-[50vh] overflow-y-auto px-4 md:px-6 xl:px-8 py-4 special">
                <p className="text-base md:text-lg xl:text-xl font-semibold text-white">Processed Transaction</p>
                <div className="flex flex-col gap-y-3 mt-4">
                    {processedReceive && processedReceive.map((processed: any) => ( 
                        <Link href={`history/${processed.id}`} key={processed.id} className="hover:bg-slate-800 duration-500 p-2 rounded-md">
                            <div className="flex items-center justify-between cursor-pointer">
                                <div className="flex gap-x-1 items-center">
                                   <div className="bg-green-600 rounded-[50%] p-2 bg-opacity-30 text-green-600">
                                       {processed.coin === "bitcoin" ? <Bitcoin size="20" /> : processed.coin === "ethereum" ? <Ethereum size="20" /> : processed.coin === "binance" ? <BinanceCoin size="20" /> : processed.coin === "tron" ? <Trontron size="20" /> : processed.coin.includes('usd') ? <Tether size="20" /> : processed.coin === "ada" ? <Cardano size="20" /> : processed.coin === "solana" ? <Solana size="20" /> : processed.coin === "lite" ? <Litecoin size="20" /> : processed.coin === "doge" ? <Coin size="20" /> : <Coin size="20" />} 
                                   </div>

                                   <div className="flex flex-col gap-y-0.5">
                                       <p className="text-[#F0F0F0] text-xs md:text-sm xl:text-base font-medium capitalize">{processed.coin === "bitcoin" ? "Bitcoin" : processed.coin === "ethereum" ? "Ethereum" : processed.coin === "binance" ? "Binancecoin" : processed.coin === "tron" ? "Tron" : processed.coin.includes('usd') ? "Tether" : processed.coin === "ada" ? "Cardano" : processed.coin === "solana" ? "Solana" : processed.coin === "lite" ? "Litecoin" : processed.coin === "doge" ? "Doge" : "Coin"} was received</p>
                                       <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(processed.createdAt)}</p>
                                   </div>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <p className={`${processed.status === "successful" ? "text-[#20BF55]" : "text-[#FF5964]"} text-xs md:text-sm xl:text-base font-medium`}>+{processed.amount}</p> 
                                    <p className={`capitalize ${processed.status === "successful" ? "bg-green-600 bg-opacity-20 text-[#20BF55]" : "bg-red-600 bg-opacity-20 text-red-800"} rounded-2xl px-2 py-0.5  text-[8px] md:text-[10px] xl:text-[12px] font-medium`}>{processed.status}</p>
                                </div>
                            </div>
                        </Link> 
                    ))}
                </div>
            </div>
        </main>
    </>
     );
}
 
export default AllReceive;