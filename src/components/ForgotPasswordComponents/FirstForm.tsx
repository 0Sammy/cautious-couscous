"use client"
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { useOtpStore } from "@/store/verification";
import { makeApiRequest } from "@/lib/apiUtils";
import { generateOTPNumber } from "@/lib/generateRandom4Digits";
import { useForgotPasswordStore } from "@/store/forgotPassword";

//Import Needed Components
import Input from "../molecules/Input";
import Button from "../molecules/Button";
import SecondForm from "./SecondForm";


const FirstForm = ({emails}: any) => {

    // Zustand State Management
    const { updateOtpNumber } = useOtpStore()
    const { updateEmail } = useForgotPasswordStore()

    const [showSecondForm, setShowSecondForm] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [enteredEmail, setEnteredEmail] = useState<string>("")

    //Check user email and send a verification email
    const onSubmit = (event:FormEvent) => {
        setLoading(true)
        event.preventDefault()

        if (emails.includes(enteredEmail.toLowerCase())) {

            toast.info("A one-time verification code has been sent to your email for security purposes. Please check your inbox and enter the code.")

            const otp = generateOTPNumber();
            updateOtpNumber(otp);
            updateEmail(enteredEmail)

            const formData = {
                to: enteredEmail,
                subject: "Reset Your Password",
                otp: otp,
                emailType: "forgotPasswordVerification",
              };
              
            makeApiRequest("/send-email", "post", formData, {
                onSuccess: () => {
                  // Handle success
                  toast.success("Verification code was sent successfully");
                  setLoading(false)
                  setShowSecondForm(true)
               },
                onError: (error: any) => {
                  // Handle error
                  toast.error(error.message);
                },
              })
            }else {
                toast.error("The email address you entered does not match any existing account in our records.")
                setLoading(false)
            }
    }

    return (
        <>
            {showSecondForm && <SecondForm />}
            {!showSecondForm && 
            <>
            <main className="text-xs sm:text-sm xl:text-base">
                <form className="mt-10" onSubmit={onSubmit}>
                    <Input type="email" label="Enter Your Email" id="email" placeholder="Enter Your Email Address" value={enteredEmail} onChange={(e) => { setEnteredEmail(e.target.value)}} />
                    <div className="mt-6">
                        <Button text="Continue" type="submit" loading={loading} />
                    </div>
                </form>
            </main>
            </>}
        </>
     );
}
 
export default FirstForm;