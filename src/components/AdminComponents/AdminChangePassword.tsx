"use client"
import { FormEvent, useState, useEffect } from "react";
import { toast } from "sonner";
import { makeApiRequest } from "@/lib/apiUtils";
import { useSession } from "next-auth/react";

//Import Needed Components
import Button from "../molecules/Button";

//Import Needed Icons
import { Eye, EyeSlash } from 'iconsax-react';

const AdminChangePassword = () => {
    //Admin Email 
    const [adminEmail, setAdminEmail] = useState<string | any>("")
    const { data: session, status } = useSession()
    useEffect(() => {
        if (status === "authenticated") {
            setAdminEmail(session?.user?.email)
        } 
    },[session?.user?.email, status])
   

     //For the password
    const [seen, setSeen] = useState<boolean>(false);
    //The function
    const handleSeePassword = () => {
        setSeen((prev) => !prev);
    };
    const [loading, setLoading] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")

    //OnSubmit Function
    const onSubmit = (event: FormEvent) => {

        event.preventDefault();
        setLoading(true)

        const formData = {newPassword: password, email: adminEmail, role: "admin"}
        //console.log({formData})
        makeApiRequest("/passwordUpdate", "post", formData, {
            onSuccess: () => {
              // Handle success
              setLoading(false);
              setPassword("")
              toast.success("Password updated successfully");
            },
            onError: (error: any) => {
              // Handle error
              setLoading(false);
              setPassword("")
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, Kindly enter all the necessary fields.");
              }
              toast.error("Unable to update password now, please try again later.");
            },
          });

    }
    return ( 
        <main className="mt-8 border border-[#EEEEEE] px-2 md:px-4 py-6 rounded-xl text-xs md:text-sm xl:text-base">
            <p className="text-white font-bold">
                Change your password
            </p> 
            <form className="mt-10" onSubmit={onSubmit}>
                <div className="relative flex flex-col gap-y-1 mt-4">
                    <label htmlFor="currency"  className="text-sm lg:text-base cursor-pointer">
                      Enter Your New Password
                    </label>
                    <input
                      value={password}
                      onChange={(e: any) => setPassword(e.target.value)}
                      required
                      placeholder="XXXXXXXXXXXXX"
                      type={seen ? "text" : "password"}
                      name="password"
                      id="password"
                      className="text-black border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
                    />
                    <div className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl text-black" onClick={handleSeePassword} >
                        {seen ? <EyeSlash size="18" /> : <Eye size="18" />}
                    </div>
                </div>
                    <Button type="submit" loading={loading} text="Update Password"/>
            </form>
        </main>
     );
}
 
export default AdminChangePassword;