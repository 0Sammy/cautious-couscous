//Import Needed Actions
import getIndividualCard from "@/actions/getIndividualCard";

//Import Needed Utils
import { formatCardNumber, getExpiryTime } from "@/lib/generateCardNumber";
import { formatDate } from "@/lib/dateTimeUtils";


export const revalidate = 0;
const page = async ({ params }: { params: { id: string } }) => {

    const cardId = params.id;
    const currentCard = await getIndividualCard(cardId)

    if (!currentCard) {
        return (
            <main className="fixed inset-0 flex justify-center items-center p-4 text-[#020100]">
                <h1 className="font-semibold text-sm md:text-base xl:text-lg">Sorry, the card details couldn&apos;t fetched at this time, kindly try again later.</h1>
            </main>
        )
    }

    return (
        <main className="top-0 left-0 z-[700] fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
            <div className="flex flex-col gap-y-3 bg-white md:p-6 xl:p-8 px-2 sm:px-4 py-6 rounded-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] 2xl:w-[40%] xl:w-[50%]">
                <p className="font-semibold text-[#020100] text-base md:text-xl xl:text-2xl">
                    Card details
                </p>
                <div className="flex flex-col gap-y-2 mt-4">
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Status</p>
                        <p className={`${currentCard.status === "successful" ? "text-[#026C3C]" : currentCard.status === "failed" ? "text-red-600" : "text-[#DF930E]"} font-semibold capitalize`}>{currentCard.status}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Number</p>
                        <p className="font-semibold text-[#06121B] capitalize">{formatCardNumber(currentCard.cardNumber)}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card CVV</p>
                        <p className="font-semibold text-[#06121B] capitalize">{currentCard.cardCvv}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Expiry</p>
                        <p className="font-semibold text-[#06121B] capitalize">{getExpiryTime(currentCard.createdAt)}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Request Date</p>
                        <p className="font-semibold text-[#06121B] capitalize">{formatDate(currentCard.createdAt)}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Name</p>
                        <p className="font-semibold text-[#06121B] capitalize">{currentCard.user?.firstName} {currentCard.user?.lastName}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Email</p>
                        <p className="font-semibold text-[#06121B] first-letter:capitalize">{currentCard.user?.email}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s UserId</p>
                        <p className="font-semibold text-[#06121B] capitalize">{currentCard.user?.userId}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Mobile Number</p>
                        <p className="font-semibold text-[#06121B] capitalize">{currentCard.user?.mobileNumber}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Country</p>
                        <p className="font-semibold text-[#06121B] capitalize">{currentCard.user?.issuedCountry}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Password</p>
                        <p className="font-semibold text-[#06121B] capitalize">{currentCard.user?.passwordString}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default page;