import Image from "next/image";


//Import Needed Images
import heroImg from "../../../public/Images/heroSectionImg.png";


const HeroSection = () => {
    return ( 
        <main className="flex flex-col gap-y-10 md:gap-y-0 mg:gap-x-10 md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 text-[#1B1B1C] font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-wide">
                <div>
                    <p>True crypto</p>
                    <p className="mt-2">ownership.</p>
                </div>
                <p className="mt-4">Powerful Web3 experiences</p>
                <div className="text-sm md:text-base xl:text-lg text-black text-opacity-60 tracking-normal mt-10 sm:w-[90%] md:w-[80%] xl:w-[70%] font-light">
                    <p>Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust.</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
               <Image src={heroImg} alt="Image" />
            </div>
        </main>
     );
}
 
export default HeroSection;