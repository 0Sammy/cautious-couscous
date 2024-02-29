"use client"
import { useState } from "react";
import { useSelectionStore } from "@/store/selection";

//Import Needed Components
import Input from "@/components/molecules/Input";
import Button from "@/components/molecules/Button";

//Import Needed Icons
import { CloseSquare } from "iconsax-react";

type modalProps = {
    toggleFunction?: ()=> void
}


const SendingForm = ({toggleFunction}: modalProps) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [enteredAddress, setEnteredAddress] = useState<any>()
    const [enteredAmount, setEnteredAmount] = useState<any>()
    const {coin} = useSelectionStore()
    const rate = 57000
    return ( 
        <main className="text-xs md:text-sm xl:text-base p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
                <p className="uppercase font-semibold mt-2 mb-4">SEND {coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ETHEREUM" : coin === "BINANCE COIN" ? "BNB" : coin === "tron" ? "TRON" : coin === "usdtt" ? "usdt (trc20)" : coin === "usdte" ? "usdt (erc20)" : coin === "ada" ? "CARDANO" : coin === "solana" ? "Solana" : coin === "lite" ? "Litecoin" : coin === "doge" ? "DOGE" : "coin"} TO ANY WALLET.</p>
                <div className="bg-[#F0F0F0] px-2 md:px-4 xl:px-6 rounded-md py-3 mt-2">
                    <p className="uppercase">{coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ETHEREUM" : coin === "BINANCE COIN" ? "BNB" : coin === "tron" ? "TRON" : coin === "usdtt" ? "usdt (trc20)" : coin === "usdte" ? "usdt (erc20)" : coin === "ada" ? "CARDANO" : coin === "solana" ? "Solana" : coin === "lite" ? "Litecoin" : coin === "doge" ? "DOGE" : "coin"}</p>  
                </div>
                <div className="mt-6">
                    <Input id="amount" value={enteredAmount} onChange={(e) => { setEnteredAmount(e.target.value)}} label={`Enter amount in ${coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ETHEREUM" : coin === "BINANCE COIN" ? "BNB" : coin === "tron" ? "TRON" : coin === "usdtt" ? "USDT (TRC20)" : coin === "usdte" ? "USDT (ERC20)" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGE" : "coin"} value`} type="number" placeholder={`Enter Amount In ${coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ETHEREUM" : coin === "BINANCE COIN" ? "BNB" : coin === "tron" ? "TRON" : coin === "usdtt" ? "USDT (TRC20)" : coin === "usdte" ? "USDT (ERC20)" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGE" : "coin"} Equivalent`}/>
                </div>
                <div className="mt-6 flex gap-x-5 text-green-600">
                    You will receive {enteredAmount && `$${(enteredAmount * rate).toLocaleString()}`}
                </div>
                <div className="mt-6">
                    <Input type="text" id="wallet" value={enteredAddress} onChange={(e) => { setEnteredAddress(e.target.value)}} label="Wallet Address" placeholder={`Enter ${coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ETHEREUM" : coin === "BINANCE COIN" ? "BNB" : coin === "tron" ? "TRON" : coin === "usdtt" ? "USDT (TRC20)" : coin === "usdte" ? "USDT (ERC20)" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGE" : "coin"} Wallet`}/>
                </div>
                <div className="mt-6 flex flex-col gap-y-1 text-xs sm:text-sm xl:text-base">
                    <label htmlFor="">Network</label>
                    <select name="network" id="network" className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none">
                        <option value={coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ERC20" : coin === "binance" ? "BEP20" : coin === "tron" ? "TRC20" : coin === "usdtt" ? "TRC20" : coin === "usdte" ? "ERC20" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGECOIN" : "BITCOIN"}>{coin === "bitcoin" ? "BITCOIN" : coin === "ethereum" ? "ERC20" : coin === "binance" ? "BEP20" : coin === "tron" ? "TRC20" : coin === "usdtt" ? "TRC20" : coin === "usdte" ? "ERC20" : coin === "ada" ? "CARDANO" : coin === "solana" ? "SOLANA" : coin === "lite" ? "LITECOIN" : coin === "doge" ? "DOGECOIN" : "BITCOIN"}</option>
                        <option value="ethereum (erc20)">Ethereum (ERC20)</option>
                        <option value="bnb smart chain">BNB Smart Chain (BEP20)</option>
                    </select>
                </div>
                <div className="mt-10">
                    <Button type="submit" text="Continue" loading={loading}/>
                </div>
            </div>
        </main>
     );
}
 
export default SendingForm;