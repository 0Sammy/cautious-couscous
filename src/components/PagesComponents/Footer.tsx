import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import logo from "../../../public/Images/logo.svg";

const Footer = () => {
    return ( 
        <main className="mt-24 py-6 px-5 sm:px-10 md:px-20 xl:px-32 bg-white border-t border-slate-400">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row items-center justify-between">
               <Image src={logo} alt="Logo" className="w-32 md:w-48 xl:w-52"/>
                <div className="flex gap-3 md:gap-5 flex-wrap justify-between items-center">
                    <Link className="hover:text-inkBlue duration-300 font-medium hover:font-semibold" href="/buy">Buy Crypto</Link>
                    <Link className="hover:text-inkBlue duration-300 font-medium hover:font-semibold" href="/security">Security</Link>
                    <Link className="hover:text-inkBlue duration-300 font-medium hover:font-semibold" href="/about">About Us</Link>
                    <Link className="hover:text-inkBlue duration-300 font-medium hover:font-semibold" href="/terms">Terms</Link>
                    <Link className="hover:text-inkBlue duration-300 font-medium hover:font-semibold" href="#frequently">Frequently Asked Questions</Link>
                </div> 
            </div>
            
        </main>
     );
}

export default Footer;