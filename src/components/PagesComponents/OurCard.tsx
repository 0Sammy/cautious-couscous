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
                    <p className="first-letter:text-inkBlue first-letter:text-2xl md:first-letter:text-3xl xl:first-letter:text-4xl first-letter:font-bold">Integrating high-quality trading cards into your business processes can significantly enhance your organization&apos;s financial health.</p>
                    <p>These cards are perfect for making online transactions, paying bills, and handling tax obligations. They simplify your financial transactions, increase available cash flow, offer options for short-term credit, include insurance protection, assist in monitoring expenditures, and provide benefits. Opting for the Wealth Assets Mastercard within the Wealth Assets card suite is a beneficial choice for all members.</p>
                </div>
            </section>
        </main>

    );
}

export default OurCard;