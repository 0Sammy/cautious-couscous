import { formatDate } from "@/lib/dateTimeUtils";
import getIndividualTransaction from "@/actions/getIndividualTransaction";


const page = async ({ params }: { params: { id: string } }) => {

    const transactionId = params.id;
    const currentTransaction = await getIndividualTransaction(transactionId)

    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0 text-xs md:text-sm xl:text-base">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] px-2 sm:px-4 py-6 md:p-6 xl:p-8 bg-white flex flex-col gap-y-3 rounded-lg">
                <p className="text-base md:text-xl xl:text-2xl text-[#020100] font-semibold">
                    Transaction details
                </p>
                <div className="flex flex-col gap-y-2 mt-4">
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction Status
                        </p>
                        <p className={`${currentTransaction?.status === "pending" && "text-[#DF930E]"} ${currentTransaction?.status === "successful" && "text-[#026C3C]"} ${currentTransaction?.status === "failed" && "text-red-600"} font-semibold capitalize`}>
                          {currentTransaction?.status}
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction Amount
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                          {currentTransaction?.amount}
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction Coin
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                          {currentTransaction?.coin}
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction Network
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                          {currentTransaction?.network}
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction Type
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                          {currentTransaction?.transactionType === "deposit" ? "Transferred" : currentTransaction?.transactionType}
                        </p>
                    </div>
                    {currentTransaction?.transactionType === "deposit" && <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Recipient Address
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                          {currentTransaction?.receivingAddress === null ? "Address is currently unavailable" : currentTransaction?.receivingAddress}
                        </p>
                    </div>}
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction ID
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                            {currentTransaction?.id}
                        </p>
                    </div>
                    <div className="flex justify-between items-center gap-x-5">
                        <p className="text-[#9EA0A3]">
                          Transaction Date
                        </p>
                        <p className="text-[#06121B] font-semibold capitalize">
                            {formatDate(currentTransaction?.createdAt ?? new Date)}
                        </p>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default page;