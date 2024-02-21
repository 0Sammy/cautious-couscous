import Image from "next/image";
import Link from "next/link";

type cardProps = {
    coinName: string,
    balance: number | string
    amount: number | any
    coinShortForm: string
    imgSrc: string
    currentPrice: string | number 
    currentChangeIndex: string | number
}
const Card = ({coinName, balance, amount, coinShortForm, imgSrc, currentPrice, currentChangeIndex}: cardProps) => {
    return ( 
        <main className="w-full p-4 md:p-6 xl:p-8 rounded-2xl shadow-xl flex flex-col gap-y-1 text-xs md:text-sm xl:text-base font-semibold bg-white">
            <Link href="/user/coin">
                <div className="flex justify-between items-center">
                    <p className="uppercase">{coinName}</p>
                    <p>${balance}.00</p>
                </div>
                <div className="flex justify-between">
                    <Image src={imgSrc} alt={`${coinName} icon`} className="size-10"/>
                    <p>{amount}.00 <span className="uppercase">{coinShortForm}</span></p>
                </div>
                <div className="flex gap-x-5">
                    <p>${currentPrice.toLocaleString()}.00</p>
                    <p className="text-red-500">{currentChangeIndex}%</p>
                </div>
            </Link>
            
        </main>
     );
}
 
export default Card;