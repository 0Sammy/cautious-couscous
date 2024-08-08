import Image from "next/image";

//Import Needed Images
import img from "../../../public/Images/heroSectionImg.png";


const WhyUs = () => {
    return (
        <main className="py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between">
            <div className="w-full md:w-[48%] xl:w-[45%] flex flex-col gap-y-3">
                <h1 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl">Why Us?</h1>
            </div>
            <div className="w-full md:w-[48%] xl:w-[45%]">
                <Image src={img} alt="Image" />
            </div>
        </main>
    );
}

export default WhyUs;