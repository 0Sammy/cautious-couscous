"use client";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useCreateUserStore } from "@/store/userAccountCreation";
import { generateOTPNumber } from "@/lib/generateRandom4Digits";

//Import Needed Components
import Input from "../molecules/Input";
import InputPassword from "../molecules/InputPassword";
import CountrySelect from "./CountrySelect";
import Checkbox from "../molecules/Checkbox";
import Button from "../molecules/Button";
import Toast from "../molecules/Toast";
import { errorModalProps, successModalProps } from "@/lib/modalPropsMessages";
import { makeApiRequest } from "@/lib/apiUtils";
import { useRouter } from "next/navigation";

const CreateForm = () => {
    //For the router
  const router = useRouter();
    //State for the modals
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalProps, setModalProps] = useState<object>({})
  const [message, setMessage] = useState<string>("")
    const {firstName, lastName, email, password, mobileNumber, country, customUserId, updateFirstName, updateLastName, updateEmail, updatePassword, updateMobileNumber, updateCustomUserId } = useCreateUserStore()
    const [loading, setLoading] = useState<boolean>(false)
    //Checkbox state
    const [agreed, setAgreed] = useState<boolean>(false);
    //The function
    const handleAgreeChange = (checked: boolean) => {
        setAgreed(checked);
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
useEffect(() => {
    const number = generateOTPNumber
    const userId = number + "W"
    updateCustomUserId(userId)
},[updateCustomUserId])

    //On submit function
  const onSubmit = (event: FormEvent) => {

    event.preventDefault()
    setLoading(true)
    const transactions = {}

    const formData = {firstName, lastName, email, password, mobileNumber, country, customUserId, transactions}

    makeApiRequest("/create", "post", formData, {
        onSuccess: () => {
          // Handle success
          setLoading(false)
          setMessage("Your account was created successfully")
          handleSuccess()
          router.push(`/onboarding/verification?email=${email}&name=${firstName} ${lastName}`);
        },
        onError: (error: any) => {
          // Handle error
          setLoading(false)
          if (error.message === "Request failed with status code 409") {
            setMessage("Email already exists, kindly log in.")
            router.push("/login")
          }
          setMessage("Unable to create account currently. Please try again.")
          handleError()
          router.refresh() 
        },
      });
    
  }

    return ( 
        <>
        {showModal && <Toast {...modalProps} message= {message} hideModal={handleFinal}/>}
        <main className="mt-10 text-xs md:text-sm xl:text-base text-[#161618]">
            <form onSubmit={onSubmit} className="flex flex-col gap-y-3">
                <div className="flex justify-between">
                    <div className="w-[49%]">
                        <Input type="text" placeholder="Enter Your First Name" label="First Name" id="firstName" value={firstName} onChange={(e) => {updateFirstName(e.target.value)}}/>
                    </div>
                    <div className="w-[49%]">
                        <Input type="text" placeholder="Enter Your Last Name" label="Last Name" id="lastName" value={lastName} onChange={(e) => {updateLastName(e.target.value)}}/>
                    </div>
                </div>
                <Input type="email" placeholder="Enter Your Email" label="Email" id="email" value={email} onChange={(e) => {updateEmail(e.target.value)}}/>
                <InputPassword value={password} onChange={(e) => {updatePassword(e.target.value)}}/>
                <div className="flex flex-col gap-y-1">
                    <label className="cursor-pointer" htmlFor="country">
                      Country
                    </label>
                    <CountrySelect />
              </div>
              <Input type="tel" placeholder="Enter Your Mobile Number" label="Mobile Number" id="mobileNumber" value={mobileNumber} onChange={(e) => {updateMobileNumber(e.target.value)}}/>
              <Checkbox label="I agree to terms, privacy, and policy" checked={agreed} onChange={handleAgreeChange} />
              <Button type="submit" text="Sign up" loading={loading}/>
            </form>
        </main>
        </>
        
     );
}
 
export default CreateForm;