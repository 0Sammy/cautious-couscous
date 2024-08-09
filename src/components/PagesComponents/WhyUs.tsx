import Image from "next/image";

//Import Needed Icons
import { Headphone, Monitor, PresentionChart, SecuritySafe } from "iconsax-react";

//Import Needed Images
import img from "../../../public/Images/heroSectionImg.png";



const WhyUs = () => {
    return (
        <main className="py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10">
            <h1 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl my-4">Why Us?</h1>
            <section className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between mt-4">
                <div className="w-full md:w-[48%] xl:w-[45%] flex flex-col gap-y-3">
                    <div className="mt-4 flex flex-col gap-y-5">
                        <div className="flex gap-x-3">
                            <SecuritySafe size="24" className="text-inkBlue shrink-0" variant="Bold" />
                            <div className="flex flex-col gap-3">
                                <h3 className="text-base md:text-lg xl:text-xl font-semibold">Unmatched Security</h3>
                                <p className="text-black/80">Your investments are protected with top-tier encryption and security protocols.</p>
                            </div>
                        </div>
                        <div className="flex gap-x-3">
                            <PresentionChart size="24" className="text-inkBlue shrink-0" variant="Bold" />
                            <div className="flex flex-col gap-y-3">
                                <h3 className="text-base md:text-lg xl:text-xl font-semibold">Consistent Profitability</h3>
                                <p className="text-black/80">Enjoy steady returns, even in volatile markets, with our expert-driven strategies.</p>
                            </div>
                        </div>
                        <div className="flex gap-x-3">
                            <Monitor size="24" className="text-inkBlue shrink-0" variant="Bold" />
                            <div className="flex flex-col gap-y-3">
                                <h3 className="text-base md:text-lg xl:text-xl font-semibold">User-Friendly Experience</h3>
                                <p className="text-black/80">Navigate the crypto world easily with our intuitive and accessible platform.</p>
                            </div>
                        </div>
                        <div className="flex gap-x-3">
                            <Headphone size="24" className="text-inkBlue shrink-0" variant="Bold" />
                            <div className="flex flex-col gap-3">
                                <h3 className="text-base md:text-lg xl:text-xl font-semibold">Dedicated Support</h3>
                                <p className="text-black/80">Our 24/7 expert team is always here to assist you at every step.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[48%] xl:w-[45%]">
                    <Image src={img} alt="Image" />
                </div>
            </section>
        </main>

    );
}

export default WhyUs;