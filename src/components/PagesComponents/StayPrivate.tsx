import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import privateImg from "../../../public/Images/private.svg";
import private1 from "../../../public/Images/private1.svg";
import private2 from "../../../public/Images/private2.svg";
import private3 from "../../../public/Images/private3.svg";

const StayPrivate = () => {
    return ( 
        <main className="gradientYellowToGreen -mt-32 md:-mt-40 py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
            <div className="text-center mt-40 text-[#1B1B1C] mb-14">
                <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem]">Stay private and secure</h3>  
                <p className="text-sm md:text-base xl:text-lg mt-4 md:mt-6 max-w-[70ch] mx-auto text-[#242426]">Rest easy knowing that our privacy and security measures keep you in control of your data and digital assets, while also keeping them safe.</p>
            </div>
            <div className="rounded-[20px] p-5 lg:rounded-[30px] lg:p-8 border border-[#DBDCE5] bg-white m-auto mt-10 flex w-full flex-col-reverse justify-between gap-7 text-left md:flex-row md:items-center md:py-14">
                <div>
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl max-w-[20ch]">True ownership of your crypto assets</h3>
                    <p className="my-5 max-w-[40ch] text-[#242426]">We secure your wallet, but don&apos;t control or have access to your private keys or secret phrase - only you do.</p>
                    <Link href="/create" className="relative z-10 flex items-center justify-center gap-3 w-fit cursor-pointer px-8 py-[1.125rem] md:py-3 md:px-10 border bg-inkBlue hover:bg-green-400 hover:text-black text-white duration-300 rounded-full font-medium">Get Started</Link>
                </div>
             <Image src={privateImg} alt="Image" loading="lazy"/>   
            </div>
            <ul className="mx-auto mt-6 flex flex-wrap items-stretch justify-center gap-6">
                <li className="rounded-[20px] p-5 lg:rounded-[30px] lg:p-8  border border-[#DBDCE5] bg-white grid w-full min-w-[250px] flex-1 gap-10 md:max-w-[510px] lg:max-w-none">
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Added security with encryption</h3>
                    <Image src={private1} alt="Image" loading="lazy" className="m-auto h-[160px] w-auto md:h-[100px]"/> 
                    <p className="text-[#242426]">Use our Encrypted Cloud Backup for increased wallet security.</p>
                </li>
                <li className="rounded-[20px] p-5 lg:rounded-[30px] lg:p-8  border border-[#DBDCE5] bg-white grid w-full min-w-[250px] flex-1 gap-10 md:max-w-[510px] lg:max-w-none">
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Zero personal tracking</h3>
                    <Image src={private2} alt="Image" loading="lazy" className="m-auto h-[160px] w-auto md:h-[100px]"/> 
                    <p className="text-[#242426]">We don&apos;t track any personal information, including your IP address or balances..</p>
                </li>
                <li className="rounded-[20px] p-5 lg:rounded-[30px] lg:p-8  border border-[#DBDCE5] bg-white grid w-full min-w-[250px] flex-1 gap-10 md:max-w-[510px] lg:max-w-none">
                    <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Proactive alerts for risky transactions</h3>
                    <Image src={private3} alt="Image" loading="lazy" className="m-auto h-[160px] w-auto md:h-[100px]"/> 
                    <p className="text-[#242426]">Stay safe with alerts for risky address and dApp connections.</p>
                </li>
            </ul>
            <Link href="/security" className="rounded-full flex items-center justify-center gap-3 font-medium px-8 py-[1.125rem] md:py-3 md:px-10 border border-black text-black hover:bg-black hover:text-white duration-300 mx-auto mt-10 w-fit">Learn more about privacy & security</Link>
        </main>
     );
}
 
export default StayPrivate;