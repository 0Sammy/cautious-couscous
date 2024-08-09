import Image from "next/image";
import { StaticImageData } from "next/image";

//Import Needed Icons
import { QuoteUp } from "iconsax-react";


type TestimonyCardProps = {
    name: string;
    company: string;
    statement: string;
    ImageUrl: StaticImageData;
}

const TestimonyCard = ({ name, company, statement, ImageUrl }: TestimonyCardProps) => {
    return (
        <div className="bg-white py-10 md:px-10 ">
            <div className="size-80 rounded-2xl p-6">
                <QuoteUp size="32" className="rotate-180 text-yellow-500" variant="Bold" />
                <p className="mt-8">
                    {statement}
                </p>
                <div className="w-40 h-6 rounded-xl bg-yellow-500"></div>
                <div className="flex items-center mt-8">
                    <Image className="w-20" src={ImageUrl} alt="Client's Image" />
                    <div className="ml-6">
                        <h4 className="font-bold">
                            {name}
                        </h4>
                        <p>{company}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonyCard;