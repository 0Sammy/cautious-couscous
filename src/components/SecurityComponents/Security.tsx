import Image from "next/image";

//Import Needed Images
import shield from "../../../public/Images/shield.svg";


const Security = () => {
    return ( 
        <main className="mt-24 text-[#242426]">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[25ch]">Security is at our core</h3>
            <p className="text-sm md:text-base xl:text-lg font-medium mt-6 max-w-[50ch]">With the trust of over 70 million people worldwide, we take a proactive approach to security.</p>
            <div className="border border-[#DBDCE5] bg-[#F4F4F7] mt-10 py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px] flex flex-col-reverse gap-y-5 md:gap-y-0 md:flex-row md:items-center md:justify-between">
                <div className="w-full md:w-[48%] flex flex-col gap-y-5">
                  <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[25ch]">Battle-tested since 2017</h3>
                  <p className="text-sm md:text-base xl:text-lg font-medium mt-6 max-w-[50ch]">Protected by multiple layers of security, we&apos;ve operated safely since inception. Keeping your assets safe has always been and will always be our top priority.</p>  
                </div>
                <div className="w-full md:w-[48%] flex justify-center">
                    <Image src={shield} alt="Shield" className="size-40"/>
                </div>
                
            </div>
        </main>
     );
}
 
export default Security;