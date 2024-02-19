"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg"

//Import Needed Icons
import { Setting2, UserTag } from "iconsax-react";

const Header = () => {
    return ( 
        <main className="border-l border-b border-slate-200 h-16 flex justify-between items-center px-4 md:px-6 xl:px-8 relative z-[9999]">
            <Link href="/user/dashboard"><Image src={logo} alt="Capital Assets" className="size-10"/></Link>
            <div className="flex gap-x-2">
                <div  className="p-2 border border-slate-300 rounded-lg text-primary hover:bg-primary hover:text-white duration-500">
                   <Setting2 size="24" className="cursor-pointer"/> 
                </div>
                <div  className="p-2 border border-slate-300 rounded-lg text-primary hover:bg-primary hover:text-white duration-500">
                   <UserTag size="24" className="cursor-pointer"/> 
                </div>
                
            </div>
            
        </main>
     );
}
 
export default Header;