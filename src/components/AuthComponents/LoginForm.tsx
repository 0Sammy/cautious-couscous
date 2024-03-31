"use client";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";


//Import Needed Icons
import { Eye, EyeSlash } from 'iconsax-react';

//Import Needed Components
import Button from "../molecules/Button";


type InitialStateProps = {
  email: string;
  password: string;
  role: string;
};
const initialState: InitialStateProps = {
  email: "",
  password: "",
  role: "user"
};

const LoginForm = () => {
  const router = useRouter();
  //Loading state for the form
  const [loading, setLoading] = useState<boolean>(false);
  const [seen, setSeen] = useState<boolean>(false);
  const handleSeePassword = () => {
    setSeen((prev) => !prev);
  };
  const [tryForgotten, setTryForgotten] = useState<boolean>(false)
  const [state, setState] = useState(initialState);
  //Function for the State Changing
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  //Function for the Form Reset
  const handleFormReset = () => {
    setState(initialState);
  };
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

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

    const emailData = {to: state.email, subject: "Login Notification", emailType:"login", currentTime: formattedDateTime}
    try {
      const callback = await signIn("credentials", {
        ...state,
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
        handleFormReset();
        router.push("/user/dashboard");
        
      } else if (callback?.error) {
        setLoading(false);
        handleFormReset();
        toast.error("Wrong Email or Password");
        setTryForgotten(true)
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      handleFormReset();
      toast.error("An error occurred during sign-in");
      setTryForgotten(true)
    }
  };

  return (
    <main className="mt-12 text-xs md:text-sm xl:text-base text-[#161618]">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-1">
          <label className="cursor-pointer" htmlFor="email">
            Email
          </label>
          <input
            value={state.email}
            type="email"
            name="email"
            id="email"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="relative flex flex-col gap-y-1 mt-6">
          <label className="cursor-pointer" htmlFor="phoneNumber">
            Password
          </label>
          <input
            type={seen ? "text" : "password"}
            value={state.password}
            name="password"
            id="password"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
            placeholder="xxxxxxxxxxxxx"
            onChange={handleChange}
          />
          <div
            className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl"
            onClick={handleSeePassword}
          >
            {seen ? <EyeSlash size="18" /> : <Eye size="18" />}
          </div>
        </div>
        <p className="mt-4">
          First time using Wealth Assets?
          <span className="text-primary hover:underline duration-500">
            <Link href="/create"> Sign up</Link>
          </span>
        </p>
        <p className="mt-4">
          Want to login using your Mnemonic Phrase?
          <span className="text-primary hover:underline duration-500">
            <Link href="/passphrase-login"> Login Here</Link>
          </span>
        </p>
        {tryForgotten && 
        <p className="mt-4">
          <span className="text-primary hover:underline duration-500">
            <Link href="/forgotPassword"> Forgot Password?</Link>
          </span>
        </p>
        }
        
        <Button type="submit" text="Login" loading={loading} />
      </form>
    </main>
  );
};

export default LoginForm;
