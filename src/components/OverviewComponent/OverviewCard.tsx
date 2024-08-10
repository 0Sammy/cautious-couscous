"use client"
import Link from "next/link";
import Image from "next/image";

type OverviewCardProps = {
    coinName: string,
    balance: number | string,
    imgSrc: string | any
}
const OverviewCard = ({coinName, balance, imgSrc}: OverviewCardProps) => {
    return ( 
        <main className="w-full p-4 md:p-6 xl:p-8 rounded-2xl shadow-xl font-semibold bg-white hover:bg-[#FAFAFA] duration-300">
            <Link href="/user/coin" className="flex flex-col gap-y-5">
                <div className="flex justify-between items-center font-medium">
                    <p className="text-sm md:text-base xl:text-lg uppercase font-semibold">{coinName}</p>
                    <p className="font-semibold">${balance}</p>
                </div>
                <Image src={imgSrc} alt={`${coinName} icon`} className="size-10"/>
            </Link>
        </main>
        
     );
}
 
export default OverviewCard;