import Image from "next/image";
import { StaticImageData } from "next/image";

//Import Needed Icons
import { QuoteUp } from "iconsax-react";


type TestimonyCardProps = {
    name: string;
    company?: string;
    statement: string;
    ImageUrl: StaticImageData;
}

const TestimonyCard = ({ name, company, statement, ImageUrl }: TestimonyCardProps) => {
    return (
        <main className="bg-white rounded-2xl my-10 w-[16rem] sm:w-80 p-4 md:p-6 xl:p-8 ">
            <QuoteUp size="32" className="text-yellow-500" variant="Bold" />
            <p className="mt-8 text-wrap">
                {statement}
            </p>
            <div className="w-40 h-2 rounded-xl bg-yellow-500 my-4"></div>
            <div className="flex items-center mt-4">
                <Image className="w-20" src={ImageUrl} alt="Client's Image" />
                <div className="ml-6">
                    <h4 className="font-bold">
                        {name}
                    </h4>
                    <p>{company}</p>
                </div>
            </div>
        </main>
    );
};

export default TestimonyCard;