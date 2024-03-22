import Image from "next/image";
import Link from "next/link";


//Import Needed Images
import logo from "../../../public/Images/logo.svg";


const Nav = () => {
    return ( 
        <main className="fixed w-full py-4 top-0 left-0 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 z-50 bg-white">
            <Image src={logo} alt="Logo" className="w-48 md:w-56 xl:w-60"/>
            <div className="hidden lg:flex gap-x-10 justify-between items-center">
                <Link className="hover:text-inkBlue duration-300" href="/buy">Buy Crypto</Link>
                <Link className="hover:text-inkBlue duration-300" href="/security">Security</Link>
                <Link className="hover:text-inkBlue duration-300" href="/about">About Us</Link>
                <Link className="hover:text-inkBlue duration-300" href="/terms">Terms</Link>
                <Link href="/create" className="rounded-[2rem] px-6 py-2 bg-inkBlue text-white font-medium hover:bg-green-400 hover:text-black duration-300">Register</Link>
                <Link href="/login" className="rounded-[2rem] px-6 py-2 bg-inkBlue text-white font-medium hover:bg-green-400 hover:text-black duration-300">Sign In</Link>
            </div>
            <Link className="lg:hidden text-lg md:text-xl font-semibold hover:text-green-500 text-inkBlue duration-300" href="/login">Sign In</Link>
        </main>
     );
}
 
export default Nav;