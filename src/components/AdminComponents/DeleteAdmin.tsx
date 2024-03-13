"use client"
import { FormEvent, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";


//Import Needed Icons
import { Trash } from "iconsax-react";

const DeleteAdmin = ({adminId}: string | any) => {

    //OnSubmit Function
    const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    toast.info("Deleting Admin")

    const formData = { id: adminId };
    //console.log({formData})
  
    makeApiRequest("/modifyAdmin", "post", formData, {
  
        onSuccess: () => {
            toast.success("Admin Deleted successfully")
            window.location.reload()
        },
  
        onError: (error: any) => {
            toast.error("Unable to delete admin now, please try again later.")
            window.location.reload()
        }
  
    })
  }

    return ( 
        <main>
            <Trash size="24" className="cursor-pointer text-red-500" onClick={onSubmit}/>
        </main>
     );
}
 
export default DeleteAdmin;