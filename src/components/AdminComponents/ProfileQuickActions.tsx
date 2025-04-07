"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

//Actions
import updateLimit from "@/actions/serverActions/updateLimit";

//Import Needed Components
import DeleteButton from "./DeleteButton";
import SuspendButton from "./SuspendButton";
import Button from "../molecules/Button";
import Input from "../molecules/Input";



type profileActionsProps = {
    email: string
    isSuspended: boolean
    name: string
    userId: string
}
const ProfileQuickActions = ({ email, isSuspended, name, userId }: profileActionsProps) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [newMessage, setNewMessage] = useState<string>("");
    const [limit, setLimit] = useState<number>(0);

    //Update Limit
    const handleLimit = async () => {

        toast.loading(`Updating ${name} withdrawal limit`, { id: "limit" });
        const { success, message } = await updateLimit(userId, limit);

        toast.dismiss("limit");
        setLimit(0);
        if (!success) {
            toast.error(message);
            return
        }

        return toast.success(message);
    }

    //OnSubmit Function
    const onSubmit = (event: FormEvent) => {

        event.preventDefault();
        setLoading(true);
        const formData = { email, currentUpdate: newMessage }

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
        <main className="mt-8 px-4 md:px-6 xl:px-8 py-4 border border-[#7676801F] rounded-xl w-full">
            <p className="my-4 font-semibold text-[#141619]">Quick Actions</p>
            <div className="flex justify-between">
                <SuspendButton userEmail={email} userSuspended={isSuspended} name={name} />
                <DeleteButton userEmail={email} id={userId} />
            </div>
            <div className="mt-6">
                <Input type="number" placeholder="Enter the user's new limit" label="Update Limit" id="limit" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} widthClass="text-[#141619]" />
                <Button text={`Update Limit`} type="button" loading={loading} onClick={handleLimit} />
            </div>
            <div className="mt-6">
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="message" className="font-semibold text-[#141619]">Update Deposit Message</label>
                        <textarea value={newMessage} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewMessage(e.target.value)} name="message" id="message" placeholder={`Update ${name}'s transfer message`} className="px-2 xl:px-4 py-3 border border-[#E6E7E8] focus:border-primary rounded-md focus:outline-none h-24 capitalize resize-none"></textarea>
                    </div>

                    <div className="mt-6">
                        <Button text={`Update Message`} type="submit" loading={loading} />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default ProfileQuickActions;