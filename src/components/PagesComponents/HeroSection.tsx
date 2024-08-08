import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import bgImg from "../../../public/Images/bg.jpg";

//Import Needed Icons
import { TickSquare } from "iconsax-react";

//Import Needed Components
import CryptoWidget from "./PriceMarquee";


const HeroSection = () => {

    return (
        <main className="relative h-[50rem] sm:h-[52rem] md:h-[54rem] lg:h-[56rem] xl:h-[58rem] 2xl:h-[60rem]">
            <Image
                src={bgImg}
                alt={`Hero Section`}
                className={`h-full w-full object-cover object-center`}
            />
            <section className="absolute h-full w-full top-0 left-0 bg-black/80">
                <div className="h-full w-full flex flex-col justify-center text-white py-6 px-5 sm:px-10 md:px-20 xl:px-32">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold tracking-tight">Wealth Assets Wallet</h1>
                    <p className="max-w-[80ch] mt-4 text-white/70 text-sm md:text-base xl:text-lg">Wealth assets is an emerging platform in the realm of cryptocurrency trading and mining, offering the opportunity to enhance your investments swiftly. Wealthassets stands out by providing secure and profitable investment options, irrespective of the prevailing market conditions.</p>
                    <div className="flex flex-col gap-y-3 mt-10">
                        <p className="flex items-center gap-x-1"><TickSquare size="24" color="#0500FF" variant="Bold" /><span>Secure & Seamless Trading</span></p>
                        <p className="flex items-center gap-x-1"><TickSquare size="24" color="#0500FF" variant="Bold" /><span>Profitable Mining Opportunities</span></p>
                        <p className="flex items-center gap-x-1"><TickSquare size="24" color="#0500FF" variant="Bold" /><span>24/7 Expert Support</span></p>
                    </div>
                    <div className="mt-14 flex gap-x-5">
                        <Link href="/create" className="rounded-[2rem] w-52 text-center bg-inkBlue px-6 py-3 hover:bg-transparent border border-inkBlue duration-300">Get Started</Link>
                        <Link href="/login" className="rounded-[2rem] w-52 text-center border border-inkBlue px-6 py-3 hover:bg-inkBlue duration-300">Continue</Link>
                    </div>
                </div>
            </section>
            <CryptoWidget />
        </main>

    );
}

export default HeroSection;