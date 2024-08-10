import Image from "next/image";

//Import Needed Images
import shieldImg from "../../../public/Images/private2.svg";
import globalImg from "../../../public/Images/globe.svg";
import competitiveImg from "../../../public/Images/competitive.svg";


const ThreeCard = () => {
    return ( 
        <main className="mt-24">
            <div className="special flex justify-between gap-x-10 overflow-x-auto text-[#242426]">
                <div className="w-[32%] min-w-[20rem] border border-[#DBDCE5] bg-[#F4F4F7] rounded-[20px] p-8 mb-4">
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Global Coverage</h3>
                    <p className="mt-6">Top up your wallet with a wide selection of payment methods including Apple Pay, Google Pay, debit and credit card, or bank transfer.</p>
                    <Image src={globalImg} alt="Image" loading="lazy" className="mt-6"/>
                </div>
                <div className="w-[32%] min-w-[20rem] border border-[#DBDCE5] bg-[#F4F4F7] rounded-[20px] p-8 mb-4">
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">100+ local fiat currencies</h3>
                    <p className="mt-6">Convert USD, EUR, GBP and 100+ other fiat currencies seamlessly to crypto.</p>
                    <Image src={shieldImg} alt="Image" loading="lazy" className="mt-6"/>
                </div>
                <div className="w-[32%] min-w-[20rem] border border-[#DBDCE5] bg-[#F4F4F7] rounded-[20px] p-8 mb-4">
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Competitive rates</h3>
                    <p className="mt-6">Compare and secure the best rates from trusted payment providers across a wide range of cryptocurrencies.</p>
                    <Image src={competitiveImg} alt="Image" loading="lazy" className="mt-6"/>
                </div>
            </div>
            
        </main>
     );
}
 
export default ThreeCard;