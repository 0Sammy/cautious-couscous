"use client"
import { useState, useEffect, FormEvent } from "react";
import { useTransactionStore } from "@/store/adminTransactionStore";
import { usePriceStore } from "@/store/prices";
import { makeApiRequest } from "@/lib/apiUtils";


//Import Needed Components
import Dropdown from "./Dropdown";
import DepositDropDown from "./DepositDropDown";
import Input from "../molecules/Input";
import CoinDropDown from "./CoinDropDown";
import Button from "../molecules/Button";
import { toast } from "sonner";


type transactionProps = {
    allUsers: any;
    loggedInEmail: string | any;
};

const TransactionForm = ({ allUsers, loggedInEmail }: transactionProps) => {

    //console.log({allUsers})

    const {btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice } = usePriceStore()
    const [loading, setLoading] = useState<boolean>(false)
    const [enteredAddress, setEnteredAddress] = useState<string>("");
    const [rate, setRate] = useState<number>(0)
    const [updateCoin, setUpdateCoin] = useState<string>("")
    const { updateAmount, updateNetwork, updateStatus, amount, coin, network, transactionType, userId, doneByAdmin, status} = useTransactionStore()
    useEffect(() => {
        setUpdateCoin(coin)
    }, [coin])
    useEffect(() => {
        (
        updateCoin === "bitcoin"
            ? setRate(btcPrice)
            : updateCoin === "ethereum"
            ? setRate(ethPrice)
            : updateCoin === "binance"
            ? setRate(bnbPrice)
            : updateCoin === "tron"
            ? setRate(trxPrice)
            : updateCoin === "usdtt"
            ? setRate(usdtPrice)
            : updateCoin === "usdte"
            ? setRate(usdtPrice)
            : updateCoin === "ada"
            ? setRate(adaPrice)
            : updateCoin === "solana"
            ? setRate(solPrice)
            : updateCoin === "lite"
            ? setRate(ltcPrice)
            : updateCoin === "doge"
            ? setRate(dogePrice)
            : 0
        )
      }, [updateCoin, btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice])

      //OnSubmit Function
      const onSubmit = (event: FormEvent) => {

        //Get the info of the selected user
        const user = allUsers.find((user: { id: string; }) => user.id === userId);
        const userEmail = user?.email
        const userName = `${user?.firstName} ${user?.lastName}`

        event.preventDefault();
        setLoading(true);

        if (transactionType === "receive" && userEmail.length === 0 || userName.length === 0) {
          toast.info("Kindly reselect the user")
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
        
        const formData = { amount, coin, network, transactionType,  userId, doneByAdmin, adminEmail: loggedInEmail, status, receivingAddress: enteredAddress };
        
        const emailData = {
          to: userEmail,
          subject: "Cryptocurrency Deposit Confirmed",
          name: userName,
          emailType: "receive",
          currentTime: formattedDateTime,
          transactionCoin: coin,
          transactionAmount: amount,
          transactionMoneyValue: (amount * rate).toLocaleString(),
          transactionNetwork: network?.toUpperCase(),
        };

        //console.log({ formData });
        //console.log({ emailData });
        makeApiRequest("/send", "post", formData, {
          
          onSuccess: () => {
            // Handle success
            setLoading(false);
            toast.success("Transaction was added successfully.");
            if (transactionType === "receive"){
              makeApiRequest("/send-email", "post", emailData, {
                onSuccess: () => {
                  // Handle success
                  toast.success("Email was sent")
                  console.log("Email was sent.");
                },
                onError: (error: any) => {
                  // Handle error
                  toast.error("Error, email wasn't sent")
                  console.log(error);
                },
              });
            }
            window.location.reload();
          },
          onError: (error: any) => {
            // Handle error
            setLoading(false);
            toast.error(
              "Unable to add transaction now. Please check your internet connection or contact the developer."
            );
           window.location.reload();
          },
        });
      };
    return ( 
        <main className="h-screen">
            <form className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mt-10" onSubmit={onSubmit}>
                <Dropdown allUsers={allUsers} />
                <DepositDropDown />
                {transactionType === "deposit" && <Input label="Receiving Address" placeholder="Enter the recipient wallet" type="text" id="address" value={enteredAddress} onChange={(e) => setEnteredAddress(e.target.value)}/>}
                <CoinDropDown />
                <div className="mt-4">
                  <Input type="number" pattern="\d+" title="Please enter a positive number" placeholder="Enter the coin amount here" label="Coin Amount" id="amount" value={amount} onChange={(e) => { updateAmount(parseFloat(e.target.value))}} />
                  <p className="text-red-600 my-2">The amount in your chosen coin rate {" "}{amount && `$${(amount * rate).toLocaleString()}`}</p>  
                </div>
                <div className="mt-4 flex flex-col gap-y-1">
                    <label htmlFor="">Network</label>
                    <select onChange={(e: any) => updateNetwork(e.target.value)} name="network" id="network" className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none">
                      <option value="">Choose the network of the Transaction</option>
                      <option value={ updateCoin === "bitcoin" ? "BITCOIN" : updateCoin === "ethereum" ? "ERC20" : updateCoin === "binance" ? "BEP20" : updateCoin === "tron" ? "TRC20" : updateCoin === "usdtt" ? "TRC20" : updateCoin === "usdte" ? "ERC20" : updateCoin === "ada" ? "CARDANO" : updateCoin === "solana" ? "SOLANA" : updateCoin === "lite" ? "LITECOIN" : updateCoin === "doge" ? "DOGECOIN" : "COIN"}>
                        {updateCoin === "bitcoin" ? "BITCOIN" : updateCoin === "ethereum" ? "ERC20" : updateCoin === "binance" ? "BEP20" : updateCoin === "tron" ? "TRC20" : updateCoin === "usdtt" ? "TRC20" : updateCoin === "usdte" ? "ERC20" : updateCoin === "ada" ? "CARDANO" : updateCoin === "solana" ? "SOLANA" : updateCoin === "lite" ? "LITECOIN" : updateCoin === "doge" ? "DOGECOIN" : "COIN"}
                      </option>
                      <option value="ethereum (erc20)">Ethereum (ERC20)</option>
                      <option value="bnb smart chain">BNB Smart Chain (BEP20)</option>
                    </select>
                </div>
                <div className="mt-4 flex flex-col gap-y-1">
                    <label htmlFor="">Status of the Transaction</label> 
                    <select onChange={(e: any) => updateStatus(e.target.value)} name="network" id="network" className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none">
                        <option value="">Choose the status of the Transaction</option>
                        <option value="pending" className="text-[#DF930E]">Pending</option>
                        <option value="successful" className="text-[#026C3C]">Successful</option>
                        <option value="failed" className="text-[#C51D03]">Failed</option> 
                    </select>
                </div>
                <div className="mt-6">
                    <Button type="submit" text="Create Transaction" loading={loading}/>
                </div>
            </form>
        </main>
     );
}
 
export default TransactionForm;