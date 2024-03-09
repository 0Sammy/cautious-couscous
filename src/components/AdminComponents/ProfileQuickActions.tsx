"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";


//Import Needed Components
import DeleteButton from "./DeleteButton";
import SuspendButton from "./SuspendButton";
import Button from "../molecules/Button";



type profileActionsProps = {
    email: string
    isSuspended: boolean
    name: string
}
const ProfileQuickActions = ({email, isSuspended, name}: profileActionsProps) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [newMessage, setNewMessage] = useState<string>("")

    //OnSubmit Function
    const onSubmit = (event: FormEvent) => {

        event.preventDefault();
        setLoading(true);
        const formData = {email, currentUpdate: newMessage}
        console.log({formData})

        makeApiRequest("/adminEditMessage", "post", formData, {
      
            onSuccess: () => {
                // Handle success
                setLoading(false);
                toast.success("New transfer message updated successfully.")
                setNewMessage("")
            },
            onError: (error: any) => {
                // Handle error
                setLoading(false);
                toast.error("Unable to update message. Please try again later.");
                setNewMessage("")
              },
            })
        }
        
    return ( 
        <main className="border border-[#7676801F] rounded-xl w-full  px-4 md:px-6 xl:px-8 py-4 mt-8 text-xs md:text-sm xl:text-base">
            <p className="font-semibold text-[#141619] my-4">Quick Actions</p>
            <div className="flex justify-between">
               <SuspendButton userEmail={email} userSuspended={isSuspended} name={name} />
                <DeleteButton userEmail={email}/> 
            </div>
            <div className="mt-6">
                <form onSubmit={onSubmit}> 
                    <div className="flex flex-col gap-y-1">
                       <label htmlFor="message" className="font-semibold text-[#141619]">Update Deposit Message</label>
                        <textarea value={newMessage} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.target.value)} name="message" id="message" placeholder={`Update ${name}'s transfer message`} className="capitalize resize-none h-24 border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"></textarea>  
                    </div>   
                    
                    <div className="mt-6">
                        <Button text={`Update Message`} type="submit" loading={loading}/>
                    </div>
                </form>
            </div>
        </main>
     );
}
 
export default ProfileQuickActions;