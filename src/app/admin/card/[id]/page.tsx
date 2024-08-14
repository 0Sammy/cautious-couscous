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
            <main className="fixed inset-0 flex items-center justify-center text-[#020100] p-4">
                <h1 className="text-sm md:text-base xl:text-lg font-semibold">Sorry, the card details couldn&apos;t fetched at this time, kindly try again later.</h1>
            </main>
        )
    }

    return (
        <main className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] px-2 sm:px-4 py-6 md:p-6 xl:p-8 bg-white flex flex-col gap-y-3 rounded-lg">
                <p className="text-base md:text-xl xl:text-2xl text-[#020100] font-semibold">
                    Card details
                </p>
                <div className="flex flex-col gap-y-2 mt-4">
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Status</p>
                        <p className={`${currentCard.status === "successful" ? "text-[#026C3C]" : currentCard.status === "failed" ? "text-red-600" : "text-[#DF930E]"} font-semibold capitalize`}>{currentCard.status}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Number</p>
                        <p className="text-[#06121B] font-semibold capitalize">{formatCardNumber(currentCard.cardNumber)}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card CVV</p>
                        <p className="text-[#06121B] font-semibold capitalize">{currentCard.cardCvv}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Expiry</p>
                        <p className="text-[#06121B] font-semibold capitalize">{getExpiryTime(currentCard.createdAt)}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">Card Request Date</p>
                        <p className="text-[#06121B] font-semibold capitalize">{formatDate(currentCard.createdAt)}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Name</p>
                        <p className="text-[#06121B] font-semibold capitalize">{currentCard.user?.firstName} {currentCard.user?.lastName}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Email</p>
                        <p className="text-[#06121B] font-semibold first-letter:capitalize">{currentCard.user?.email}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s UserId</p>
                        <p className="text-[#06121B] font-semibold capitalize">{currentCard.user?.userId}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Mobile Number</p>
                        <p className="text-[#06121B] font-semibold capitalize">{currentCard.user?.mobileNumber}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Country</p>
                        <p className="text-[#06121B] font-semibold capitalize">{currentCard.user?.issuedCountry}</p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">User&apos;s Password</p>
                        <p className="text-[#06121B] font-semibold capitalize">{currentCard.user?.passwordString}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default page;


// {
//     currentCard: {
//       id: '66bb2315576728a2edc06ef5',
//       status: 'failed',
//       userId: '66b9fa0a32c6d89397daac3e',
//       cardNumber: '2226636637997327',
//       cardCvv: '925',
//       createdAt: 2024-08-13T09:10:44.758Z,
//       updatedAt: 2024-08-13T10:26:07.831Z,
//       user: {
//         id: '66b9fa0a32c6d89397daac3e',
//         firstName: 'mathew',
//         lastName: 'vundla',
//         email: 'mathewvundla801@gmail.com',
//         isEmailVerified: true,
//         isSuspended: false,
//         hashedPassword: '$2b$12$GykO4ZqQeqDaN3txZMfwpeHVNTZrkHWqnSvjUyLbcKm9iRptfHnbi',
//         passwordString: '199700',
//         mobileNumber: '0738558679',
//         idType: 'National ID Card',
//         issuedCountry: 'South Africa',
//         idNumber: '911255813085',
//         dateOfExpiry: null,
//         idCardFrontImgSrc: 'https://res.cloudinary.com/dpmx02shl/image/upload/v1723464751/we
//   althAssests/ugf0htv7bdyx2p2iff0z.heic',
//         idCardBackImgSrc: 'https://res.cloudinary.com/dpmx02shl/image/upload/v1723464763/wea
//   lthAssests/q8f3cz0xfkl1p0ik8gwv.heic',
//         memonicPhrase: 'mountain Resplendent oblivion orange Tasty Quixotic nostalgia Incand
//   escent tiger paradox Bright Quotidian',
//         connectedWallet: 'Trust wallet ',
//         connectedWalletPhrase: 'Paying trust wallet ',
//         hasMemonicPhrase: true,
//         hasDoneKYC: true,
//         userId: '8080W',
//         depositMessage: '',
//         transactionPin: '1997',
//         hasTransactionPin: true,
//         createdAt: 2024-08-12T12:03:22.246Z,
//         updatedAt: 2024-08-13T09:07:38.247Z
//       }
//     }
//   }
