"use client"

import { useState } from "react";
import { toast } from "sonner";

const ProfileInformation = ({userDetails}: any) => {

    //State for the copied text
    const [isCopied, setIsCopied] = useState<boolean>(false)

    //Copy function
   const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(userDetails && userDetails.userId);
      setIsCopied(true);
      toast.success("Profile ID was copied to clipboard")
    } catch (err) {
      console.error('Unable to copy text', err);
      toast.error("Unable to copy Profile ID try again later.")
    }
  };
    return ( 
        <main>
            <p>Profile Information</p>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-2 mt-4">
                    <p className="text-sm md:text-base xl:text-lg font-semibold">User ID</p>
                    <p className="font-medium">{userDetails && userDetails.userId}</p>
                </div>
                <button className="bg-primary text-white rounded-lg px-4 md:px-6 xl:px-8 border border-primary hover:bg-inherit hover:text-primary duration-300 py-2" onClick = {handleCopyClick}>
                    Copy
                </button>
            </div>
            
            <div className="flex flex-col gap-y-2 mt-4">
                <p className="text-sm md:text-base xl:text-lg font-semibold">Full Name</p>
                <p className="capitalize font-medium">{userDetails && userDetails.firstName} {userDetails && userDetails.lastName}</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <p className="text-sm md:text-base xl:text-lg font-semibold">Email</p>
                <p className="capitalize font-medium">{userDetails && userDetails.email}</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <p className="text-sm md:text-base xl:text-lg font-semibold">Country</p>
                <p className="capitalize font-medium">{userDetails && userDetails.issuedCountry}</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <p className="text-sm md:text-base xl:text-lg font-semibold">Mobile Number</p>
                <p className="capitalize font-medium">{userDetails && userDetails.mobileNumber}</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
                <p className="text-sm md:text-base xl:text-lg font-semibold">Mnemonic Phrase</p>
                <div className="border border-slate-300 rounded-lg p-2 break-normal">
                    <p className="capitalize font-medium">{userDetails && userDetails.memonicPhrase}</p>
                </div>
            </div>
        </main>
     );
}
 
export default ProfileInformation;