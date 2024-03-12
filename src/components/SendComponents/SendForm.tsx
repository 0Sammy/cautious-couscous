"use client";
import { FormEvent, useEffect, useState } from "react";
import { useSelectionStore } from "@/store/selection";
import { redirect } from "next/navigation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { usePriceStore } from "@/store/prices";
import { useBalanceStore } from "@/store/balance";


//Import Needed Components
import Input from "@/components/molecules/Input";
import Button from "@/components/molecules/Button";
import SendPopup from "./SendPopup";


const SendForm = ({ email, name, message, id }: string | any) => {
  
  const {btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice } = usePriceStore()
  const {btcBalance, ethBalance, binanceBalance, tronBalance, usdttBalance, usdteBalance, adaBalance, solBalance, liteBalance, dogeBalance} = useBalanceStore()

  const { coin } = useSelectionStore();
  const [sendingCoin, setSendingCoin] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false);
  const [enteredAddress, setEnteredAddress] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0)

  const [network, setNetwork] = useState<string>(
    coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ERC20" : coin === "binance" ? "BEP20" : coin === "tron" ? "TRC20" : coin === "usdtt" ? "TRC20" : coin === "usdte" ? "ERC20" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGECOIN" : "BITCOIN"
  );
  useEffect(() => {
    (
      coin === "bitcoin"
        ? setRate(btcPrice)
        : coin === "ethereum"
        ? setRate(ethPrice)
        : coin === "binance"
        ? setRate(bnbPrice)
        : coin === "tron"
        ? setRate(trxPrice)
        : coin === "usdtt"
        ? setRate(usdtPrice)
        : coin === "usdte"
        ? setRate(usdtPrice)
        : coin === "ada"
        ? setRate(adaPrice)
        : coin === "solana"
        ? setRate(solPrice)
        : coin === "lite"
        ? setRate(ltcPrice)
        : coin === "doge"
        ? setRate(dogePrice)
        : 0
    )
  }, [coin, btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice])
  
  const [success, setSuccess] = useState<boolean>(false)

    const reset = () => {
    setEnteredAddress("");
    setEnteredAmount(0);
  };
  //Checking if a user has a coin, and if not, redirects
  useEffect(() => {
    if (!coin) {
      redirect("/user/overview");
    }
    (
      coin === "bitcoin"
        ? setSendingCoin("BITCOIN")
        : coin === "ethereum"
        ? setSendingCoin("ETHEREUM")
        : coin === "binance"
        ? setSendingCoin("BINANCE COIN (BNB)")
        : coin === "tron"
        ? setSendingCoin("TRON")
        : coin === "usdtt"
        ? setSendingCoin("USDT (TRC20)")
        : coin === "usdte"
        ? setSendingCoin("USDT (ERC20)")
        : coin === "ada"
        ? setSendingCoin("CARDANO (ADA)")
        : coin === "solana"
        ? setSendingCoin("SOLANA")
        : coin === "lite"
        ? setSendingCoin("LITECOIN")
        : coin === "doge"
        ? setSendingCoin("DOGE")
        : setSendingCoin("COIN")
    )
  },[coin]);
  //OnSubmit Function
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    //Check if the user has such amount
    if ( coin === "bitcoin" && enteredAmount > btcBalance) {
       toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${btcBalance}.`)
       setEnteredAmount(btcBalance)
       setLoading(false)
       return
    } else if (coin === "ethereum" && enteredAmount > ethBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${ethBalance}.`)
      setEnteredAmount(ethBalance)
      setLoading(false)
      return
    } else if (coin === "binance" && enteredAmount > binanceBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${binanceBalance}.`)
      setEnteredAmount(binanceBalance)
      setLoading(false)
      return
    } else if (coin === "tron" && enteredAmount > tronBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${tronBalance}.`)
      setEnteredAmount(tronBalance)
      setLoading(false)
      return
    } else if (coin === "usdtt" && enteredAmount > usdttBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${usdttBalance}.`)
      setEnteredAmount(usdttBalance)
      setLoading(false)
      return
    }else if (coin === "usdte" && enteredAmount > usdteBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${usdteBalance}.`)
      setEnteredAmount(usdteBalance)
      setLoading(false)
      return
    }else if (coin === "ada" && enteredAmount > adaBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${adaBalance}.`)
      setEnteredAmount(adaBalance)
      setLoading(false)
      return
    } else if (coin === "solana" && enteredAmount > solBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${solBalance}.`)
      setEnteredAmount(solBalance)
      setLoading(false)
      return
    } else if (coin === "lite" && enteredAmount > liteBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${liteBalance}.`)
      setEnteredAmount(liteBalance)
      setLoading(false)
      return
    } else if (coin === "doge" && enteredAmount > dogeBalance){
      toast.error(`Insufficient funds: The amount you wish to send is higher than your current wallet balance ${dogeBalance}.`)
      setEnteredAmount(dogeBalance)
      setLoading(false)
      return
    }

    //Get the currenTime
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const formattedDateTime = currentDate.toLocaleString("en-US", options);

    const formData = {
      amount: enteredAmount,
      coin,
      network,
      transactionType: "deposit",
      userId: id,
      receivingAddress: enteredAddress,
    };
    const emailData = {
      to: email,
      subject: "Transaction Notification",
      name: name,
      emailType: "send",
      currentTime: formattedDateTime,
      transactionAmount: enteredAmount,
      transactionCoin: sendingCoin,
      transactionWallet: enteredAddress,
      transactionNetwork: network?.toUpperCase(),
    };
    //console.log({ formData });
    //console.log({ emailData });
    makeApiRequest("/send", "post", formData, {
      
      onSuccess: () => {
        // Handle success
        setLoading(false);
        toast.success(
          `Transaction successful! ${enteredAmount} ${
            coin === "bitcoin"
              ? "BITCOIN"
              : coin === "ethereum"
              ? "ETHEREUM"
              : coin === "BINANCE COIN"
              ? "BNB"
              : coin === "tron"
              ? "TRON"
              : coin === "usdtt"
              ? "usdt (trc20)"
              : coin === "usdte"
              ? "usdt (erc20)"
              : coin === "ada"
              ? "CARDANO"
              : coin === "solana"
              ? "Solana"
              : coin === "lite"
              ? "Litecoin"
              : coin === "doge"
              ? "DOGE"
              : "coin"
          } has been transferred to ${enteredAddress}`
        );
        reset();
        setSuccess(true)
        makeApiRequest("/send-email", "post", emailData, {
          onSuccess: () => {
            // Handle success
            console.log("Email was sent.");
          },
          onError: (error: any) => {
            // Handle error
            console.log(error);
          },
        });
      },
      onError: (error: any) => {
        // Handle error
        setLoading(false);
        reset();
        toast.error(
          "Transaction failed. Please check your internet connection and try again."
        );
      },
    });
  };
  return (
    <>
    {success && <SendPopup message={message}/>}
    <main className="text-xs md:text-sm xl:text-base p-2 md:p-4 xl:p-6">
      <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
        <p className="uppercase font-semibold mt-2 mb-4">
          SEND{" "}
          {coin === "bitcoin"
            ? "BITCOIN"
            : coin === "ethereum"
            ? "ETHEREUM"
            : coin === "BINANCE COIN"
            ? "BNB"
            : coin === "tron"
            ? "TRON"
            : coin === "usdtt"
            ? "usdt (trc20)"
            : coin === "usdte"
            ? "usdt (erc20)"
            : coin === "ada"
            ? "CARDANO"
            : coin === "solana"
            ? "Solana"
            : coin === "lite"
            ? "Litecoin"
            : coin === "doge"
            ? "DOGE"
            : "coin"}{" "}
          TO ANY WALLET.
        </p>
        <div className="bg-[#F0F0F0] px-2 md:px-4 xl:px-6 rounded-md py-3 mt-2">
          <p className="uppercase">
            {coin === "bitcoin"
              ? "BITCOIN"
              : coin === "ethereum"
              ? "ETHEREUM"
              : coin === "BINANCE COIN"
              ? "BNB"
              : coin === "tron"
              ? "TRON"
              : coin === "usdtt"
              ? "usdt (trc20)"
              : coin === "usdte"
              ? "usdt (erc20)"
              : coin === "ada"
              ? "CARDANO"
              : coin === "solana"
              ? "Solana"
              : coin === "lite"
              ? "Litecoin"
              : coin === "doge"
              ? "DOGE"
              : "coin"}
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mt-6">
            <Input
              id="amount"
              value={enteredAmount}
              onChange={(e) => {
                setEnteredAmount(parseFloat(e.target.value));
              }}
              label={`Enter amount in ${
                coin === "bitcoin"
                  ? "BITCOIN"
                  : coin === "ethereum"
                  ? "ETHEREUM"
                  : coin === "BINANCE COIN"
                  ? "BNB"
                  : coin === "tron"
                  ? "TRON"
                  : coin === "usdtt"
                  ? "USDT (TRC20)"
                  : coin === "usdte"
                  ? "USDT (ERC20)"
                  : coin === "ada"
                  ? "CARDANO"
                  : coin === "solana"
                  ? "SOLANA"
                  : coin === "lite"
                  ? "LITECOIN"
                  : coin === "doge"
                  ? "DOGE"
                  : "coin"
              } value`}
              type="number"
              placeholder={`Enter Amount In ${
                coin === "bitcoin"
                  ? "BITCOIN"
                  : coin === "ethereum"
                  ? "ETHEREUM"
                  : coin === "BINANCE COIN"
                  ? "BNB"
                  : coin === "tron"
                  ? "TRON"
                  : coin === "usdtt"
                  ? "USDT (TRC20)"
                  : coin === "usdte"
                  ? "USDT (ERC20)"
                  : coin === "ada"
                  ? "CARDANO"
                  : coin === "solana"
                  ? "SOLANA"
                  : coin === "lite"
                  ? "LITECOIN"
                  : coin === "doge"
                  ? "DOGE"
                  : "coin"
              } Equivalent`}
            />
          </div>
          <p className="mt-6 text-green-600">
            The recipient will receive{" "}
            {enteredAmount && `$${(enteredAmount * rate).toLocaleString()}`}
          </p>
          <div className="mt-6">
            <Input
              type="text"
              id="wallet"
              value={enteredAddress}
              onChange={(e) => {
                setEnteredAddress(e.target.value);
              }}
              label="Wallet Address"
              placeholder={`Enter ${
                coin === "bitcoin"
                  ? "BITCOIN"
                  : coin === "ethereum"
                  ? "ETHEREUM"
                  : coin === "BINANCE COIN"
                  ? "BNB"
                  : coin === "tron"
                  ? "TRON"
                  : coin === "usdtt"
                  ? "USDT (TRC20)"
                  : coin === "usdte"
                  ? "USDT (ERC20)"
                  : coin === "ada"
                  ? "CARDANO"
                  : coin === "solana"
                  ? "SOLANA"
                  : coin === "lite"
                  ? "LITECOIN"
                  : coin === "doge"
                  ? "DOGE"
                  : "coin"
              } Wallet`}
            />
          </div>
          <div className="mt-6 flex flex-col gap-y-1 text-xs sm:text-sm xl:text-base">
            <label htmlFor="">Network</label>
            <select
              onChange={(e: any) => setNetwork(e.target.value)}
              name="network"
              id="network"
              className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
            >
              <option
                value={
                  coin === "bitcoin"
                    ? "BITCOIN"
                    : coin === "ethereum"
                    ? "ERC20"
                    : coin === "binance"
                    ? "BEP20"
                    : coin === "tron"
                    ? "TRC20"
                    : coin === "usdtt"
                    ? "TRC20"
                    : coin === "usdte"
                    ? "ERC20"
                    : coin === "ada"
                    ? "CARDANO"
                    : coin === "solana"
                    ? "SOLANA"
                    : coin === "lite"
                    ? "LITECOIN"
                    : coin === "doge"
                    ? "DOGECOIN"
                    : "COIN"
                }
              >
                {coin === "bitcoin"
                  ? "BITCOIN"
                  : coin === "ethereum"
                  ? "ERC20"
                  : coin === "binance"
                  ? "BEP20"
                  : coin === "tron"
                  ? "TRC20"
                  : coin === "usdtt"
                  ? "TRC20"
                  : coin === "usdte"
                  ? "ERC20"
                  : coin === "ada"
                  ? "CARDANO"
                  : coin === "solana"
                  ? "SOLANA"
                  : coin === "lite"
                  ? "LITECOIN"
                  : coin === "doge"
                  ? "DOGECOIN"
                  : "COIN"}
              </option>
              <option value="ethereum (erc20)">Ethereum (ERC20)</option>
              <option value="bnb smart chain">BNB Smart Chain (BEP20)</option>
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
