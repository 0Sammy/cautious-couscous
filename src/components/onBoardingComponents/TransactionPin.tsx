"use client";
import { FormEvent, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

//Import Needed Components
import Button from "../molecules/Button";
import Input from "../molecules/Input";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";


const TransactionPin = () => {
   const [pin, setPin] = useState<string>("")
  const [userEmail, setUserEmail] = useState<string | any>("")
  const router = useRouter();
  //For the loading state
  const [loading, setLoading] = useState<boolean>(false);
  const { data: session, status } = useSession()
  //Get the email using search Params
  const searchParams = useSearchParams();

  useEffect(() => {

    if (searchParams.has("email")){
      
      const gottenUserEmail = searchParams.get('email')
      setUserEmail(gottenUserEmail)
    
    } else {
  
      if (status === "authenticated") {
        
        setUserEmail(session?.user?.email)
        
      }
  
    }
  
  }, [searchParams, session?.user?.email, status])

  //OnSubmit Function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const formData = { email: userEmail, transactionPin : pin };

    makeApiRequest("/addTransactionsPin", "post", formData, {
      onSuccess: () => {
        // Handle success
        setLoading(false);
        toast.success("Transaction pin was added successful");
        router.push(`/user/dashboard`);
      },
      onError: (error: any) => {
        // Handle error
        setLoading(false);
        toast.error("Failed to add transaction pin, please try again later.");
        router.refresh();
      },
    });
  };

    return ( 
        <main className="text-xs sm:text-sm xl:text-base">
            <div className="flex gap-x-1 items-center">
                <Image src={logo} alt="Wealth Assets Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                <div className="text-[#1C1F33] font-semibold ">
                    <p>Wealth</p>
                    <p className="-mt-1">Assets</p>
                </div>
            </div>
            <div className="text-[#161618] mt-10 mb-4">
                <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
                  Setting up your account
                </p>
                <p className=" font-semibold mt-4">
                  Welcome, let&apos;s get started
                </p>
            </div>
            <div>
                <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">
                  Transaction Pin
                </p>
                <p className="font-medium text-xs sm:text-sm xl:text-base mt-4">
                  Finish setting up your account, by entering your four(4) digit pin
                </p>
            </div>
            <form onSubmit={onSubmit} className="mt-10">
                <Input type="text" value={pin} id="transactionPin" placeholder="Enter Your Transaction Pin" title="Please enter exactly 4 digits" label="Transaction Pin" onChange={(e) => { setPin(e.target.value) }} pattern="\d{4}"/>
                <Button type="submit" text="Continue" loading={loading}/>
            </form>
        </main>
     );
}
 
export default TransactionPin;