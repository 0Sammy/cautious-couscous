"use client"


import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


//Import Needed Images
import logo from "../../../public/Images/logo.svg";


const Nav = () => {

    const pathname = usePathname()

    return ( 
        <main className="fixed w-full py-4 top-0 left-0 flex justify-between items-center px-5 sm:px-10 md:px-20 xl:px-32 z-50 bg-white border-b border-slate-400">
            <Link href="/"><Image src={logo} alt="Logo" className="w-48 md:w-56 xl:w-60"/></Link>
            <div className="hidden lg:flex gap-x-8 text-base xl:text-lg justify-between items-center">
                <Link className={`${pathname === "/buy" ? "text-inkBlue font-semibold" : "text-primary font-medium" } hover:text-inkBlue duration-300`} href="/buy">Buy Crypto</Link>
                <Link className={`${pathname === "/security" ? "text-inkBlue font-semibold" : "text-primary font-medium" } hover:text-inkBlue duration-300`} href="/security">Security</Link>
                <Link className={`${pathname === "/about" ? "text-inkBlue font-semibold" : "text-primary font-medium" } hover:text-inkBlue duration-300`} href="/about">About Us</Link>
                <Link className={`${pathname === "/terms" ? "text-inkBlue font-semibold" : "text-primary font-medium" } hover:text-inkBlue duration-300`} href="/terms">Terms</Link>
                <Link href="/create" className="rounded-[2rem] px-6 py-3 bg-inkBlue text-white font-medium hover:bg-green-400 hover:text-black duration-300">Register</Link>
                <Link href="/login" className="rounded-[2rem] px-6 py-3 bg-inkBlue text-white font-medium hover:bg-green-400 hover:text-black duration-300">Sign In</Link>
            </div>
            <Link className={`${pathname === "/login" ? "text-inkBlue" : "text-black"} lg:hidden text-lg md:text-xl font-semibold hover:text-green-500 duration-300`} href="/login">Sign In</Link>
        </main>
     );
}
 
export default Nav;