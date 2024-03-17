"use client"
import { FormEvent, useEffect, useState } from "react";
import { useForgotPasswordStore } from "@/store/forgotPassword";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { permanentRedirect } from "next/navigation";
import { useRouter } from "next/navigation";

//Import Needed Components
import InputPassword from "@/components/molecules/InputPassword";
import Button from "@/components/molecules/Button";

const Page = () => {
    const router = useRouter()

    //Zustand State Management
    const { email } = useForgotPasswordStore()

    const [enteredPassword, setEnteredPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    //Use Effect for checking if an email exists
    useEffect(() => {
        if(!email){
            permanentRedirect("/forgotPassword")
        }
    },[email])

    //OnSubmit function
    const onSubmit = (event:FormEvent) => {
        setLoading(true)
        event.preventDefault()

        const formData = {email, newPassword: enteredPassword};
        const emailData = {  to: email,  subject: "Password Changed",  emailType: "passwordChanged" }; 

        makeApiRequest("/changePassword", "post", formData, {
            onSuccess: () => {
              // Handle success
              setEnteredPassword("")
              toast.success("Your password was reset successfully");

              makeApiRequest("/send-email", "post", emailData, {
                onSuccess: () => {
                  // Handle success
                  toast.success("Email was sent")
                  console.log("Email was sent")
               },
                onError: (error: any) => {
                  // Handle error
                  console.error(error.message);
                },
              })

              setLoading(false)
              router.push("/login")
           },
            onError: (error: any) => {
              // Handle error
              setEnteredPassword("")
              toast.error("Unable to update password now, please try again later.");
              router.push("/forgotPassword")
            },
          })
        }
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0 text-xs sm:text-sm xl:text-base">
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white p-4 md:p-8 rounded-md">
                <div className="text-[#161618] mt-10">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Recovery Mode</p>
                    <p className="text-xs sm:text-sm xl:text-base font-semibold mt-2">Set New Password</p>
                </div>
                <form className="mt-10" onSubmit={onSubmit}>
                    <InputPassword value={enteredPassword} onChange={(e) => { setEnteredPassword(e.target.value)}} />
                    <div className="mt-6">
                        <Button text="Save New Password" type="submit" loading={loading} />
                    </div>
                </form>
            </div>
        </main>
     );
}
 
export default Page;