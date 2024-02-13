"use client";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useCreateUserStore } from "@/store/userAccountCreation";

//Import Needed Components
import Input from "../molecules/Input";
import InputPassword from "../molecules/InputPassword";
import CountrySelect from "./CountrySelect";
import Checkbox from "../molecules/Checkbox";
import Button from "../molecules/Button";

const CreateForm = () => {
    const {firstName, lastName, email, password, mobileNumber, country, customUserId, updateFirstName, updateLastName, updateEmail, updatePassword, updateMobileNumber, updateCustomUserId } = useCreateUserStore()
    //Checkbox state
    const [agreed, setAgreed] = useState<boolean>(false);
    //The function
    const handleAgreeChange = (checked: boolean) => {
        setAgreed(checked);
    };

    //On submit function
  const onSubmit = (event: FormEvent) => {

  }

    return ( 
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
              <Button type="submit" text="Sign up" loading={false}/>
            </form>
        </main>
     );
}
 
export default CreateForm;