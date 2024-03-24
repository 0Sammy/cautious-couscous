import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import walletImg from "../../../public/Images/wallet.svg";



const CTA = () => {
    return ( 
        <main className="mt-24 text-white flex flex-col-reverse gap-y-10 md:gap-y-0 md:items-center md:flex-row md:justify-between md:gap-x-5 py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 bg-primary rounded-[20px] md:rounded-[30px]">
           <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[30ch]">Simple and convenient to use, seamless to explore</h3> 
           <Link href="/create" className="text-center text-xs md:text-sm xl:text-base bg-white text-back px-8 md:px-10 py-3 hover:bg-green-400 text-black duration-300 rounded-full">Download Wealth Assets</Link>
           <div className="flex justify-end md:block">
            <Image src={walletImg} alt="An Image" loading="lazy"/>
           </div>
           
        </main>
     );
}
 
export default CTA;