import Image from "next/image";


//Import Needed Images
import shield from "../../../public/Images/shield.svg";


const Download = () => {
    return ( 
        <main className="mt-24 flex w-full flex-col-reverse justify-between gap-7 rounded-[20px] bg-primary px-5 py-10 md:flex-row md:items-center lg:rounded-[30px] lg:p-16 lg:px-[100px] lg:max-h-[521px]">
            <div className="flex flex-col gap-y-5 text-white">
                <p className="text-xl md:text-2xl xl:text-3xl font-bold max-w-[20ch]">Download your crypto Wallet today!</p>
                <p className="text-sm md:text-base xl:text-lg font-medium max-w-[40ch]">Wealth assets is a secure, self-custody crypto wallet supporting 10M+ assets across 70+ blockchains including crypto. Buy, sell, swap, transfer and earn crypto all in one place. Available for iOS, Android, and desktop browsers.</p>
                <button className="mt-6 bg-white text-inkBlue hover:bg-green-400 duration-300 px-8 md:px-10 py-3 rounded-full">Download Now</button>
            </div>
            <Image src={shield} alt="Image"/>
        </main>
     );
}
 
export default Download;