//Import Needed Icons
import { Star1 } from "iconsax-react";

const Summary = () => {
    return ( 
        <main className="mt-20">
            <div className="flex flex-wrap gap-10 justify-center lg:justify-between">
                <div className="w-[22%] min-w-[12rem] text-2xl font-semibold text-center">
                    <p>Trusted by</p>
                    <p><span className="text-inkBlue">70M+ </span>people</p>
                </div>
                <div className="w-[22%] min-w-[12rem] text-2xl font-semibold text-center">
                    <p>Founded in</p>
                    <p className="text-inkBlue">2017</p>
                </div>
                <div className="w-[22%] min-w-[12rem] text-2xl font-semibold text-center">
                    <p>Independently</p>
                    <p className="text-inkBlue">Audited</p>
                </div>
                <div className="w-[22%] min-w-[12rem] text-2xl font-semibold text-center">
                    <p>Top reviews</p>
                    <div className="flex justify-center">
                        <Star1 size="24" variant="Bold" className="text-inkBlue"/>
                        <Star1 size="24" variant="Bold" className="text-inkBlue"/>
                        <Star1 size="24" variant="Bold" className="text-inkBlue"/>
                        <Star1 size="24" variant="Bold" className="text-inkBlue"/>
                        <Star1 size="24" variant="Bold" className="text-inkBlue"/>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Summary;