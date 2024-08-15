import Image from "next/image";
import Link from "next/link";

//Import Needed Components
import CreateForm from "@/components/AuthComponents/CreateForm";

//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg";


const page = () => {
    return ( 
        <main className="h-screen lg:flex">
            <div className="flex h-full flex-col justify-center px-6 sm:px-8 md:px-10 lg:w-1/2 lg:px-12 xl:px-14 2xl:px-16">
                <Link href="/" className="flex gap-x-1 items-center">
                    <Image src={logo} alt="Wealth Assets Logo" priority={true} className="size-8 md:size-10 xl:size-12"/>
                    <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                        <p>Wealth</p>
                        <p className="-mt-1">Assets</p>
                    </div>
                </Link>
                <div className="text-[#161618] mt-10">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Set up your account</p>
                    <p className="text-xs sm:text-sm xl:text-base font-semibold mt-4">Welcome, let&apos;s get started</p>
                </div>
                <CreateForm />
            </div>
            <div className="createBackground hidden lg:block lg:w-1/2"></div>
        </main>
     );
}
 
export default page;