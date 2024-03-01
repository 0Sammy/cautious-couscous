"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg"

//Import Needed Icons
import { Refresh2, Lock, Logout, Setting2, UserTag } from "iconsax-react";

const Header = ({userDetails}: any) => {

    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const [userOpen, setUserOpen] = useState<boolean>(false)
    //Functions
    const toggleSettings = () => {
        if (userOpen) {
            setUserOpen(false)
        }
        setSettingsOpen((prev) => !prev)
    }
    const toggleUser = () => {
        if (settingsOpen) {
            setSettingsOpen(false)
        }
        setUserOpen((prev) => !prev)
    }
    return ( 
        <main >
            <div className="border-l border-b border-slate-200 h-16 flex justify-between items-center px-4 md:px-6 xl:px-8 relative z-[50]">

                <Link href="/user/dashboard"><Image src={logo} alt="Capital Assets" className="size-10 lg:ml-0 ml-10"/></Link> 
            
            <div className="flex gap-x-2">
                <div  className="p-2 border border-slate-300 rounded-lg text-primary hover:bg-primary hover:text-white duration-500" onClick={toggleSettings}>
                   <Setting2 size="24" className="cursor-pointer"/> 
                </div>
                <div  className="p-2 border border-slate-300 rounded-lg text-primary hover:bg-primary hover:text-white duration-500" onClick={toggleUser}>
                   <UserTag size="24" className="cursor-pointer"/> 
                </div>
            </div> 
            {userOpen && <div className="absolute bg-white border border-slate-200 rounded-md p-4 right-7 top-[3.5rem] text-xs md:text-sm xl:text-base">
                <p className="capitalize text-sm md:text-base xl:text-lg font-semibold">{userDetails && userDetails.firstName} {userDetails && userDetails.lastName}</p>
                <p className="mt-2 text-opacity-60">{userDetails && userDetails.email}</p>
                <div className="border-slate-200 border-b my-4"></div>
                <Link href="/user/logout" className="flex gap-x-2 hover:bg-[#f0f0f0] duration-300 p-2 rounded-md mt-2 items-center">
                    <Logout size={20} className="text-red-600" variant="Bold"/>
                    <p className="medium">Logout</p>
                </Link>
            </div>}
            {settingsOpen && <div className="absolute bg-white border border-slate-200 rounded-md p-4 right-[5rem] top-[3.5rem] flex flex-col gap-y-3">
                <Link href="/forgotPassword" target="_blank" className="flex gap-x-2 hover:bg-[#f0f0f0] duration-300 p-2 rounded-md text-xs md:text-sm xl:text-base items-center">
                    <Refresh2 size={20} className="text-orange-600"/>
                    <p className="medium">Reset Password</p>
                </Link>
                <Link href="/user/profile" className="flex gap-x-2 hover:bg-[#f0f0f0] duration-300 p-2 rounded-md text-xs md:text-sm xl:text-base items-center">
                    <Lock size={20} className="text-green-600"/>
                    <p className="medium">Mnemonic Phrase</p>
                </Link>
            </div> }
            </div>
            
        </main>
     );
}
 
export default Header;