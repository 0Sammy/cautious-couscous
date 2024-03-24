import Image from "next/image";

//Import Needed Image
import nftImage from "../../../public/Images/nftProfiles.png";


const Passionate = () => {
    return ( 
        <main className="w-[90%] mx-auto mt-24 flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between items-center">
            <div className="flex flex-col gap-y-5 md:w-[48%]">
                <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl">We&apos;re a passionate team of Web3 builders & creators</h3>
                <p className="text-sm md:text-base xl:text-lg font-medium">Our team is as unique and decentralized as the products we build. We span across 19 different time zones, and all walks of life.</p>
            </div>
            <div className="md:w-[48%]">
                <Image src={nftImage} alt="Image" className="w-[90%] rounded-2xl"/>
            </div>
            
        </main> 
     );
}
 
export default Passionate;