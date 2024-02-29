"use client"
import { useState } from "react";


//Import Needed Components


//Import Needed Icons
import { CloseSquare } from "iconsax-react";

type modalProps = {
    toggleFunction?: ()=> void
}


const SendingForm = ({toggleFunction}: modalProps) => {

    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[100] top-0 left-0 text-xs md:text-sm xl:text-base">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] bg-white p-4 md:p-8 rounded-lg">
                <CloseSquare size="24" className="text-red-600 cursor-pointer" onClick={toggleFunction}/>
            </div>
        </main>
     );
}
 
export default SendingForm;