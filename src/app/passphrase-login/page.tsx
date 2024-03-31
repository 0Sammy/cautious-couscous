import getUsers from "@/actions/getAllUsers";
import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";

//Import Needed Components
import Prices from "@/components/DashboardComponents/Prices";
import PassPhraseForm from "@/components/AuthComponents/PassphraseForm";

const page = async () => {

    const users = await getUsers()
    //console.log({userPassPhrases})

    return ( 
        <main className="createBackground h-screen flex items-center justify-center">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white shadow py-8 px-4 md:px-6 xl:px-8">
                <Link href="/" className="flex gap-x-1 items-center">
                    <Image src={logo} alt="Wealth Assets Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                    <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                        <p>Wealth</p>
                        <p className="-mt-1">Assets</p>
                    </div>
                </Link>
                <div className="text-[#161618] mt-10">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Sign In</p>
                    <p className="text-xs sm:text-sm xl:text-base font-semibold mt-2">Kindly sign-in with your Mnemonic Phrase</p>
                </div>
                <PassPhraseForm users={users}/>
            </div>
            <Prices />
        </main>
     );
}
 
export default page;