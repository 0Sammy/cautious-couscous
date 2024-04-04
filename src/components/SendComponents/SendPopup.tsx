"use client"
import Link from "next/link";
import { useWalletStore } from "@/store/wallets";
import { CloseCircle, Information } from "iconsax-react";


//Import Needed Icons

const SendPopup = ({ message }: string | any) => {

    const { depositMessage } = useWalletStore();

    return (
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[100] top-0 left-0 text-xs md:text-sm xl:text-base">
            <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg">
                <Link href="/user/overview" className="absolute top-4 right-4 text-wrongRed cursor-pointer">
                    <CloseCircle size="20"/>
                </Link>
                {
                  message && <p className="my-6 leading-loose">{message}</p>
                }
                {
                  depositMessage && <p className="my-6 leading-loose">{depositMessage}</p>
                }
                {!message && !depositMessage &&
                    <p className="text-sm md:text-base xl:text-lg font-semibold">
                        We have successfully received your withdrawal request and it is now in the pending stage. <br /> <br /> For confirmation of your withdrawal, we kindly ask that you reach out to our company support team.   
                    </p>
                }
                
            </div>
        </main>
    );
}

export default SendPopup;