import Image from "next/image";

//Import Needed Images
import ancilia from "../../../public/Images/ancilia.svg";
import binance from "../../../public/Images/binance.svg";
import hashdit from "../../../public/Images/hashdit.svg";

const SecurityPartners = () => {
    return ( 
        <main className="border border-[#DBDCE5] bg-[#F4F4F7] mt-24 text-[#242426] py-10 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl text-center">Our security partners</h3>
            <div className="flex gap-x-10 flex-wrap justify-center mt-10">
                <Image src={ancilia} alt="Auditors" className="size-40"/>
                <Image src={binance} alt="Auditors" className="size-40"/>
                <Image src={hashdit} alt="Auditors" className="size-40"/>
            </div>
        </main>
     );
}
 
export default SecurityPartners;