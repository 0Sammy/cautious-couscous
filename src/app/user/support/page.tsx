"use client"
import { useState } from "react";
//Import Needed Component
import Loading from "../loading";


const Page = () => {
    //Frame Loading State
    const [isIframeLoading, setIsIframeLoading] = useState<boolean>(true);
    //Off Frame Loading Function
    const handleIframeLoad = () => {
      setIsIframeLoading(false);
    };
    return ( 
        <main className="text-xs md:text-sm xl:text-base p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto h-[40rem]">
            {isIframeLoading && <Loading />}
            <iframe
                  src="https://tawk.to/chat/6600c951a0c6737bd1243d1e/1hpph4pt9"
                  width="100%"
                  height="100%"
                  onLoad={handleIframeLoad}
                ></iframe>
            </div>
        </main>
     );
}
 
export default Page;
