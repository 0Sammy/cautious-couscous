import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import discoverShield from "../../../public/Images/private2.svg";
import applePay from "../../../public/Images/applepay.png";
import ramp from "../../../public/Images/ramp.png";
import creditCard from "../../../public/Images/creditCard.jpeg";
import moonPay from "../../../public/Images/moonpay.png";
import gPay from "../../../public/Images/gpay.png";
import pix from "../../../public/Images/pix.jpg";
import sepa from "../../../public/Images/sepa.png";
import simplex from "../../../public/Images/simplex.png";
import mercuryo from "../../../public/Images/mercuryo.png";



const Discover = () => {
    return ( 
        <main className="mt-24 flex flex-col gap-y-5 md:gap-y-0 md:gap-x-5 md:flex-row md:justify-between items-center">
            <div className="w-full md:w-[48%] min-w-[18rem] flex gap-x-2 bg-primary text-white py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px] overflow-hidden">
                <div className="flex flex-col gap-y-10">
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">Discover more ways to keep your assets safe</h3>
                    <Link href="/security" className="text-center text-xs md:text-sm xl:text-base font-medium rounded-full py-3 px-8 md:px-10 bg-white text-inkBlue hover:bg-green-400 duration-300">Get safety tips</Link>
                </div>
                <Image src={discoverShield} alt="Image" />
            </div>
            <div className="w-full md:w-[48%] min-w-[18rem] border border-[#DBDCE5] bg-[#F4F4F7] text-[#1B1B1C] py-10 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
                <p className="text-lg md:text-xl xl:text-2xl font-bold text-center max-w-[30ch] mx-auto">Compare and buy with trusted partners and payment methods</p>
                <div className="flex flex-col gap-y-5 mt-6">
                   <div className="flex justify-between">
                        <Image src={applePay} alt="Image" className="size-[75px] rounded-lg" />
                        <Image src={ramp} alt="Image" className="size-[75px] rounded-lg" />
                        <Image src={creditCard} alt="Image" className="size-[75px] rounded-lg" />
                    </div>
                    <div className="flex justify-between">
                        <Image src={moonPay} alt="Image" className="size-[75px] rounded-lg" />
                        <Image src={gPay} alt="Image" className="size-[75px] rounded-lg" />
                        <Image src={pix} alt="Image" className="size-[75px] rounded-lg" />
                    </div>
                    <div className="flex justify-between">
                        <Image src={sepa} alt="Image" className="size-[75px] rounded-lg" />
                        <Image src={simplex} alt="Image" className="size-[75px] rounded-lg" />
                        <Image src={mercuryo} alt="Image" className="size-[75px] rounded-lg" />
                    </div> 
                </div>
                
            </div>
        </main>
     );
}
 
export default Discover;