//Import Needed Icons
import { Star1 } from "iconsax-react";

const Summary = () => {
    return (
        <main className="mt-20 md:mt-32 mb-8 md:-mb-32">
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-4 gap-5 text-black/70">
                <div className="text-center">
                    <p className="text-lg md:text-xl xl:text-2xl text-inkBlue font-semibold">70M+</p>
                    <p>People Trusted</p>
                </div>
                <div className="text-center">
                    <p className="text-lg md:text-xl xl:text-2xl text-inkBlue font-semibold">2017</p>
                    <p>Was Founded</p>
                </div>
                <div className="text-center">
                    <p className="text-lg md:text-xl xl:text-2xl text-inkBlue font-semibold uppercase">Audited</p>
                    <p>Independently</p>
                </div>
                <div className="text-center">
                    <p className="flex items-center gap-x-1 justify-center"><span className="text-lg md:text-xl xl:text-2xl text-inkBlue font-semibold">5</span><Star1 size="20" variant="Bold" className="text-inkBlue" /></p>
                    <p>Millions of Reviews</p>
                </div>
            </div>
        </main>
    );
}

export default Summary;