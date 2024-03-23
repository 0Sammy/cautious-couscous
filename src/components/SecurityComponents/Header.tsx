import Image from "next/image"; 

//Import Needed Images
import privateImg from "../../../public/Images/private.svg";


const Header = () => {
    return ( 
        <main className="text-white flex flex-col-reverse gap-y-10 md:gap-y-0 md:items-center md:flex-row md:justify-between md:gap-x-5 py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 bg-primary rounded-[20px] md:rounded-[30px]">
            <div className="flex flex-col gap-y-5">
                <p className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold max-w-[20ch]">Your security. Your privacy. Our priority</p>
                <p className="text-sm md:text-base xl:text-lg font-medium mt-6 max-w-[50ch]">Security & privacy are at the core of what we do. Learn how we protect your data and make your entire Web3 journey safer.</p>
            </div>
            <Image src={privateImg} alt="Image" />
        </main>
     );
}
 
export default Header;