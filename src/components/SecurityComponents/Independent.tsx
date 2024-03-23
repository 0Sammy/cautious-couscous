import Image from "next/image";

//Import Needed Images
import certik from "../../../public/Images/certik.svg";
import cure from "../../../public/Images/cure.svg";
import halborn from "../../../public/Images/halborn.svg";
import kudelski from "../../../public/Images/kudelski.svg";


const Independent = () => {
    return ( 
        <main className="border border-[#DBDCE5] bg-[#F4F4F7] mt-24 text-[#242426] py-10 px-4 sm:px-6 md:px-8 xl:px-10 rounded-[20px] md:rounded-[30px]">
            <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl text-center">Independently audited by industry leaders</h3>
            <div className="flex gap-x-10 flex-wrap justify-center mt-10">
                <Image src={certik} alt="Auditors" className="size-40"/>
                <Image src={cure} alt="Auditors" className="size-40"/>
                <Image src={halborn} alt="Auditors" className="size-40"/>
                <Image src={kudelski} alt="Auditors" className="size-40"/>
            </div>
        </main>
     );
}
 
export default Independent;