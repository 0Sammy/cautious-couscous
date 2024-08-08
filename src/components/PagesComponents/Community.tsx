import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import community from "../../../public/Images/community.png";
import community1 from "../../../public/Images/community1.png";
import community2 from "../../../public/Images/community2.png";
import community3 from "../../../public/Images/community3.png";

const Community = () => {
    return ( 
        <main className="mt-24">
            <div>
                <h3 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl max-w-[28ch]">Enjoy a Web3 experience powered by community</h3>
                <p className="text-sm md:text-base xl:text-lg text-[#242426] max-w-[50ch] mt-4 md:mt-5">Join our vibrant and diverse community to learn about the power of self-custody, crypto, and Web3.</p>
                <div className="mt-9 md:mt-12">
                    <ul className="flex items-stretch gap-6 overflow-auto">
                        <li className="min-w-[150px] md:min-w-[375px] lg:min-w-[unset] lg:flex-1 flex flex-col gap-y-5">
                            <Image src={community} alt="Image" className="rounded-[20px] md:rounded-[30px] w-full object-cover h-[253px] md:h-[506px]"/>
                            <div>
                              <strong className="text-[#242426] text-base md:text-xl xl:text-xl font-semibold">Juan</strong>  
                              <p className="text-xs md:text-sm xl:text-base text-[#242426] mt-2">The easiest way to understand DeFi is to get your hands dirty. The Wealth Assets dApp Browser helped me to use protocols with small amounts and learn what works and what doesn&apos;t work.</p>
                            </div>
                        </li>
                        <li className="min-w-[150px] md:min-w-[375px] lg:min-w-[unset] lg:flex-1 flex flex-col gap-y-5">
                            <div className="relative">
                               <Image src={community1} alt="Image" className="rounded-[20px] md:rounded-[30px] w-full object-cover h-[253px] md:h-[506px]"/> 
                               <div className="bg-inkBlue bg-opacity-35 absolute top-0 left-0 h-full w-full rounded-[20px] md:rounded-[30px] z-[1]"></div>
                            </div>
                            
                            <div>
                              <strong className="text-[#242426] text-base md:text-xl xl:text-xl font-semibold">Jen</strong>  
                              <p className="text-xs md:text-sm xl:text-base text-[#242426] mt-2">Secure your private keys like your life depends on it. #DoNotShare 🔑</p>
                            </div>
                        </li>
                        <li className="min-w-[150px] md:min-w-[375px] lg:min-w-[unset] lg:flex-1 flex flex-col gap-y-5">
                            <Image src={community2} alt="Image" className="rounded-[20px] md:rounded-[30px] w-full object-cover h-[253px] md:h-[506px]"/>
                            <div>
                              <strong className="text-[#242426] text-base md:text-xl xl:text-xl font-semibold">Harry</strong>  
                              <p className="text-xs md:text-sm xl:text-base text-[#242426] mt-2">As a newcomer in this field, the introduction of blockchain technology has had a profound and transformative impact on my life. It has opened up an entirely new realm of possibilities that I am eager to explore.</p>
                            </div>
                        </li>
                        <li className="min-w-[150px] md:min-w-[375px] lg:min-w-[unset] lg:flex-1 flex flex-col gap-y-5">
                            <div className="relative">
                               <Image src={community3} alt="Image" className="rounded-[20px] md:rounded-[30px] w-full object-cover h-[253px] md:h-[506px]"/> 
                               <div className="bg-inkBlue bg-opacity-35 absolute top-0 left-0 h-full w-full rounded-[20px] md:rounded-[30px] z-[1]"></div>
                            </div>
                            
                            <div>
                              <strong className="text-[#242426] text-base md:text-xl xl:text-xl font-semibold">Esmart</strong>  
                              <p className="text-xs md:text-sm xl:text-base text-[#242426] mt-2">I thoroughly enjoy engaging with DeFi and have developed a passion for minting NFTs. However, I always make it a point to conduct my own research and consistently check the Wealth Assets Security Scanner prior to any acquisition. By following these Web3 security practices, I ensure my safety and stay #SAFU. 🛡️</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link href="/create" className="bg-inkBlue text-white hover:bg-green-400 hover:text-black font-medium duration-300 px-8 py-[1.125rem] md:py-3 md:px-10 flex items-center justify-center gap-3 rounded-full text-center mt-2 w-fit">Join our community</Link>
            </div>
        </main>
     );
}
 
export default Community;