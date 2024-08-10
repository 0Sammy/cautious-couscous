import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import simpleImg from "../../../public/Images/simpleImg.svg";


const SimpleSection = () => {
    return ( 
        <main className="relative gradientYellowToPink z-10 -mt-32 md:-mt-40 py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
            <div className="text-center mt-40 text-[#1B1B1C] mb-14">
                <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]">Simple. Seamless.</h3>  
                <p className="text-sm md:text-base xl:text-lg mt-4 md:mt-6 max-w-[70ch] mx-auto text-opacity-70">Enjoy a smooth mobile app and desktop experience with easy-to-use, powerful tools to support your entire Web3 journey.</p>
            </div>
            <div className="rounded-[20px] p-5 bg-white border border-[#DBDCE5] lg:rounded-[30px] lg:p-8 m-auto mt-6 flex w-full flex-col-reverse justify-between gap-7 text-left md:flex-row md:items-center md:py-14">
                <div>
                    <h3 className="max-w-[18ch] text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Deposit crypto easily from exchanges</h3>
                    <p className="my-5 max-w-[40ch]">Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges like Binance and Coinbase.</p>
                    <Link href="/create" className="relative z-10 flex items-center justify-center gap-3 w-fit cursor-pointer px-8 py-[1.125rem] md:py-3 md:px-10 border border-inkBlue text-inkBlue hover:bg-inkBlue hover:text-white duration-300 rounded-full font-medium">Get started with deposits</Link>
                </div>
                <Image src={simpleImg} alt="Image" loading="lazy" className="rounded-[20px] bg-[#D9D9D9] md:w-[50%] "/>
            </div>
        </main>
     );
}
 
export default SimpleSection;