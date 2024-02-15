"use client"
import { useEffect } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { useSearchParams } from 'next/navigation'
import { useOtpStore } from "@/store/verification";
import { useOnboardingStore } from "@/store/onboardingDetails";
import { useSession } from "next-auth/react";

const SendVerificationEmail = () => {
const { data: session, status } = useSession()
const {updateName, updateEmail, name, email} = useOnboardingStore()

//Zustand OTP Management
const { otpNumber } = useOtpStore()
const searchParams = useSearchParams()

//Use useEffect for the function to run immediately the component mounts
useEffect(() => {

  if (searchParams.has("email") && searchParams.has("name")){

    const userEmail = searchParams.get('email')
    const fullName = searchParams.get('name')
    updateEmail(userEmail)
    updateName(fullName)
  
  } else {

    if (status === "authenticated") {

      updateEmail(session.user?.email)
      updateName(session.user?.name)
      
    }

  }

}, [searchParams, session?.user?.email, session?.user?.name, status, updateEmail, updateName]);




const sendVerificationNumber = () => {
    const formData = {
      to: email,
      subject: "Your Verification Code",
      name: name,
      otp: otpNumber,
      emailType:"verification",
    };
  
    toast.info("Sending verification code");

    //console.log({formData})
    
    makeApiRequest("/send-email", "post", formData, {
      onSuccess: () => {
        // Handle success
        toast.success("Verification code was sent successfully");
      },
      onError: (error: any) => {
        // Handle error
        toast.error(error.message);
      },
    });
  };

  return (
    <main className="text-green-600 text-xs sm:text-sm xl:text-base my-4 cursor-pointer font-medium">
      <p onClick={sendVerificationNumber}>Get Verification Pin</p>
    </main>
  );
};

export default SendVerificationEmail;
