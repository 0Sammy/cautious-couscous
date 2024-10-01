"use client";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  role: "admin"
};

const LoginForm = () => {
  const router = useRouter();
  //Loading state for the form
  const [loading, setLoading] = useState<boolean>(false);
  const [seen, setSeen] = useState<boolean>(false);
  const handleSeePassword = () => {
    setSeen((prev) => !prev);
  };
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

    try {
      const callback = await signIn("credentials", {
        ...state,
        redirect: false,
      });

      if (callback?.ok && !callback?.error) {
        setLoading(false);
        toast.success("Welcome");
        handleFormReset();
        router.push("/admin/dashboard");
      } else if (callback?.error) {
        setLoading(false);
        handleFormReset();
        toast.error("Wrong Email or Password");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      handleFormReset();
      toast.error("An error occurred during sign-in");
    }
  };
  return (
    <main className="text-textPrimary">
      <div>
        <p className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Operations Login
        </p>
        <p className="font-semibold mt-2">Welcome back</p>
      </div>
      <div className="mt-14">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-y-1">
            <label className="cursor-pointer" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" value={state.email}
              className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
              placeholder="example@gmail.com"
              onChange={handleChange} />
          </div>
          <div className="relative flex flex-col gap-y-1 mt-6">
            <label className="cursor-pointer" htmlFor="phoneNumber">
              Password
            </label>
            <input type={seen ? "text" : "password"} name="password" id="password" value={state.password}
              className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
              placeholder="xxxxxxxxxxxxx"
              onChange={handleChange} />
            <div className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl" onClick={handleSeePassword} >
              {seen ? <EyeSlash size="18" /> : <Eye size="18" />}
            </div>
          </div>
          <Button type="submit" text="Sign In" loading={loading} />
        </form>
      </div>
    </main>
  );
};

export default LoginForm;
