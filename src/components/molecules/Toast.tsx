import Image from "next/image"
//Import Needed Images
import correctIcon from "../../../public/Images/correctGreen.svg";
import { AddCircle } from "iconsax-react";

type toastProps = {
    message?: string,
    icon?: string,
    altText?: string,
    messageTitle?: string,
    hideModal?: () => void
}

const Toast = ({message, icon, altText, messageTitle, hideModal}: toastProps) => {
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[15rem] bg-white p-4 md:p-8 rounded-md flex flex-col items-center justify-center text-center">
                <AddCircle size="20" className="absolute top-4 right-4 text-wrongRed cursor-pointer rotate-45" onClick={hideModal}/>
                <Image src={icon ?? correctIcon} alt={altText ?? "An Icon"}/>
                <p className="text-secondary text-xl md:text-2xl font-semibold mt-4">{messageTitle}</p>
                <p className="text-[#8E8E93] text-sm md:text-base font-medium">{message}</p>
            </div>
        </main>
     );
}
 
export default Toast;