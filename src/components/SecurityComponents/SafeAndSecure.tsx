import Image from "next/image";

//Import Needed Images
import connect from "../../../public/Images/connect.jpg"; 
import nft from "../../../public/Images/nft.jpg"; 
import phrase from "../../../public/Images/phrase.jpg"; 
import protect from "../../../public/Images/protect.jpg"; 

const SafeAndSecure = () => {
    return ( 
        <main className="mt-24 text-[#242426]">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl max-w-[25ch]">Your entire Web3 journey, made safe and secure</h3>
            <div className="flex gap-x-5 justify-between special overflow-x-auto mt-10">
                <div className="w-[23%] min-w-[16rem] p-10 border border-[#DBDCE5] mb-4 rounded-[20px] md:rounded-[30px] h-[32rem] relative">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Protect your crypto with proactive security warnings</p>
                    <Image src={protect} alt="Image" loading="lazy" className="mt-10 absolute bottom-10 w-40 mx-auto"/>
                </div>
                <div className="w-[23%] min-w-[16rem] p-10 border border-[#DBDCE5] mb-4 rounded-[20px] md:rounded-[30px] h-[32rem] relative">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Safeguard your assets with Encrypted Cloud Backups</p>
                    <Image src={phrase} alt="Image" loading="lazy" className="mt-10 absolute bottom-10 w-40 mx-auto"/>
                </div>
                <div className="w-[23%] min-w-[16rem] p-10 border border-[#DBDCE5] mb-4 rounded-[20px] md:rounded-[30px] h-[32rem] relative">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Connect a hardware wallet to add another layer of security</p>
                    <Image src={connect} alt="Image" loading="lazy" className="mt-10 absolute bottom-10 w-40 mx-auto"/>
                </div>
                <div className="w-[23%] min-w-[16rem] p-10 border border-[#DBDCE5] mb-4 rounded-[20px] md:rounded-[30px] h-[32rem] relative">
                    <p className="font-semibold text-lg md:text-xl xl:text-2xl">Hide & report unsafe NFTs</p>
                    <Image src={nft} alt="Image" loading="lazy" className="mt-10 absolute bottom-10 w-40 mx-auto"/>
                </div>
            </div>
        </main>
     );
}
 
export default SafeAndSecure;