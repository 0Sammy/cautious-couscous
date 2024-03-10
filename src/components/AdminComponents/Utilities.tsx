"use client"
import { FormEvent, useState } from "react";
import { useWalletStore } from "@/store/wallets";

//Import Needed Components
import WalletInput from "../molecules/WalletInput";

//Import Needed Icons
import { Bitcoin, Ethereum, BinanceCoin, Trontron, Tether, Cardano, Solana, Litecoin, Coin } from "iconsax-react";
import Button from "../molecules/Button";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

const Utilities = () => {

    const { depositMessage, btc, eth, usdte, usdtt, tron, bnb, ada, doge, litecoin, solana } = useWalletStore();
    const [loading, setLoading] = useState<boolean>(false)
    //The Input field state
    const [inputValues, setInputValues] = useState({
        btcWallet: btc,
        ethereumWallet: eth,
        bnbSmartChainWallet: bnb,
        tronWallet: tron,
        usdtErc20Wallet: usdte,
        usdtTrc20Wallet: usdtt,
        adaWallet: ada,
        solanaWallet: solana,
        litecoinWallet: litecoin,
        dogecoinWallet: doge,
        depositMessage: depositMessage,
      });

      //The onChange Function
      const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

      //OnSubmit Function
      const onSubmit = (event: FormEvent) => {

        event.preventDefault();
        setLoading(true)
        toast.info("Updating Wallets") 
               
        //console.log(inputValues)

        makeApiRequest("/updateWallets", "post", inputValues, {
            onSuccess: () => {
              // Handle success
              toast.success("New Wallets was updated successfully.")
              setLoading(false)
              window.location.reload();
            },
            onError: (error: any) => {
              // Handle error
      
              if (error.message === "Missing Fields") {
                toast.error("Missing fields, contact the developer.")
                setLoading(false)
                window.location.reload();
              }
              toast.error("Unable to update new wallets now, please try again later.")
              setLoading(false)
              window.location.reload();
            },
          });
    }
    return ( 
        <main className="text-xs md:text-sm xl:text-base">
            <div  className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto mt-10 px-4 md:px-6 xl:px-8 py-4 border border-[#7676801F] rounded-xl">
                <p className="font-semibold text-[#141619]">Utilities</p>
                <div className="mt-10">
                    <p className="text-sm md:text-base xl:text-lg font-semibold text-[#141619]">Current Wallets</p>
                    <div className="flex flex-col gap-y-4 mt-6">
                        <div className="flex gap-x-1 items-center">
                            <Bitcoin size="24" className=" shrink-0 text-[#F7931A]"/>
                            <p className="break-all">{btc}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <Ethereum size="24" className=" shrink-0 text-[#3C3C3D]"/>
                            <p className="break-all">{eth}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <BinanceCoin size="24" className=" shrink-0 text-[#F0B90B]"/>
                            <p className="break-all">{bnb}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <Trontron size="24" className=" shrink-0 text-[#29B6AF]"/>
                            <p className="break-all">{tron}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <Tether size="24" className=" shrink-0 text-[#3C3C3D]"/>
                            <p className="break-all">{usdte}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <Tether size="24" className=" shrink-0 text-[#26A17B]"/>
                            <p className="break-all">{usdtt}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <Cardano size="24" className=" shrink-0 text-[#3A4276]"/>
                            <p className="break-all">{ada}</p>
                        </div>
                        <div className="flex gap-x-1 items-center">
                            <Coin size="24" className=" shrink-0 text-[#C3A634]"/>
                            <p className="break-all">{doge}</p>
                        </div>
                       <div className="flex gap-x-1 items-center">
                            <Litecoin size="24" className=" shrink-0 text-[#A6A9AA]"/>
                            <p className="break-all">{litecoin}</p>
                       </div>
                        <div className="flex gap-x-1 items-center">
                            <Solana size="24" className=" shrink-0 text-[#00A4FF]"/>
                            <p className="break-all">{solana}</p>
                        </div>   
                        <div className="flex flex-col gap-y-1">
                            <p className="text-sm md:text-base xl:text-lg font-semibold text-[#141619]">Deposit Message</p>
                            <p>{depositMessage ? depositMessage : "There is no general deposit message"}</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm md:text-base xl:text-lg font-semibold text-[#141619] mt-10">Update Wallets and Message</p>
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-y-3 mt-4">
                        <WalletInput type="text" label="Enter your new BTC wallet" placeholder="Enter the new BTC wallet here" value={inputValues.btcWallet} id="btcWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new ETH wallet" placeholder="Enter the new ETH wallet here" value={inputValues.ethereumWallet} id="ethereumWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new BNB wallet" placeholder="Enter the new BNB wallet here" value={inputValues.bnbSmartChainWallet} id="bnbSmartChainWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new TRX wallet" placeholder="Enter the new TRX wallet here" value={inputValues.tronWallet} id="tronWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new USDT ERC20 wallet" placeholder="Enter the new USDT ERC20 wallet here" value={inputValues.usdtErc20Wallet} id="usdtErc20Wallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new USDT TRX20 wallet" placeholder="Enter the new USDT TRC20 wallet here" value={inputValues.usdtTrc20Wallet} id="usdtTrc20Wallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new ADA wallet" placeholder="Enter the new ADA wallet here" value={inputValues.adaWallet} id="adaWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new SOL wallet" placeholder="Enter the new SOL wallet here" value={inputValues.solanaWallet} id="solanaWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new LTC wallet" placeholder="Enter the new LTC wallet here" value={inputValues.litecoinWallet} id="litecoinWallet" onChange={handleInputChange}/>
                        <WalletInput type="text" label="Enter your new DOGE wallet" placeholder="Enter the new DOGE wallet here" value={inputValues.dogecoinWallet} id="dogecoinWallet" onChange={handleInputChange}/>
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="depositMessage">Enter your new Deposit Message Here</label>
                            <textarea value={inputValues.depositMessage} onChange={handleInputChange} placeholder="Enter your new General Message Here" name="depositMessage" id="depositMessage" className="h-44 resize-none border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"></textarea>

                        </div>
                    </div>
                    <div className="mt-4">
                        <Button text="Update Wallets and Messages" loading={loading} type="submit"/>
                    </div>
                </form>
            </div>
        </main>
     );
}
 
export default Utilities;