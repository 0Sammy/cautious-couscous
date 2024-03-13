import Image from "next/image";
import Link from "next/link";


import getIndividualUser from "@/actions/getIndividualUser";
import getIndividualUserTransaction from "@/actions/getIndividualUserTransaction";
import { formatDate, formatDateTime } from "@/lib/dateTimeUtils";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import UsersAccountSummary from "@/components/AdminComponents/UsersAccountSummary";
import Prices from "@/components/DashboardComponents/Prices";
import ProfileQuickActions from "@/components/AdminComponents/ProfileQuickActions";


export const revalidate = 1;

const page = async ({ params }: { params: { id: string } }) => {
    const userId = params.id;
    const currentUser = await getIndividualUser(userId);
    const userTransaction = await getIndividualUserTransaction(userId);
    const proccessedTransactions = userTransaction.filter((transaction) => transaction.status === 'successful')
    //console.log({userTransaction})

    return ( 
        <main>
            <Prices />
            <AdminHeader page={`${currentUser?.firstName} Profile`} />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between">
                    <div className="lg:w-[40%] border border-[#7676801F] p-4 rounded-xl">
                      <p className="text-xs md:text-sm xl:text-base font-semibold text-white">
                        Personal Information
                      </p>
                        <div className="flex flex-col gap-y-2 text-[#F0F0F0] text-xs md:text-sm xl:text-base mt-4">
                          <p className="capitalize">
                            {currentUser?.firstName} {currentUser?.lastName}
                          </p>
                          <p>{currentUser?.email}</p>
                          <p>{currentUser?.userId}</p>
                          <p>{currentUser?.passwordString ? currentUser?.passwordString : "Unable to show password."}</p>
                        </div>
                    </div>
                    <div className="lg:w-[58%] border border-[#7676801F] p-4 rounded-xl">
                      <p className="text-xs md:text-sm xl:text-base font-semibold text-[#F0F0F0]">
                        Contact Information
                      </p>
                      <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-2 mt-8 text-[#F0F0F0] text-xs md:text-sm xl:text-base">
                        <div className="flex flex-col gap-y-2">
                          <div className="flex gap-x-1">
                            <p className="text-[#B9BAC0]">Country:</p>
                            <p>{currentUser?.issuedCountry}</p>
                          </div>
                          <div className="flex gap-x-1">
                            <p className="text-[#B9BAC0]">Mobile Number:</p>
                            <p>{currentUser?.mobileNumber}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between mt-8">
                    <div className="lg:w-[49%] border border-[#7676801F] p-4 rounded-xl">
            <p className="text-xs md:text-sm xl:text-base font-semibold text-[#F0F0F0]">
              Security details
            </p>
            <div className="mt-8 flex flex-col gap-y-2 text-[#F0F0F0] text-xs md:text-sm xl:text-base">
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">ID Type:</p>
                <p>{currentUser?.idType}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">ID Number:</p>
                <p>{currentUser?.idNumber}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Date of Expiration:</p>
                <p>{formatDateTime(currentUser?.dateOfExpiry ?? "")}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Account creation date:</p>
                <p>{formatDate(currentUser?.createdAt ?? new Date)}</p>
              </div>
              <p className="text-xs md:text-sm xl:text-base font-semibold text-[#F0F0F0] mt-4">Account Details</p>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Has Generated Mnemonic Phrase?:</p>
                <p>{currentUser?.hasMemonicPhrase ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Generated Mnemonic Phrase:</p>
                <p>{currentUser?.memonicPhrase}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Has Transaction Pin:</p>
                <p>{currentUser?.hasTransactionPin ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Transaction Pin:</p>
                <p>{currentUser?.transactionPin}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Has client verified his email?:</p>
                <p>{currentUser?.isEmailVerified ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Has Done KYC:</p>
                <p>{currentUser?.hasDoneKYC ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Is Client Suspended:</p>
                <p>{currentUser?.isSuspended ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-x-1">
                <p className="text-[#B9BAC0]">Personal Deposit Message:</p>
                <p>{currentUser?.depositMessage ? currentUser?.depositMessage : "No Deposit Message Yet"}</p>
              </div>
              

            </div>
                    </div>
                    <div className="lg:w-[49%] border border-[#7676801F] p-4 rounded-xl">
            <p className="text-xs md:text-sm xl:text-base font-semibold text-[#F0F0F0]">
              IDs
            </p>
            <div className="flex justify-between mt-8">
              <div className="relative rounded-lg w-[49%] h-60">
                <Image
                  src={currentUser?.idCardFrontImgSrc ?? ""}
                  alt={`${currentUser?.firstName} Front ID`}
                  className="rounded-lg absolute"
                  fill
                />
              </div>
              <div className="relative rounded-lg w-[49%] h-60">
                <Image
                  src={currentUser?.idCardBackImgSrc ?? ""}
                  alt={`${currentUser?.firstName} Back ID`}
                  className="rounded-lg absolute"
                  fill
                />
              </div>
            </div>
                    </div>
                </div>
                <UsersAccountSummary transactions={proccessedTransactions}/>
                <ProfileQuickActions email={currentUser?.email ?? ""} isSuspended={currentUser?.isSuspended ?? false} name={`${currentUser?.firstName} ${currentUser?.lastName}`} userId={currentUser?.id ?? ""}/>
            </div>
        </main>
     );
}
 
export default page;