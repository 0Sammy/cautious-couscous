import Link from "next/link";
import { formatDate, formatDateTime } from "@/lib/dateTimeUtils";

//Import Needed Icons
import { DirectDown, MoneyAdd, MoneyRemove, MoneyTick, ProfileAdd, Send2 } from "iconsax-react";

const AllAdmins = ({ admins, transactions }: any) => {
  return (
    <main>
      <div className="special max-h-[50%] border border-[#7676801F] rounded-xl p-4">
        <div className="flex justify-between text-xs md:text-sm xl:text-base">
          <p className=" text-[#06121B]">{admins && admins.length} Staff</p>
          <Link
            href="/operations/create"
            target="_blank"
            className="flex gap-x-1 text-primary hover:text-textPrimary duration-500"
          >
            <ProfileAdd size="20" variant="Broken" /> Add Admin
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 mt-8">
          {admins &&
            admins.map((admin: any) => (
              <div
                key={admin.id}
                className="flex justify-between overflow-x-auto special pb-2 gap-x-10"
              >
                <div className="flex flex-col gap-y-0.5 w-[33%] min-w-[10rem]">
                  <p className="text-xs xl:text-sm text-[#101828]">
                    {admin.email}
                  </p>
                  <p className="text-[10px] text-xs text-[#667085]">
                    {admin.id}
                  </p>
                </div>
                <div className="flex flex-col gap-y-0.5 w-[33%] min-w-[10rem]">
                  <p className="text-[#8E8E93] text-[10px] text-xs">
                    Date Joined
                  </p>
                  <p className="text-[#020100] text-xs xl:text-sm font-medium">
                    {formatDate(admin.createdAt)}
                  </p>
                </div>
                <div className="flex flex-col gap-y-0.5 w-[33%] min-w-[10rem]">
                  <p className="text-[#8E8E93] text-[10px] text-xs">
                    Admin Status
                  </p>
                  <p
                    className={`${
                      admin.role === "super_admin"
                        ? "text-[#248A3D]"
                        : "text-[#0040DD]"
                    } text-xs xl:text-sm font-medium`}
                  >
                    {admin.role === "super_admin" ? "Super Admin" : "Admin"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-10 border border-[#7676801F] rounded-xl p-4 max-h-screen special">
        <p className="text-xl md:text-sm xl:text-base font-bold text-[#06121B] mb-8">
          Admin Transactions
        </p>
        {transactions && transactions.map((transaction: any) => ( 

          <Link key={transaction.id} href={`/admin/${transaction.transactionType === "deposit" ? "deposit" : transaction.transactionType === "receive" ? "receive" : transaction.transactionType === "bonus" ? "sendbonus" : transaction.transactionType === "penalty" ? "sendpenalty" : "deposit"}`}>
            <div className="flex items-center justify-between py-4 cursor-pointer">
              <div className="flex gap-x-2 items-center">
                  <div className="bg-[#00000033] rounded-[50%] p-2 text-secondary">
                      {transaction.transactionType === "deposit" ? <Send2 size="20" /> : transaction.transactionType === "receive" ? <DirectDown size="20" /> : transaction.transactionType === "bonus" ?           <MoneyTick size="20" color="#1C1F33"/> : transaction.transactionType === "earning" ? <MoneyAdd size="20" color="#1C1F33"/> : transaction.transactionType === "penalty" ? <MoneyRemove           size="20" color="#1C1F33"/> : <Send2 size="20" /> }
                  </div>
                  <div className="flex flex-col gap-y-0.5">
                      <p className="text-[#141619] text-[10px] md:text-[12px] xl:text-[14px] font-medium capitalize">{transaction.transactionType === "deposit" ? "Sent Coins" : transaction.transactionType === "receive" ? "Received Coins" : transaction.transactionType === "bonus" ? "Added Bonus" : transaction.transactionType === "earning" ? "Added Earning" : transaction.transactionType ===          "penalty" ? "Added Penalty" : "A Transaction"}</p>
                      <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{formatDate(transaction.createdAt)}</p>
                  </div>
              </div>
              <div className="flex gap-x-2 items-center capitalize">
                  <p className={`${transaction.transactionType === "Deposit" && "text-[#20BF55]"} text-[#FF5964] text-xs md:text-sm xl:text-base font-medium`}>{transaction.transactionType === "receive" || transaction.transactionType === "bonus" ? `+${transaction.amount}` : `-${transaction.amount}`}</p>
                  <p className={`${transaction.transactionType === "Deposit" && "text-[#20BF55]"} text-[#FF5964] text-xs md:text-sm xl:text-base font-medium`}>{transaction.coin}</p>
                  <p className={`${transaction.status === "pending" && "bg-[#FEF6E7] text-[#DF930E]"} ${transaction.status === "successful" && "bg-[#E6F5EE] text-[#026C3C]"} ${transaction.status === "failed" && "text-red-600 bg-red-100"} rounded-2xl px-2 py-1  text-[8px] md:text-[10px] xl:text-[12px] font-medium`}>{transaction.status}</p>
              </div>
            </div>
          </Link>
          ))}
      </div>
    </main>
  );
};

export default AllAdmins;
