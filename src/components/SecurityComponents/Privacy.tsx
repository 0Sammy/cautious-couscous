import Image from "next/image";

//Import Needed Images
import aboutUsImg from "../../../public/Images/aboutUs.png";
import privateImg from "../../../public/Images/private.svg";
import laptop from "../../../public/Images/laptop.png";


const Privacy = () => {
    return ( 
        <main className="mt-24 text-[#242426]">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[25ch]">Your right to privacy</h3>
            <p className="text-sm md:text-base xl:text-lg font-medium mt-6 max-w-[50ch]">We prioritize your right to privacy, using data responsibly to enhance your experience.</p>
            <div className="mt-10 flex flex-wrap gap-5 items-center justify-between">
                <div className="w-[30%] min-w-[18rem] border border-[#DBDCE5] rounded-[20px] md:rounded-[30px] p-10 flex flex-col gap-y-10">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Self-custody</p>
                    <Image src={aboutUsImg} alt="Image" className="size-52" />
                    <p className="text-sm md:text-base xl:text-lg">Your keys, your crypto. We never access or store your private keys.</p>
                </div>
                <div className="w-[30%] min-w-[18rem] border border-[#DBDCE5] rounded-[20px] md:rounded-[30px] p-10 flex flex-col gap-y-10">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Zero personal tracking</p>
                    <Image src={privateImg} alt="Image" className="size-52" />
                    <p className="text-sm md:text-base xl:text-lg">We don&apos;t track or store your personal info, such as IP or email address.</p>
                </div>
                <div className="w-[30%] min-w-[18rem] border border-[#DBDCE5] rounded-[20px] md:rounded-[30px] p-10 flex flex-col gap-y-10">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">No sign-up required</p>
                    <Image src={laptop} alt="Image" className="size-60" />
                    <p className="text-sm md:text-base xl:text-lg">Set up a new wallet freely. No personal data required.</p>
                </div>
            </div>
        </main>
     );
}
 
export default Privacy;