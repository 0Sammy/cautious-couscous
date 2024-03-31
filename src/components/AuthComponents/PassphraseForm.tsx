"use client"
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { makeApiRequest } from '@/lib/apiUtils';


//Import Needed Components
import Button from '../molecules/Button';



const PassPhraseForm = ({users}: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false)
  const [inputs, setInputs] = useState<string[]>(Array(12).fill(''));

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  //OnSubmit Function
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true)
    //console.log({users})
    //Get the time of login
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

    const combinedValue = inputs.join(' ').toLowerCase();

    const checkPassphrase = (passphrase: any) => {
      for (const user of users) {
        // Check if the user has a memonicPhrase and if it matches the passphrase
        if (user.memonicPhrase && user.memonicPhrase.toLowerCase() === passphrase) {
          // Return the user object if the passphrase matches
          return user;
        }
      }
      // If no user with the given passphrase is found, return null
      return null;
    };
    const matchedUser = checkPassphrase(combinedValue)
    //console.log({matchedUser})
      // Check if the user has a mnemonicPhrase and if it matches the passphrase
      if (matchedUser) {
        const loginData = {email: matchedUser.email, password: matchedUser.passwordString, role: "user"}
        const emailData = {to: matchedUser.email, subject: "Login Notification", emailType:"login", currentTime: formattedDateTime}
        //console.log({emailData})
        try {
          const callback = await signIn("credentials", {
            ...loginData,
            redirect: false,
          });
    
          if (callback?.ok && !callback?.error) {
            setLoading(false);
            toast.success("Welcome");
            makeApiRequest("/send-email", "post", emailData, {
              onSuccess: () => {
                // Handle success
                console.log("Notification email was sent.");
              },
              onError: (error: any) => {
                // Handle error
                console.log(error)
              },
            });
            router.push("/user/dashboard");
            
          } else if (callback?.error) {
            setLoading(false);
            toast.error("Wrong Email or Password");
          }
        } catch (error) {
          console.error(error);
          setLoading(false);
          toast.error("An error occurred during sign-in");
        }
      }else{
        toast.error("User Does Not Exist, Kindly Check The Entered Mnemonic Phrase")
        setLoading(false)
      }
  };

  return (
    <main className='text-xs md:text-sm xl:text-base'>
        <form className='mt-10' onSubmit={onSubmit}>
            <div className='flex flex-col gap-y-1'>
                <label>Enter Your Passphrase:</label>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2'>
                    {Array.from({ length: 12 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        value={inputs[index]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
                      />
                    ))}
                </div>
            </div>
            <Button type='submit' text='Login' loading={loading}/>
        </form>
      
    </main>
  );
};

export default PassPhraseForm;
