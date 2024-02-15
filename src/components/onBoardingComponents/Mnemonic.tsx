"use client"
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { generateRandomWords } from "@/lib/generateMemonic";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";

//Import Needed Icons
import { Copy, CopySuccess } from "iconsax-react";

//Import Needed Components
import Button from "../molecules/Button";
import { makeApiRequest } from "@/lib/apiUtils";


const Mnemonic = () => {
    const [userEmail, setUserEmail] = useState<string | any>("")
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
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

    //State for the phrase
    const [phrase, setPhrase] = useState<string>("")
    //State for the copied text
    const [isCopied, setIsCopied] = useState<boolean>(false)
    //Copy function
    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(phrase);
          setIsCopied(true);
          toast.success("Mnemonic Phrase copied to clipboard.")
        } catch (err) {
          console.error('Unable to copy text', err);
          toast.error("Unable to copy Mnemonic phrase, try again later.")
        }
      };
    //Use Effect for the phrase
    useEffect(() => {

        const userPhrase = generateRandomWords()
        setPhrase(userPhrase.toString())
        //console.log(userPhrase)

    },[])
    //OnSubmit Function
  const onSubmit = (event: FormEvent) => {

    event.preventDefault();
    setLoading(true);
    const formData = { email: userEmail, memonicPhrase: phrase }

    makeApiRequest("/addPhrase", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false);
          toast.success("Mnemonic phrase was added successful");
          router.push(`/onboarding/kyc?email=${userEmail}`);
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false);
          toast.error("Failed to add mnemonic phrase, please try again later.");
          router.refresh();
        },
      });

  }
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
            <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">Mnemonic Phrase</p>
            <p className="font-medium  mt-4">
              Your Mnemonic Phrase.
            </p>
            <div className="text-sm md:text-base xl:text-lg p-4 border border-[#7676801F] rounded-lg mt-10">
                <p>{phrase.toLowerCase()}</p>
            </div>
            <p className="text-xs xl:text-sm text-red-600 my-4">Please copy and securely save your mnemonic phrase in a private location accessible only to you.</p>
            <div className="flex justify-end mt-4">
                <button onClick={handleCopyClick} className="flex gap-x-1 items-center text-primary">Copy {isCopied ? <CopySuccess size={18} className="text-green-600 text-opacity-50"/> : <Copy size={18}/>}</button>
            </div>
            <form className="mt-4" onSubmit={onSubmit}>
                <Button type="submit" text="Continue" loading={loading}/>
            </form>
        </main>
     );
}
 
export default Mnemonic;