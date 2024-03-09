"use client"
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useKycStore } from "@/store/kyc";
import { makeApiRequest } from "@/lib/apiUtils";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";

//Import Needed Components
import Button from "../molecules/Button";
import Input from "../molecules/Input";
import IdSelect from "../molecules/IdSelect";
import ImageUpload from "../molecules/ImageUpload";

const KYCForm = () => {
  const [userEmail, setUserEmail] = useState<string | any>("")
    const [loading, setLoading] = useState<boolean>(false); 
    const {idType, idNumber, dateOfExpiry, idCardBackImgSrc, idCardFrontImgSrc, updateIdNumber, updateDateOfExpiry, updateIdCardBackImgSrc, updateIdCardFrontImgSrc, reset} = useKycStore()
    const router = useRouter();
    const { data: session, status } = useSession()
    //Get the email using search Params
    const searchParams = useSearchParams();

    useEffect(() => {

        if (searchParams.has("email")){
          
          const gottenUserEmail = searchParams.get('email')
          setUserEmail(gottenUserEmail)
        
        } else {
      
          if (status === "authenticated") {
            
            setUserEmail(session?.user?.email)
            
          }
      
        }
      
      }, [searchParams, session?.user?.email, status])

      //OnSubmit Function
  const onSubmit = (event: FormEvent) => {

    event.preventDefault();
    setLoading(true);
    const formData = { email: userEmail, idType, idNumber, dateOfExpiry, idCardBackImgSrc, idCardFrontImgSrc}
    //console.log({formData})
    makeApiRequest("/kyc", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false);
          reset()
          toast.success("Your KYC Information is was submitted successfully.");
          router.push(`/onboarding/transaction?email=${userEmail}`);
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false);
          reset()
          toast.error("Unable to accept KYC information now, try again later.");
          router.refresh();
        },
      });

  }

    return ( 
        <main className="text-xs sm:text-sm xl:text-base">
            <div className="flex gap-x-1 items-center">
                <Image src={logo} alt="Wealth Assets Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                <div className="text-[#1C1F33] font-semibold ">
                    <p>Wealth</p>
                    <p className="-mt-1">Assets</p>
                </div>
            </div>
            <div className="text-[#161618] mt-10 mb-4">
                <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                  Setting up your account
                </p>
                <p className=" font-semibold mt-4">
                  Welcome, let&apos;s get started
                </p>
            </div>
            <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">KYC</p>
            <p className="font-medium mt-2">
                Ensure the details provided precisely match the information contained in your official verification document.
            </p>
            <form className="mt-6" onSubmit={onSubmit}>
                <label className="text-xs sm:text-sm xl:text-base cursor-pointer" htmlFor="idSelect">Select ID Type</label>
                <IdSelect />
                <div className="flex flex-col gap-y-2 mt-3">
                    <Input type="text" placeholder="Enter your ID Number" label="ID Number" id="idNumber" value={idNumber} onChange={(e) => { updateIdNumber(e.target.value) }} />
                    <div className="flex flex-col gap-y-1">
                        <label className="text-xs sm:text-sm xl:text-base cursor-pointer" htmlFor="expiry">Date of Expiry</label>
                        <input type="date" name="expiry" id="expiry" value={dateOfExpiry} className="w-full border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none" onChange={(e: any) => updateDateOfExpiry(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-row gap-x-2 mt-4 justify-between">
                <div className="w-[49%]">
                  <ImageUpload
                    value={idCardFrontImgSrc}
                    onChange={(value) => updateIdCardFrontImgSrc(value)}
                    text="Upload ID Front"
                  />
                </div>
                <div className="w-[49%]">
                  <ImageUpload
                    value={idCardBackImgSrc}
                    onChange={(value) => updateIdCardBackImgSrc(value)}
                    text="Upload ID Back"
                  />
                </div>
              </div>
              <Button type="submit" text="Continue" loading={loading}/>
            </form> 
        </main>
     );
}
 
export default KYCForm;