import { FormEvent, useState } from "react";
import { useOtpStore } from "@/store/verification";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


//Import Needed Components
import Input from "../molecules/Input";
import Button from "../molecules/Button";


const SecondForm = () => {
    const router = useRouter()
    // Zustand OTP Management
    const { otpNumber } = useOtpStore()

    const [enteredNumber, setEnteredNumber] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)


    //Check user email and send a verification email
    const onSubmit = (event:FormEvent) => {
        event.preventDefault()
        setLoading(true)
        
        if(enteredNumber === otpNumber.toString()){
            setLoading(false)
            router.push("/passwordReset")
            
        }else{
            setLoading(false)
            toast.error("Incorrect Verification Number")
            router.refresh()
        }
    }

    return ( 
        <main className="text-xs sm:text-sm xl:text-base">
            <form className="mt-10" onSubmit={onSubmit}>
                <Input type="text" label="Verification Number" pattern="\d{4}" id="verificationNumber" placeholder="Enter Your Email Address Verification Code" title="Kindly enter a 4 digit verification code" value={enteredNumber} onChange={(e) => { setEnteredNumber(e.target.value)}} />
                <div className="mt-6">
                    <Button text="Continue" type="submit" loading={loading} />
                </div>
            </form>
        </main>
     );
}
 
export default SecondForm;