import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import logo from "../../../public/Images/logo.svg";

const Footer = () => {
    return ( 
        <main className="mt-24 border border-[#DBDCE5] bg-[#E0E0E3] mb-10 rounded-[20px] p-5 lg:rounded-[30px] lg:p-8 mx-auto w-full px-8 pb-12 pt-8 lg:px-24 lg:py-12">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row items-center justify-between">
               <Image src={logo} alt="Logo" className="w-48 md:w-56 xl:w-60"/>
                <div className="flex gap-5 flex-wrap justify-between items-center">
                    <Link className="hover:text-inkBlue duration-300 shrink-0 w-20" href="/buy">Buy Crypto</Link>
                    <Link className="hover:text-inkBlue duration-300 shrink-0 w-20" href="/security">Security</Link>
                    <Link className="hover:text-inkBlue duration-300 shrink-0 w-20" href="/about">About Us</Link>
                    <Link className="hover:text-inkBlue duration-300 shrink-0 w-20" href="/terms">Terms</Link>
                </div> 
            </div>
            
        </main>
     );
}
 
export default Footer;