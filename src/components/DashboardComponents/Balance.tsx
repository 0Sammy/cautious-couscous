import Link from "next/link";

//Import Needed Icons
import { Wallet3 } from "iconsax-react";


const Balance = () => {
    return ( 
        <main className="bg-[#160959] rounded-2xl p-4 md:p-6 xl:p-8 flex flex-col gap-y-10 text-white shadow-xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                   <p className="text-xs md:text-sm xl:text-base">Total Balance</p>
                   <p className="text-lg md:text-xl xl:text-2xl font-semibold">$0.00</p> 
                </div>
                <Wallet3 size="30" variant="Bold"/>
            </div>
            <div className="flex flex-col gap-y-5 font-semibold text-xs md:text-sm xl:text-base">
                <div className="flex gap-x-3">
                    <Link href="/user/overview" className="w-1/2 bg-white text-[#160959] py-2 md:py-3 text-center rounded-2xl border border-white hover:bg-inherit hover:text-white duration-500">Receive</Link>
                    <Link href="/user/overview" className="w-1/2 bg-white text-[#160959] py-2 md:py-3 text-center rounded-2xl border border-white hover:bg-inherit hover:text-white duration-500">Send</Link>
                </div>
                <Link href="https://www.Moonpay.com" target="_blank" className="mx-auto w-1/2 bg-white text-[#160959] py-2 md:py-3 text-center rounded-2xl border border-white hover:bg-inherit hover:text-white duration-500">Buy</Link>
            </div>
        </main>
     );
}
 
export default Balance;