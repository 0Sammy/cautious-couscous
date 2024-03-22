import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import cta from "../../../public/Images/cta.svg";

const CTA = () => {
    return ( 
        <main className=" mt-24 m-auto flex w-full flex-col-reverse justify-between rounded-[20px] bg-inkBlue px-5 py-10 md:flex-row md:items-center lg:rounded-[30px] lg:p-16 lg:px-[100px] gap-9 [&>div>p]:!max-w-[60ch]">
            <div className="text-white">
                <h2 className="font-semibold text-xl md:text-2xl xl:text-3xl">Building on Trust</h2>
                <p className="text-sm md:text-base xl:text-lg  mt-6 max-w-[35ch]">We know that working together as a community is better for everyone. Our platform enables blockchain developers to build their dApps and wallets natively and connect with millions of users, without having to worry about the low-level implementation details.</p>
                <div className="mt-6">
                <Link href="/create" className="bg-white text-inkBlue hover:bg-green-400 font-medium duration-300 px-8 py-[1.125rem] md:py-3 md:px-10 flex items-center justify-center gap-3 rounded-full text-center mt-2 w-fit">Check out our Developer Docs</Link>
                </div>
            </div>
            <Image src={cta} alt="Image" loading="lazy" className="h-auto w-[200px] md:w-[220px]"/>
        </main>
     );
}
 
export default CTA;