import Image from "next/image";

//Import Needed Images
import discoverShield from "../../../public/Images/shield.png";
import globeImg from "../../../public/Images/globe.svg";
import telescopeImg from "../../../public/Images/telescope.png";


const Empower = () => {
    return ( 
        <main className="border border-[#DBDCE5] bg-[#F4F4F7] mt-24 text-[#242426] py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[20ch] text-center mx-auto">Join us as we empower millions through Trust</h3>
            <div className="flex flex-col gap-y-5 mt-10">
                <div className="flex flex-col gap-y-5 items-center md:gap-y-0 md:flex-row md:justify-between my-6">
                    <div className="md:w-[48%] flex flex-col gap-y-5">
                        <p className="font-semibold text-xl md:text-2xl xl:text-3xl text-primary">Founded 2017</p>
                        <p className="text-sm md:text-base xl:text-lg font-medium">Our journey started with a clear goal: to simplify and democratize crypto, making it accessible to everyone.</p>
                    </div>
                    <div className="w-[48%] flex justify-center">
                        <Image src={discoverShield} alt="Image" loading="lazy" className="size-44"/>
                    </div>
                </div>
                <div className="flex flex-col-reverse gap-y-5 items-center md:gap-y-0 md:flex-row md:justify-between my-6">
                    <div className="w-[48%] flex justify-center">
                        <Image src={globeImg} alt="Image" loading="lazy" className="size-52"/>
                    </div>
                    <div className="md:w-[48%] flex flex-col gap-y-5">
                        <p className="font-semibold text-xl md:text-2xl xl:text-3xl text-primary">Trusted by 70M+ people</p>
                        <p className="text-sm md:text-base xl:text-lg font-medium">We&apos;ve built the trust of millions by making Web3 safer, easier, and more seamless to access.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-5 items-center md:gap-y-0 md:flex-row md:justify-between my-6">
                    <div className="md:w-[48%] flex flex-col gap-y-5">
                        <p className="font-semibold text-xl md:text-2xl xl:text-3xl text-primary">We&apos;re not stopping there</p>
                        <p className="text-sm md:text-base xl:text-lg font-medium">We&apos;re laying the foundation to bring more people than ever safely on-chain.</p>
                    </div>
                    <div className="w-[48%] flex justify-center">
                        <Image src={telescopeImg} alt="Image" loading="lazy" className="size-44"/>
                    </div>
                </div>
            </div>
            
        </main>
     );
}
 
export default Empower;