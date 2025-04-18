"use client";

import { FormEvent, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

//Stores
import { useSelectionStore } from "@/store/selection";
import { usePriceStore } from "@/store/prices";
import { useBalanceStore } from "@/store/balance";

//Components and Utils
import Input from "@/components/molecules/Input";
import Button from "@/components/molecules/Button";
import SendPopup from "./SendPopup";
import { formattedDateTime } from "@/lib/dateTimeUtils";

type SendFormProps = {
  email: string;
  name: string;
  message: string;
  id: string;
  userLimit: number | null;
}

const COIN_NETWORKS: Record<string, string> = {
  bitcoin: "BITCOIN",
  ethereum: "ERC20",
  binance: "BEP20",
  tron: "TRC20",
  usdtt: "TRC20",
  usdte: "ERC20",
  ada: "CARDANO",
  solana: "SOLANA",
  lite: "LITECOIN",
  doge: "DOGECOIN",
};

const SendForm = ({ email, name, message, id, userLimit }: SendFormProps) => {

  const { coin } = useSelectionStore();
  const { btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice } = usePriceStore();
  const { btcBalance, ethBalance, binanceBalance, tronBalance, usdttBalance, usdteBalance, adaBalance, solBalance, liteBalance, dogeBalance, hasPendingTransaction } = useBalanceStore();

  const [sendingCoin, setSendingCoin] = useState<string>(COIN_NETWORKS[coin] || "BITCOIN");
  const [loading, setLoading] = useState<boolean>(false);
  const [enteredAddress, setEnteredAddress] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [network, setNetwork] = useState<string>(COIN_NETWORKS[coin] || "BITCOIN");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    const priceMap: Record<string, number> = {
      bitcoin: btcPrice,
      ethereum: ethPrice,
      binance: bnbPrice,
      tron: trxPrice,
      usdtt: usdtPrice,
      usdte: usdtPrice,
      ada: adaPrice,
      solana: solPrice,
      lite: ltcPrice,
      doge: dogePrice,
    };
    setRate(priceMap[coin] || 0);
  }, [coin, btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice]);

  useEffect(() => {
    if (!coin) {
      redirect("/user/overview");
    } else {
      setSendingCoin(COIN_NETWORKS[coin] || "BITCOIN");
      setNetwork(COIN_NETWORKS[coin] || "BITCOIN");
    }
  }, [coin]);

  const resetForm = () => {
    setEnteredAddress("");
    setEnteredAmount(0);
  };

  const handleSubmit = async (event: FormEvent) => {

    toast.info("Sending Cryptocurrency");
    event.preventDefault();
    setLoading(true);

    if (userLimit !== null && (enteredAmount * rate) < userLimit) {
      toast.warning(`Sorry, you can only send a minimum amount of ${userLimit.toLocaleString()}`);
      setLoading(false);
      return;
    }

    if (!userLimit && (enteredAmount * rate) < 200000) {
      toast.warning("Sorry, you can only send a minimum amount of $199,999.00.");
      setLoading(false);
      return;
    }

    if (hasPendingTransaction) {
      toast.error("You have a pending transaction. Please contact support.");
      setLoading(false);
      return;
    }

    const balanceMap: Record<string, number> = {
      bitcoin: btcBalance,
      ethereum: ethBalance,
      binance: binanceBalance,
      tron: tronBalance,
      usdtt: usdttBalance,
      usdte: usdteBalance,
      ada: adaBalance,
      solana: solBalance,
      lite: liteBalance,
      doge: dogeBalance,
    };

    if (enteredAmount > (balanceMap[coin] || 0)) {
      toast.error(`Insufficient funds. Your balance is ${balanceMap[coin]}.`);
      setEnteredAmount(balanceMap[coin]);
      setLoading(false);
      return;
    }

    const formData = {
      amount: enteredAmount, coin, network, transactionType: "deposit", userId: id, receivingAddress: enteredAddress
    };

    const emailData = {
      to: email,
      subject: "Transaction Notification",
      name,
      emailType: "send",
      currentTime: formattedDateTime,
      transactionAmount: enteredAmount,
      transactionCoin: sendingCoin,
      transactionWallet: enteredAddress,
      transactionNetwork: network.toUpperCase(),
    };

    try {
      makeApiRequest("/send", "post", formData);
      toast.success(`Transaction of ${enteredAmount} ${sendingCoin} is pending. Transferred to ${enteredAddress}.`);
      resetForm();
      setSuccess(true);

      try {
        makeApiRequest("/send-email", "post", emailData);
        console.log("Email was sent.");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    } catch (apiError) {
      console.error("Transaction failed:", apiError);
      toast.error("Transaction failed. Please check your internet connection and try again.");
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {success && <SendPopup message={message} />}
      <main className="p-2 md:p-4 xl:p-6">
        <div className="bg-white mx-auto p-4 md:p-8 rounded-lg w-[90%] md:w-[70%] xl:w-[50%]">
          <p className="mt-2 mb-4 font-semibold uppercase">
            SEND {sendingCoin} TO ANY WALLET.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <Input id="amount" value={enteredAmount} onChange={(e) => setEnteredAmount(parseFloat(e.target.value))} label={`Enter amount in ${sendingCoin}`} type="number" pattern="\d+" title="Please enter a positive number" placeholder={`Enter Amount In ${sendingCoin} Equivalent`} />
            </div>
            <p className="mt-6 text-green-600">
              The recipient will receive ${enteredAmount && (enteredAmount * rate).toLocaleString()}
            </p>
            <div className="mt-6">
              <Input type="text" id="wallet" value={enteredAddress} onChange={(e) => setEnteredAddress(e.target.value)} label="Wallet Address" placeholder={`Enter ${sendingCoin} Wallet`} />
            </div>
            <div className="flex flex-col gap-y-1 mt-6 text-xs sm:text-sm xl:text-base">
              <label htmlFor="network">Network</label>
              <select onChange={(e) => setNetwork(e.target.value)} name="network" id="network" className="bg-white px-2 xl:px-4 py-3 border border-[#E6E7E8] focus:border-primary rounded-md focus:outline-none" value={network} >
                <option value={network}>{network}</option>
                <option value="ERC20">Ethereum (ERC20)</option>
                <option value="BEP20">BNB Smart Chain (BEP20)</option>
              </select>
            </div>
            <div className="mt-10">
              <Button type="submit" text="Continue" loading={loading} />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SendForm;