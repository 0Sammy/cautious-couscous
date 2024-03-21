import Image from "next/image";

//Import Needed Images
import bnb from "../../../public/Images/bnbAvif.svg";
import btc from "../../../public/Images/btcAvif.svg";
import cosmos from "../../../public/Images/cosmosAvif.svg";
import eth from "../../../public/Images/ethAvif.svg";
import polkadot from "../../../public/Images/polkadotAvif.svg";

//Import Needed Components
import { CloseCircle, SearchNormal, TickCircle } from "iconsax-react";

const OnePlatform = () => {
    return ( 
        <main className="py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px] mt-20 gradientLightBlueToBlue text-xs md:text-sm xl:text-base z-20 relative">
            <div className="text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold">One Platform, Millions of Assets</h1>
                <p className="text-sm md:text-base xl:text-lg mt-4 lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto">As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.</p>
            </div>
            <div className="text-[#242426] relative mt-10">
                <SearchNormal size="20" className="absolute top-5 left-8"/> 
                <input type="text" className="h-[60px] rounded-full px-16 w-full" placeholder="Search a chain..." />
            </div>
            <div className="rounded-[20px] bg-white md:rounded-[30px] mt-5 px-6 py-6 md:py-12">
                <div className="mb-7 hidden max-w-[850px] items-center md:flex text-black/70">
                    <p>Chain</p>
                    <div className="ml-auto flex w-[55%] items-center justify-between">
                        <p>Buy</p>
                        <p>Sell</p>
                        <p>Swap</p>
                        <p>Earn</p>
                        <p>dApps</p>
                    </div>
                </div>
                <div>
                    <ul className="grid h-full min-h-[1px] max-w-[850px] gap-6">
                        <li className="flex flex-col md:flex-row md:items-center">
                            <div className="flex items-center gap-5">
                                <Image src={bnb} alt="bnb logo" className="rounded-[50%]" loading="lazy" height="45" width="45"/>
                                <span>BNB Smart Chain (BNB)</span>
                            </div>
                            <div className="ml-auto hidden w-[55%] items-center justify-between md:flex text-inkBlue">
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                            </div>
                            <div className="ml-[65px] grid gap-3 md:hidden text-black/70 text-sm md:text-base xl:text-lg">
                                <div className="flex items-center justify-between">
                                    <p>Buy</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Sell</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Swap</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Earn</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>dApps</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col md:flex-row md:items-center">
                            <div className="flex items-center gap-5">
                                <Image src={btc} alt="btc logo" className="rounded-[50%]" loading="lazy" height="45" width="45"/>
                                <span>Bitcoin (BTC)</span>
                            </div>
                            <div className="ml-auto hidden w-[55%] items-center justify-between md:flex text-inkBlue">
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <CloseCircle size="24" className="text-black/70"/>
                                <CloseCircle size="24" className="text-black/70"/>
                            </div>
                            <div className="ml-[65px] grid gap-3 md:hidden text-black/70 text-sm md:text-base xl:text-lg">
                                <div className="flex items-center justify-between">
                                    <p>Buy</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Sell</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Swap</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Earn</p>
                                    <CloseCircle size="24" className="text-black/70"/>  
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>dApps</p>
                                    <CloseCircle size="24" className="text-black/70"/> 
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col md:flex-row md:items-center">
                            <div className="flex items-center gap-5">
                                <Image src={cosmos} alt="cosmos logo" className="rounded-[50%]" loading="lazy" height="45" width="45"/>
                                <span>Cosmos (ATOM)</span>
                            </div>
                            <div className="ml-auto hidden w-[55%] items-center justify-between md:flex text-inkBlue">
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <CloseCircle size="24" className="text-black/70"/>
                            </div>
                            <div className="ml-[65px] grid gap-3 md:hidden text-black/70 text-sm md:text-base xl:text-lg">
                                <div className="flex items-center justify-between">
                                    <p>Buy</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Sell</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Swap</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Earn</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>  
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>dApps</p>
                                    <CloseCircle size="24" className="text-black/70"/> 
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col md:flex-row md:items-center">
                            <div className="flex items-center gap-5">
                                <Image src={eth} alt="ethereum logo" className="rounded-[50%]" loading="lazy" height="45" width="45"/>
                                <span>Ethereum (ETH)</span>
                            </div>
                            <div className="ml-auto hidden w-[55%] items-center justify-between md:flex text-inkBlue">
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                            </div>
                            <div className="ml-[65px] grid gap-3 md:hidden text-black/70 text-sm md:text-base xl:text-lg">
                                <div className="flex items-center justify-between">
                                    <p>Buy</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Sell</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Swap</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Earn</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>  
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>dApps</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/> 
                                </div>
                            </div>
                        </li>
                        <li className="flex flex-col md:flex-row md:items-center">
                            <div className="flex items-center gap-5">
                                <Image src={polkadot} alt="polkadot logo" className="rounded-[50%]" loading="lazy" height="45" width="45"/>
                                <span>Polkadot (DOT)</span>
                            </div>
                            <div className="ml-auto hidden w-[55%] items-center justify-between md:flex text-inkBlue">
                                <TickCircle size="24" variant="Bold"/>
                                <TickCircle size="24" variant="Bold"/>
                                <CloseCircle size="24" className="text-black/70"/>
                                <TickCircle size="24" variant="Bold"/>
                                <CloseCircle size="24" className="text-black/70"/>
                            </div>
                            <div className="ml-[65px] grid gap-3 md:hidden text-black/70 text-sm md:text-base xl:text-lg">
                                <div className="flex items-center justify-between">
                                    <p>Buy</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Sell</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Swap</p>
                                    <CloseCircle size="24" className="text-black/70"/>   
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>Earn</p>
                                    <TickCircle size="24" variant="Bold" className="text-inkBlue"/>  
                                </div>
                                <div className="flex items-center justify-between">
                                    <p>dApps</p>
                                    <CloseCircle size="24" className="text-black/70"/> 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-20 md:justify-between text-white">
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">10M+ Assets</h3>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">600M+ NFTs</h3>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold">100+ Blockchains</h3>
            </div>
        </main>
     );
}
 
export default OnePlatform;