"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { makeApiRequest } from "@/lib/apiUtils";
import { useRouter } from "next/navigation";
import Toast from "../molecules/Toast";

//Import Needed Icons
import { Eye, EyeSlash } from 'iconsax-react';

//Import Needed Components
import { errorModalProps, successModalProps } from "@/lib/modalPropsMessages";
import Button from "../molecules/Button";

type InitialStateProps = {
    email: string;
    password: string;
    role?: string;
};

const initialState: InitialStateProps = {
    email: "",
    password: "",
}

const CreateForm = () => {
const [message, setMessage] = useState<string>("")
//State for the inputs
const [state, setState] = useState(initialState);
//State for the modals
const [showModal, setShowModal] = useState<boolean>(false)
const [modalProps, setModalProps] = useState<object>({})
//For the loading state
const [loading, setLoading] = useState<boolean>(false)
//For the search params
const searchParams = useSearchParams()
const chosenRole = searchParams.get('role')
//For the password
const [seen, setSeen] = useState<boolean>(false)
//For the router
const router = useRouter();

//Function for the eye icon
const handleSeePassword = () => {
    setSeen ((prev) => !prev)
}
//Function for the State Changing
const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
};
//Function for the Form Reset
const handleFormReset = () => {
    setState(initialState);
};

//Display the correct function
const handleSuccess = () => {
    setShowModal(true);
    setModalProps(successModalProps);
};
  
const handleError = () => {
    setShowModal(true);
    setModalProps(errorModalProps);
};
const handleFinal = () => {
    setShowModal(false)
}
//On submit function
const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    let formData = {...state}

    if (chosenRole) {
        formData = { ...state, role: chosenRole };
    }
    makeApiRequest("/createAdmin", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false)
          setMessage("Admin account was created successfully.")
          handleSuccess()
          handleFormReset()
          router.push("/admin/dashboard");
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false)
          setMessage("Couldn't create account, try again later.")
          handleError()
          handleFormReset()
          router.refresh()
        },
      });
}
    return ( 
        <>
        {showModal && <Toast {...modalProps} hideModal={handleFinal} message={message}/>}
        <main className="text-textPrimary">
            <div>
                 <p className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    Operations Account Setup
                </p>
                <p className="font-semibold mt-2">Welcome, let&apos;s get started</p>
            </div>
        <div className="mt-14">
            <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-y-1">
                    <label className="cursor-pointer" htmlFor="email">Email</label>
                    <input value={state.email} onChange={handleChange} type="email" name="email" id="email" className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="example@gmail.com"/>
                </div>
                <div className="relative flex flex-col gap-y-1 mt-6">
                    <label className="cursor-pointer" htmlFor="phoneNumber">Password</label>
                    <input value={state.password} onChange={handleChange} type={seen ? "text" : "password"} name="password" id="password" className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="xxxxxxxxxxxxx"/>
                    <div className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl" onClick={handleSeePassword}>{seen ? <EyeSlash size="18" /> : <Eye size="18" />}</div>
                </div>
                <Button type="submit" text="Create Account" loading={loading} />
            </form> 
        </div>
    </main></>
     );
}
 
export default CreateForm;