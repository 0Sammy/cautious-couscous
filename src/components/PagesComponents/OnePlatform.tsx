import { SearchNormal } from "iconsax-react";

const OnePlatform = () => {
    return ( 
        <main className="py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px] mt-20 gradientLightBlueToBlue">
            <div className="text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold">One Platform, Millions of Assets</h1>
                <p className="text-sm md:text-base xl:text-lg mt-4 lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto">As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains. From Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.</p>
            </div>
            <div className="text-[#242426] relative mt-10">
                <SearchNormal size="20" className="absolute top-5 left-8"/> 
                <input type="text" className="h-[60px] rounded-full px-16 w-full" placeholder="Search a chain..." />
            </div>
            
        </main>
     );
}
 
export default OnePlatform;