import Image from "next/image";

//Import Needed Images
import card from "../../../public/Images/frontCard.svg";


const OurCard = () => {
    return (
        <main className="py-10 md:py-20 px-4 sm:px-6 md:px-8 xl:px-10 mb-10">
            <h1 className="text-[#1B1B1C] font-semibold text-xl md:text-2xl xl:text-3xl my-4">Our Card</h1>
            <section className="flex flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:justify-between mt-10">
                <div className="w-full md:w-[48%] xl:w-[45%]">
                    <Image src={card} alt="Wealth Assets Card" />
                </div>
                <div className="w-full md:w-[48%] xl:w-[45%] flex flex-col gap-y-3">
                    <p className="first-letter:text-inkBlue first-letter:text-2xl md:first-letter:text-3xl xl:first-letter:text-4xl first-letter:font-bold">The best traders cards can turn your business&apos; finances around for the better.</p>
                    <p>They make paying for purchases easier, free up your cash flows, provide short-term financing, offer insurance coverage, help you track your expenses, and give you rewards. The Wealth Assets Vault card is rewarded to all members of the Wealth Assets card package.</p>
                </div>
            </section>
        </main>

    );
}

export default OurCard;