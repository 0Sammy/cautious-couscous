"use client"


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg"

//Import Needed Icons
import { Copy, Lock, Logout, Setting2, UserTag, CopySuccess } from "iconsax-react";
import { toast } from "sonner";

const Header = ({ userDetails }: any) => {

    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)
    const [userOpen, setUserOpen] = useState<boolean>(false)
    const [isCopy, setIsCopy] = useState<boolean>(false)

    //Functions
    const toggleSettings = () => {
        setSettingsOpen((prev) => !prev)
    }

    const toggleUser = () => {
        setUserOpen((prev) => !prev)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(userDetails && userDetails.userId).then(() => {
            setIsCopy(true)
            toast.success(`You copied your userID: ${userDetails.userId} to your Clipboard`)
        }).catch(err => {
            setIsCopy(false)
            toast.error("Sorry, something went wrong, try again.")
        });
    };


    return (
        <main >
            <div className="border-l border-b border-slate-200 h-16 flex justify-between items-center px-4 md:px-6 xl:px-8 relative z-[70]">

                <Link href="/user/dashboard"><Image src={logo} alt="Capital Assets" className="size-10 lg:ml-0 ml-10" /></Link>

                <div className="flex gap-x-2">
                    <div className="p-2 border border-slate-300 rounded-lg text-primary hover:bg-primary hover:text-white duration-500" onClick={toggleSettings}>
                        <Setting2 size="24" className="cursor-pointer" />
                    </div>
                    <div className="p-2 border border-slate-300 rounded-lg text-primary hover:bg-primary hover:text-white duration-500" onClick={toggleUser}>
                        <UserTag size="24" className="cursor-pointer" />
                    </div>
                </div>
                {userOpen && <>
                    <button onClick={toggleUser} type="button" className="top-0 left-0 bg-black/10 w-full h-screen fixed z-[998]" /><div className="z-[999] absolute bg-white border border-slate-200 rounded-md p-4 right-7 top-[3.5rem]">
                        <p className="capitalize text-sm md:text-base xl:text-lg font-semibold">{userDetails && userDetails.firstName} {userDetails && userDetails.lastName}</p>
                        <div className="flex items-center justify-between my-2">
                            <p className="mt-2 text-sm md:text-base xl:text-lg font-semibold">{userDetails && userDetails.userId}</p>
                            {isCopy ? <CopySuccess size="28" className="text-green-600 cursor-pointer" variant="Bold" onClick={copyToClipboard} /> : <Copy size="28" className="text-black/70 cursor-pointer" variant="Bold" onClick={copyToClipboard} />}
                        </div>
                        <p className="mt-2 text-opacity-60">{userDetails && userDetails.email}</p>
                        <div className="border-slate-200 border-b my-4"></div>
                        <Link href="/user/logout" className="flex gap-x-2 hover:bg-[#f59e9e] duration-300 p-2 rounded-md mt-2 items-center">
                            <Logout size={20} className="text-red-600" variant="Bold" />
                            <p className="medium">Logout</p>
                        </Link>
                    </div>
                </>}
                {settingsOpen && <>
                    <button onClick={toggleSettings} type="button" className="top-0 left-0 bg-black/10 w-full h-screen fixed z-[998]" /><div className="z-[999] absolute bg-white border border-slate-200 rounded-md p-4 right-[5rem] top-[3.5rem] flex flex-col gap-y-3">
                        <Link href="/user/profile" className="flex gap-x-2 hover:bg-[#f0f0f0] duration-300 p-2 rounded-md items-center">
                            <Lock size={20} className="text-green-600" />
                            <p className="medium">Mnemonic Phrase</p>
                        </Link>
                    </div>
                </>}
            </div>

        </main>
    );
}

export default Header;