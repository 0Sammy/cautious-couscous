import Image from "next/image"; 


//Import Needed Images
import flashImg from "../../../public/Images/aboutUs.png";

const OurPurpose = () => {
    return ( 
        <main className="rounded-[20px] md:rounded-[30px] py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 bg-primary text-white flex flex-col gap-y-5 items-center md:items-start md:gap-y-0 md:flex-row md:justify-between md:gap-x-5">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl w-full md:w-[25%]">Our purpose</h3>
            <div className="flex flex-col items-center md:flex-row">
                <div className="flex flex-col gap-y-5">
                  <p className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold">Freedom Foundations</p>  
                  <p className="text-sm md:text-base xl:text-lg font-medium">We want to give everyone the freedom to truly own, by building the foundations for the future of the free web.</p>
                </div>
                <Image src={flashImg} alt="Image" className="size-52 mt-4 md:mt-0" />
            </div>
        </main>
     );
}
 
export default OurPurpose;