import Link from "next/link";

//Import Needed Icons
import { EmojiSad } from "iconsax-react";


const NotFound = () => {
    return (
        <main className="h-screen w-screen bg-[#f0f0f0] p-8 flex flex-col items-center justify-center text-center">
            <EmojiSad variant="Bold" size="60" className="text-red-800" />
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-8">Page is not found</h1>
            <div className="mt-8 text-sm md:text-base xl:text-lg font-medium">
                <p>The page you are looking for doesn&apos;t exist or an error was encountered.</p>
                <p className="mt-2">Kindly go <Link href="/" className="text-primary">HOME.</Link></p>
            </div>
        </main>
    );
}

export default NotFound;