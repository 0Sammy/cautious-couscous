"use client"
import { useState } from "react";

//Import Needed Icons
import { Eye, EyeSlash } from 'iconsax-react';

type passwordProps = {
    value: string,
    onChange?: () => void,

}
const InputPassword = ({value, onChange}: passwordProps) => {
    //For the password
  const [seen, setSeen] = useState<boolean>(false);
  //The function
  const handleSeePassword = () => {
    setSeen((prev) => !prev);
  };

    return ( 
        <main>
            <div className="relative flex flex-col gap-y-1">
                <label className="cursor-pointer" htmlFor="password">
                  Password
                </label>
                <input
                  type={seen ? "text" : "password"}
                  name="password"
                  id="password"
                  //value={value}
                  className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
                  placeholder="XXXXXXXXXX"
                  onChange={(e: any) => onChange}
                />
                <div
                  className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl"
                  onClick={handleSeePassword}
                >
                  {seen ? <EyeSlash size="18" /> : <Eye size="18" />}
                </div>
              </div>
        </main>
     );
}
 
export default InputPassword;