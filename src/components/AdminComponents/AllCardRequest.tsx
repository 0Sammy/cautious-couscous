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
        } else {
            toast.error("Couldn't update the cards status, kindly try again, or contact the developer")
            window.location.reload()
        }
    };

    const handleDelete = async (id: string) => {
        const { success, message } = await deleteCard(id);
        if (success) {
            toast.success(message);
            window.location.reload()
        } else {
            toast.error("Couldn't update the cards status, kindly try again, or contact the developer")
            window.location.reload()
        };
    }
    return (
        <main className="min-h-dvh">
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4 h-[50dvh] overflow-y-auto special1">
                <p className="font-semibold text-base text-white md:text-lg xl:text-xl">Pending Card Requests</p>
                <div className="flex flex-col gap-y-3 mt-4">
                    {pendingRequests && pendingRequests.map((pending: any) => (
                        <div key={pending.id} className="hover:bg-slate-800 p-2 rounded-md duration-500">
                            <div className="flex justify-between items-center cursor-pointer">
                                <Link href={`/admin/card/${pending.id}`} className="flex items-center gap-x-1">
                                    <div className="bg-green-800/30 p-2 rounded-[50%] text-green-600">
                                        <CardReceive size="26" variant="Bold" />
                                    </div>

                                    <div className="flex flex-col gap-y-0.5">
                                        <p className="font-medium text-[#F0F0F0] capitalize">{pending.user.firstName} {pending.user.lastName} {pending.user.userId}</p>
                                        <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(pending.createdAt)}</p>
                                    </div>
                                </Link>
                                <div className="relative flex items-center gap-x-2">
                                    <p className="bg-[#FEF6E7]/30 px-2 py-0.5 rounded-2xl font-medium text-[#DF930E] text-[8px] md:text-[10px] xl:text-[12px] capitalize">{pending.status}</p>
                                    <More size="24" className="text-[#F0F0F0] cursor-pointer" onClick={() => { toggleMenu(pending.id) }} />
                                    {expandedItem === pending.id && (
                                        <div className="top-10 right-0 z-[50] absolute border-slate-300 bg-white shadow-sm py-2 border rounded-md w-36">
                                            <div className="flex flex-col gap-y-2 text-black">
                                                <button type="submit" className="hover:font-semibold hover:text-primary duration-300" onClick={() => handleModification(pending.id, "success", pending.user.email)}>Approve</button>
                                                <button type="submit" className="hover:font-semibold hover:text-primary duration-300" onClick={() => handleModification(pending.id, "failed", pending.user.email)}>Deny</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4 h-[50dvh] overflow-y-auto special1">
                <p className="font-semibold text-base text-white md:text-lg xl:text-xl">Processed Card Requests</p>
                <div className="flex flex-col gap-y-3 mt-4">
                    {processedRequests && processedRequests.map((processed: any) => (
                        <div key={processed.id} className="hover:bg-slate-800 p-2 rounded-md duration-500">
                            <div className="flex justify-between items-center cursor-pointer">
                                <Link href={`/admin/card/${processed.id}`} className="flex items-center gap-x-1">
                                    <div className="bg-slate-600/30 p-2 rounded-[50%]">
                                        {processed.status === "failed" && <CardRemove size="26" variant="Bold" className="text-red-600" />}
                                        {processed.status === "successful" && <CardTick size="26" variant="Bold" className="text-green-600" />}
                                    </div>
                                    <div className="flex flex-col gap-y-0.5">
                                        <p className="font-medium text-[#F0F0F0] capitalize">{processed.user.firstName} {processed.user.lastName} {processed.user.userId}</p>
                                        <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(processed.createdAt)}</p>
                                    </div>
                                </Link>
                                <div className="relative flex items-center gap-x-2">
                                    <p className={`capitalize ${processed.status === "successful" ? "bg-green-600 bg-opacity-20 text-[#20BF55]" : "bg-red-600 bg-opacity-20 text-red-800"} rounded-2xl px-2 py-0.5  text-[8px] md:text-[10px] xl:text-[12px] font-medium`}>{processed.status}</p>
                                    <More size="24" className="text-[#F0F0F0] cursor-pointer" onClick={() => { toggleMenu(processed.id) }} />
                                    {expandedItem === processed.id && (
                                        <div className="top-10 right-0 z-[50] absolute border-slate-300 bg-white shadow-sm py-2 border rounded-md w-36">
                                            <div className="flex flex-col gap-y-2 text-black">
                                                <button type="submit" className="hover:font-semibold hover:text-primary duration-300" onClick={() => handleDelete(processed.id)}>Delete Card</button>
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