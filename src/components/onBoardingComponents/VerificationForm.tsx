"use client"
import { useEffect } from "react";
import Image from "next/image";
import { makeApiRequest } from "@/lib/apiUtils";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useOtpStore } from "@/store/verification";

import { useOnboardingStore } from "@/store/onboardingDetails";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";

//Import Needed Components
import SendVerificationEmail from "../molecules/SendVerificationEmail";
import Button from "../molecules/Button";
import Input from "../molecules/Input";

const VerificationForm = () => {

   //Zustand Email Management
  const {email} = useOnboardingStore()
  
  //Zustand OTP Management
  const { otpNumber } = useOtpStore();

  const router = useRouter();

  //For the loading state
  const [loading, setLoading] = useState<boolean>(false);
  const [enteredOtp, setEnteredOtp] = useState<string>();

  console.log(`The otp number ${otpNumber}`)

    //OnSubmit Function
  const onSubmit = (event: FormEvent) => {

    event.preventDefault();
    setLoading(true);
    
    //Check if the otp entered is the same with what was sent
    if (otpNumber.toString() === enteredOtp) {

      const formData = { email: email };
      //console.log({formData})
      
      makeApiRequest("/verifyUser", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false);
          toast.success("Verification was successful");
          router.push(`/onboarding/mnemonic?email=${email}`);
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false);
          toast.error("Verification failed, try again later.");
          router.refresh();
        },
      });
    } else {
        setLoading(false)
      toast.error("Wrong OTP");
    }
  };

    return ( 
        <main>
            <div className="flex gap-x-1 items-center">
                <Image src={logo} alt="Wealth Assets Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                    <p>Wealth</p>
                    <p className="-mt-1">Assets</p>
                </div>
            </div>
            <div className="text-[#161618] mt-10 mb-4">
                <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                  Setting up your account
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-semibold mt-4">
                  Welcome, let&apos;s get started
                </p>
            </div>
            <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">Verification</p>
            <p className="font-medium text-xs sm:text-sm xl:text-base mt-4">
              You will receive an e-mail OTP. Input OTP to open up your account.
            </p>
            <SendVerificationEmail />
            
            <form onSubmit={onSubmit}>

                <Input type="text" label="OTP" value={enteredOtp} pattern="\d{4}" id="otp" placeholder="Enter the OTP" onChange={(e) => { setEnteredOtp(e.target.value) }}/>
                <Button type="submit" loading={loading} text="Continue"/>

            </form>
            
        </main>
     );
}
 
export default VerificationForm;