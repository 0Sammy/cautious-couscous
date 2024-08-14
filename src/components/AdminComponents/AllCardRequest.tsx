"use client"

import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

//Import Server Components
import { updateCard, deleteCard } from "@/actions/serverActions/cardRequest";

//Import Needed Utils
import { formatDate } from "@/lib/dateTimeUtils";

//Import Needed Icons
import { CardReceive, CardRemove, CardTick, More } from "iconsax-react";


const AllCardRequest = ({ requests }: any) => {

    const pendingRequests = requests.filter((deposit: { status: string; }) => deposit.status === 'pending')
    const processedRequests = requests.filter((deposit: { status: string; }) => deposit.status !== 'pending')

    //States
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    //Functions and Server actions
    const toggleMenu = (id: string) => {
        setExpandedItem((prevItem) => (prevItem === id ? null : id));
    };

    const handleModification = async (id: string, type: string, email: string) => {
        const { success, message } = await updateCard(id, type, email);
        if (success) {
            toast.success(message);
            window.location.reload()
        }else{
            toast.error("Couldn't update the cards status, kindly try again, or contact the developer")
            window.location.reload()
        }
    };

    const handleDelete = async(id: string) => {
        const { success, message } = await deleteCard(id);
        if (success) {
            toast.success(message);
            window.location.reload()
        }else{
            toast.error("Couldn't update the cards status, kindly try again, or contact the developer")
            window.location.reload()
    };
    }
    return (
        <main className="min-h-dvh">
            <div className="h-[50dvh] overflow-y-auto px-2 sm:px-4 md:px-6 xl:px-8 py-4 special1">
                <p className="text-base md:text-lg xl:text-xl font-semibold text-white">Pending Card Requests</p>
                <div className="flex flex-col gap-y-3 mt-4">
                    {pendingRequests && pendingRequests.map((pending: any) => (
                        <div key={pending.id} className="hover:bg-slate-800 duration-500 p-2 rounded-md">
                            <div className="flex items-center justify-between cursor-pointer">
                                <Link href={`/admin/card/${pending.id}`}  className="flex gap-x-1 items-center">
                                    <div className="bg-green-800/30 rounded-[50%] p-2 text-green-600">
                                        <CardReceive size="26" variant="Bold" />
                                    </div>

                                    <div className="flex flex-col gap-y-0.5">
                                        <p className="text-[#F0F0F0] font-medium capitalize">{pending.user.firstName} {pending.user.lastName} {pending.user.userId}</p>
                                        <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(pending.createdAt)}</p>
                                    </div>
                                </Link>
                                <div className="relative flex gap-x-2 items-center">
                                    <p className="bg-[#FEF6E7]/30 text-[#DF930E] rounded-2xl px-2 py-0.5 text-[8px] md:text-[10px] xl:text-[12px] font-medium capitalize">{pending.status}</p>
                                    <More size="24" className="text-[#F0F0F0] cursor-pointer" onClick={() => { toggleMenu(pending.id) }} />
                                    {expandedItem === pending.id && (
                                        <div className="bg-white absolute w-36 z-[50] top-10 right-0 rounded-md py-2 border border-slate-300 shadow-sm">
                                            <div className="flex flex-col gap-y-2 text-black">
                                                <button type="submit" className="hover:text-primary hover:font-semibold duration-300" onClick={() => handleModification(pending.id, "success", pending.user.email)}>Approve</button>
                                                <button type="submit" className="hover:text-primary hover:font-semibold duration-300" onClick={() => handleModification(pending.id, "failed", pending.user.email)}>Deny</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[50dvh] overflow-y-auto px-2 sm:px-4 md:px-6 xl:px-8 py-4 special1">
                <p className="text-base md:text-lg xl:text-xl font-semibold text-white">Processed Card Requests</p>
                <div className="flex flex-col gap-y-3 mt-4">
                    {processedRequests && processedRequests.map((processed: any) => (
                        <div key={processed.id} className="hover:bg-slate-800 duration-500 p-2 rounded-md">
                            <div className="flex items-center justify-between cursor-pointer">
                                <Link href={`/admin/card/${processed.id}`}  className="flex gap-x-1 items-center">
                                    <div className="bg-slate-600/30 rounded-[50%] p-2">
                                        {processed.status === "failed" && <CardRemove size="26" variant="Bold" className="text-red-600" />}
                                        {processed.status === "successful" && <CardTick size="26" variant="Bold" className="text-green-600" />}
                                    </div>
                                    <div className="flex flex-col gap-y-0.5">
                                        <p className="text-[#F0F0F0] font-medium capitalize">{processed.user.firstName} {processed.user.lastName} {processed.user.userId}</p>
                                        <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(processed.createdAt)}</p>
                                    </div>
                                </Link>
                                <div className="relative flex gap-x-2 items-center">
                                    <p className={`capitalize ${processed.status === "successful" ? "bg-green-600 bg-opacity-20 text-[#20BF55]" : "bg-red-600 bg-opacity-20 text-red-800"} rounded-2xl px-2 py-0.5  text-[8px] md:text-[10px] xl:text-[12px] font-medium`}>{processed.status}</p>
                                    <More size="24" className="text-[#F0F0F0] cursor-pointer" onClick={() => { toggleMenu(processed.id) }} />
                                    {expandedItem === processed.id && (
                                        <div className="bg-white absolute w-36 z-[50] top-10 right-0 rounded-md py-2 border border-slate-300 shadow-sm">
                                            <div className="flex flex-col gap-y-2 text-black">
                                                <button type="submit" className="hover:text-primary hover:font-semibold duration-300" onClick={() => handleDelete(processed.id)}>Delete Card</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default AllCardRequest;