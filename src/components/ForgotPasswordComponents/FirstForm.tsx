"use client"
import { useState } from "react";
import { toast } from "sonner";
import { useOtpStore } from "@/store/verification";


//Import Needed Components
import Input from "../molecules/Input";
import Button from "../molecules/Button";
import { makeApiRequest } from "@/lib/apiUtils";



const FirstForm = ({emails}: any) => {

    // Zustand OTP Management
    const { otpNumber } = useOtpStore()

    const [loading, setLoading] = useState<boolean>(false)
    const [enteredEmail, setEnteredEmail] = useState<string>("")

    //Check user email
    const onSubmit = () => {
        setLoading(true)
        if (emails.includes(enteredEmail.toLowerCase())) {
            toast.info("A verification number was sent to your email, kindly check your email, and enter the number below.")

            const formData = {
                to: enteredEmail,
                subject: "Your Verification Code",
                otp: otpNumber,
                emailType: "verification",
              };
              
            makeApiRequest("/send-email", "post", formData, {
                onSuccess: () => {
                  // Handle success
                  toast.success("Verification code was sent successfully");
               },
                onError: (error: any) => {
                  // Handle error
                  toast.error(error.message);
                },
              })
            }else {
                toast.error("The email address you entered does not match any existing account in our records")
            }
    }

    return ( 
        <main className="text-xs sm:text-sm xl:text-base">
            <form className="mt-10" onSubmit={onSubmit}>
                <Input type="email" label="Enter Your Email" id="email" placeholder="Enter Your Email Address" value={enteredEmail} onChange={(e) => { setEnteredEmail(e.target.value)}} />
                <div className="mt-6">
                    <Button text="Recover Password" type="submit" loading={loading} />
                </div>
            </form>
            
        </main>
     );
}
 
export default FirstForm;