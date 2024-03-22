"use client";
import { formatDate } from "@/lib/dateTimeUtils";
import { useSelectionStore } from "@/store/selection";
import Link from "next/link";

//Import Needed Icons
import {
  Cardano,
  Bitcoin,
  Tether,
  Ethereum,
  BinanceCoin,
  Trontron,
  Litecoin,
  Solana,
  Coin1,
} from "iconsax-react";


const TransactionHistory = ({transactions}: any) => {

  const { coin } = useSelectionStore();
  const currentTransaction = transactions?.filter((transaction: { coin: string; }) => transaction.coin === coin);

  return (
    <main className="bg-white rounded-lg p-4 shadow-xl mt-10">
      <p className="font-semibold text-xs md:text-sm xl:text-base">
        TRANSACTION HISTORY
      </p>
      <p className="text-[0.7rem] md:text-xs xl:text-sm text-black text-opacity-70 mt-4">
        Transaction History shows information about all{" "}
        <span className="uppercase">
          {coin === "bitcoin"
            ? "BTC"
            : coin === "ethereum"
            ? "ETH"
            : coin === "binance"
            ? "BNB"
            : coin === "tron"
            ? "TRX"
            : coin === "usdtt"
            ? "usdt (trc20)"
            : coin === "usdte"
            ? "usdt (erc20)"
            : coin === "ada"
            ? "ada"
            : coin === "solana"
            ? "Sol"
            : coin === "doge"
            ? "Doge"
            : coin === "lite"
            ? "ltc"
            : "Coin"}{" "}
        </span>{" "}
        Transactions.
      </p>
      <div className="flex flex-col gap-y-1 mt-6">
      {currentTransaction && currentTransaction.map((transaction: any) => ( 

          <Link href={`/user/history/${transaction.id}`} key={transaction.id} className="flex items-center justify-between py-4 cursor-pointer hover:bg-[#FAFAFA] duration-300 p-1 rounded-lg border-b border-slate-200">
          <div className="flex gap-x-1 items-center">
            <div className="bg-[#EBEBF599] rounded-[50%] p-2">
              {coin === "bitcoin" ? (
                <Bitcoin size="24" className="text-[#20BF55]" />
              ) : coin === "ethereum" ? (
                <Ethereum size="24" className="text-[#20BF55]" />
              ) : coin === "binance" ? (
                <BinanceCoin size="24" className="text-[#20BF55]" />
              ) : coin === "tron" ? (
                <Trontron size="24" className="text-[#20BF55]" />
              ) : coin === "usdtt" ? (
                <Tether size="24" className="text-[#20BF55]" />
              ) : coin === "usdte" ? (
                <Tether size="24" className="text-[#20BF55]" />
              ) : coin === "ada" ? (
                <Cardano size="24" className="text-[#20BF55]" />
              ) : coin === "solana" ? (
                <Solana size="24" className="text-[#20BF55]" />
              ) : coin === "lite" ? (
                <Litecoin size="24" className="text-[#20BF55]" />
              ) : coin === "doge" ? (
                <Coin1 size="24" className="text-[#20BF55]" />
              ) : (
                <Bitcoin size="24" className="text-[#20BF55]" />
              )}
            </div>
            <div className="flex flex-col gap-y-0.5">
              <p className="text-[#141619] text-xs md:text-sm xl:text-base font-medium capitalize">
                {transaction.transactionType === "deposit" ? "Sent" : transaction.transactionType}
              </p>
              <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">
                {formatDate(transaction.createdAt)}
              </p>
            </div>
          </div>
          <div className="flex gap-x-2 items-center">
            <p
              className={`${transaction.transactionType === "receive" || transaction.transactionType === "bonus" ? "text-[#20BF55]" : "text-[#FF5964]"} text-xs md:text-sm xl:text-base font-medium`}
            >
              {transaction.transactionType === "receive" || transaction.transactionType === "bonus" ? `+${transaction.amount}` : `-${transaction.amount}`}
            </p>
            <p
              className={`${transaction.status === "pending" && "bg-[#FEF6E7] text-[#DF930E]"} ${transaction.status === "successful" && "bg-[#E6F5EE] text-[#026C3C]"} ${transaction.status === "failed" && "text-red-600 bg-red-100"} rounded-2xl px-2 py-1 text-[10px] md:text-[12px] font-medium`}
            >
              {transaction.status}
              </p>
          </div>
          </Link>

      ))}
        
        
      </div>
    </main>
  );
};

export default TransactionHistory;
