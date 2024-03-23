//Import Needed Icons
import { Android, Document, Lock, Warning2 } from "iconsax-react";

const FourCards = () => {
    return ( 
        <main className="mt-24 flex gap-5 flex-wrap justify-center text-[#242426]">
            <div className="h-[18rem] w-[30rem] border border-[#DBDCE5] p-10 flex flex-col gap-y-5 rounded-[30px]">
                <div className="flex gap-x-5 items-center">
                <Lock className="text-inkBlue" size={45} variant="Bold"/>
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Strong encryption</p>
                </div>
                <p className="text-sm md:text-base xl:text-lg">All our products have strong encryption as verified by multiple leading independent auditors.</p>
            </div>
            <div className="h-[18rem] w-[30rem] border border-[#DBDCE5] p-10 flex flex-col gap-y-5 rounded-[30px]">
                <div className="flex gap-x-5 items-center">
                <Document className="text-inkBlue" size={45} variant="Bold"/>
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Independent security audits</p>
                </div>
                <p className="text-sm md:text-base xl:text-lg">We regularly undergo audits by reputable third-party security auditing firms to identify and fix potential vulnerabilities – keeping your assets and data safe.</p>
            </div>
            <div className="h-[18rem] w-[30rem] border border-[#DBDCE5] p-10 flex flex-col gap-y-5 rounded-[30px]">
                <div className="flex gap-x-5 items-center">
                <Warning2 className="text-inkBlue" size={45} variant="Bold"/>
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Security monitoring</p>
                </div>
                <p className="text-sm md:text-base xl:text-lg">We proactively identify risks with ongoing security monitoring for our community&apos;s protection. In-app notifications keep you up to date.</p>
            </div>
            <div className="h-[18rem] w-[30rem] border border-[#DBDCE5] p-10 flex flex-col gap-y-5 rounded-[30px]">
                <div className="flex gap-x-5 items-center">
                <Android className="text-inkBlue" size={45} variant="Bold"/>
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Bug bounty</p>
                </div>
                <p className="text-sm md:text-base xl:text-lg">Bug bounties allow us to continually improve our products and stay ahead of threats in the crypto ecosystem.</p>
            </div>
        </main>
     );
}
 
export default FourCards;