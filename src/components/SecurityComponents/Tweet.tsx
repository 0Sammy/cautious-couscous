import Image from "next/image";

//Import Needed Images
import tweet from "../../../public/Images/tweet.jpg";

const Tweet = () => {
    return ( 
        <main className="border border-[#DBDCE5] bg-[#F4F4F7] mt-24 text-[#242426] flex flex-col gap-y-10 md:gap-y-0 md:items-center md:flex-row md:justify-between md:gap-x-5 py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
            <div className="w-full md:w-[48%]">
                <Image src={tweet} alt="Tweet Image" />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-y-5 text-[#1B1B1C] ">
                <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[30ch]">We build security features that protect your assets</h3>
                <p className="text-sm md:text-base xl:text-lg font-medium mt-6 max-w-[50ch]">Built-in risk monitoring tools, like our Security Scanner, help over 70 million wealth assets users safeguard their assets and avoid potential scams.</p>
                <button className="mt-6 rounded-full px-8 md:px-10 py-3 text-xs md:text-sm xl:text-base bg-primary text-white hover:bg-green-400 hover:text-black duration-300">Download Wealth Assets</button>
            </div>
        </main>
     );
}
 
export default Tweet;