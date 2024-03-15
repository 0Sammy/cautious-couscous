"use client"
import { useEffect, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { useSearchParams } from 'next/navigation'
import { useOtpStore } from "@/store/verification";
import { useOnboardingStore } from "@/store/onboardingDetails";
import { useSession } from "next-auth/react";
import { generateOTPNumber } from "@/lib/generateRandom4Digits";


const SendVerificationEmail = () => {
  const { data: session, status } = useSession()
  const { updateName, updateEmail, name, email } = useOnboardingStore()

  // Zustand OTP Management
  const { otpNumber, updateOtpNumber } = useOtpStore()
  const searchParams = useSearchParams()

  // State to track whether the button is disabled
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Use useEffect for the function to run immediately when the component mounts
  useEffect(() => {
    if (searchParams.has("email") && searchParams.has("name")) {
      const userEmail = searchParams.get('email')
      const fullName = searchParams.get('name')
      updateEmail(userEmail)
      updateName(fullName);
    } else {
      if (status === "authenticated") {
        updateEmail(session.user?.email)
        updateName(session.user?.name)
      }
    }
  }, [searchParams, session?.user?.email, session?.user?.name, status, updateEmail, updateName]);

  useEffect(() => {
    let countdownInterval: string | number | NodeJS.Timeout | undefined;

    if (isButtonDisabled) {
      const endTime = localStorage.getItem("endTime");

      if (endTime) {
        const timeRemaining = Math.max(0, Math.floor((parseInt(endTime, 10) - Date.now()) / 1000));

        if (timeRemaining > 0) {
          setCountdown(timeRemaining);

          // Update the countdown every second
          countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1));
          }, 1000);
        } else {
          // If the countdown is over, enable the button
          setIsButtonDisabled(false);
          setCountdown(0);
        }
      }
    }

    // Clear the interval when the component is unmounted or the countdown is over
    return () => clearInterval(countdownInterval);
  }, [isButtonDisabled]);

  //useEffect for the OTP number
  useEffect(() => {

    const otp = generateOTPNumber();
    updateOtpNumber(otp);

  },[])
  //console.log({otpNumber})
  //For the email to send immediately on load
  useEffect(() => {

    if (email && name && otpNumber !== 4442) {

        
        toast.info("Sending verification code");

          const formData = {
            to: email,
            subject: "Your Verification Code",
            name: name,
            otp: otpNumber,
            emailType: "verification",
          };

          console.log({formData})          
    
          makeApiRequest("/send-email", "post", formData, {
            onSuccess: () => {
              // Handle success
              toast.success("Verification code was sent successfully");
              setIsButtonDisabled(true);
    
              // Set a timestamp in localStorage to track the last request time
              const endTime = new Date().getTime() + 60000; // 60 seconds in milliseconds
              localStorage.setItem("endTime", endTime.toString());
    
              // Enable the button after 60 seconds (60000 milliseconds)
              setTimeout(() => {
                setIsButtonDisabled(false);
              }, 60000);
            },
            onError: (error: any) => {
              // Handle error
              toast.error(error.message);
            },
          });

    } else {
      toast.info("Preparing to send your verification number...")
    }
      
  },[email, name])

  const handleSendVerificationNumber  = () => {

    if (!isButtonDisabled) {

    toast.info("Sending verification code");

      const otp = generateOTPNumber();
      updateOtpNumber(otp);

      const formData = {
        to: email,
        subject: "Your Verification Code",
        name: name,
        otp: otp,
        emailType: "verification",
      };

      console.log({formData})

      makeApiRequest("/send-email", "post", formData, {
        onSuccess: () => {
          // Handle success
          toast.success("Verification code was sent successfully");
          setIsButtonDisabled(true);

          // Set a timestamp in localStorage to track the last request time
          const endTime = new Date().getTime() + 60000; // 60 seconds in milliseconds
          localStorage.setItem("endTime", endTime.toString());

          // Enable the button after 60 seconds (60000 milliseconds)
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 60000);
        },
        onError: (error: any) => {
          // Handle error
          toast.error(error.message);
        },
      });
    } else {
      toast.info(`Please wait for ${countdown} seconds before requesting another verification code`);
    }
  };

  return (
    <main className="text-green-600 text-xs sm:text-sm xl:text-base my-4 cursor-pointer font-medium">
      <p onClick={handleSendVerificationNumber} style={{ opacity: isButtonDisabled ? 0.5 : 1 }}>
        {isButtonDisabled ? `Get Verification Pin (${countdown}s)` : "Get Verification Pin"}
      </p>
    </main>
  );
};

export default SendVerificationEmail;
