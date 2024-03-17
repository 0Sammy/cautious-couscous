"use client"
//Needed Icons
import { usePriceStore } from "@/store/prices";
import { Bitcoin, Ethereum, BinanceCoin, Trontron, Tether, Cardano, Solana, Litecoin, Coin } from "iconsax-react";

const UsersAccountSummary = ({transactions}:  any) => {

    const {btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice } = usePriceStore()

    const bitcoinTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const ethereumTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const binanceTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const tronTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const usdttTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const usdteTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const cardanoTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const solanaTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const litecoinTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const dogeTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      };
      const coinTransactions: any = {
        deposit: 0,
        receive: 0,
        bonus: 0,
        earning: 0,
        penalty: 0,
      }
      transactions.forEach((transaction: { coin: any; transactionType: any; amount: any; }) => {
        const { coin, transactionType, amount } = transaction;
        if (coin === 'bitcoin') {
          bitcoinTransactions[transactionType] += amount;
        }else if (coin === "ethereum") {
            ethereumTransactions[transactionType] += amount; 
        } else if (coin === "binance") {
            binanceTransactions[transactionType] += amount;
        } else if (coin === "tron") {
            tronTransactions[transactionType] += amount;
        } else if (coin === "usdtt") {
            usdttTransactions[transactionType] += amount;
        }else if (coin === "usdte") {
            usdteTransactions[transactionType] += amount;
        }else if (coin === "ada") {
            cardanoTransactions[transactionType] += amount;
        }else if (coin === "solana") {
            solanaTransactions[transactionType] += amount;
        }else if (coin === "lite") {
            litecoinTransactions[transactionType] += amount;
        }else if (coin === "doge") {
            dogeTransactions[transactionType] += amount;
        } else {
            coinTransactions[transactionType] += amount;
        }
      }); 

      const btcBalance = (bitcoinTransactions.receive + bitcoinTransactions.bonus + bitcoinTransactions.earning) - (bitcoinTransactions.deposit + bitcoinTransactions.penalty)
      const ethBalance = (ethereumTransactions.receive + ethereumTransactions.bonus + ethereumTransactions.earning) - (ethereumTransactions.deposit + ethereumTransactions.penalty)
      const bnbBalance = (binanceTransactions.receive + binanceTransactions.bonus + binanceTransactions.earning) - (binanceTransactions.deposit + binanceTransactions.penalty)
      const trxBalance = (tronTransactions.receive + tronTransactions.bonus + tronTransactions.earning) - (tronTransactions.deposit + tronTransactions.penalty)
      const usdttBalance = (usdttTransactions.receive + usdttTransactions.bonus + usdttTransactions.earning) - (usdttTransactions.deposit + usdttTransactions.penalty)
      const usdteBalance = (usdteTransactions.receive + usdteTransactions.bonus + usdteTransactions.earning) - (usdteTransactions.deposit + usdteTransactions.penalty)
      const adaBalance = (cardanoTransactions.receive + cardanoTransactions.bonus + cardanoTransactions.earning) - (cardanoTransactions.deposit + cardanoTransactions.penalty)
      const solBalance = (solanaTransactions.receive + solanaTransactions.bonus + solanaTransactions.earning) - (solanaTransactions.deposit + solanaTransactions.penalty)
      const ltcBalance = (litecoinTransactions.receive + litecoinTransactions.bonus + litecoinTransactions.earning) - (litecoinTransactions.deposit + litecoinTransactions.penalty)
      const dogeBalance = (dogeTransactions.receive + dogeTransactions.bonus + dogeTransactions.earning) - (dogeTransactions.deposit + dogeTransactions.penalty)

    return ( 
        <main className="border border-[#7676801F] rounded-xl w-full  px-4 md:px-6 xl:px-8 py-4 mt-8 text-xs md:text-sm xl:text-base">
            <p className="font-semibold">Individual Coin Balances</p>
            <div className="flex gap-3 xl:gap-5 flex-wrap mt-6">
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Bitcoin size="24" className="text-[#F7931A]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{btcBalance}</p>
                    </div>
                    <p className="text-white">Bitcoin</p>
                    <p className="font-semibold text-green-400">{`$${(btcBalance * btcPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Ethereum size="24" className="text-[#3f3f3c]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{ethBalance}</p>
                    </div>
                    <p className="text-white">Ethereum</p>
                    <p className="font-semibold text-green-400">{`$${(ethBalance * ethPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <BinanceCoin size="24" className="text-[#F0B90B]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{bnbBalance}</p>
                    </div>
                    <p className="text-white">Binancecoin</p>
                    <p className="font-semibold text-green-400">{`$${(bnbBalance * bnbPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Trontron size="24" className="text-[#29B6AF]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{trxBalance}</p>
                    </div>
                    <p className="text-white">Tron</p>  
                    <p className="font-semibold text-green-400">{`$${(trxBalance * trxPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Tether size="24" className="text-[#3f3f3c]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{usdteBalance}</p>
                    </div>
                    <p className="text-white">USDT ERC20</p>
                    <p className="font-semibold text-green-400">{`$${(usdteBalance * usdtPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Tether size="24" className="text-[#26A17B]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{usdttBalance}</p>
                    </div>
                    <p className="text-white">USDT TRC20</p>
                    <p className="font-semibold text-green-400">{`$${(usdttBalance * usdtPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                   <div className="flex gap-x-2 items-center">
                        <Cardano size="24" className="text-[#3A4276]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{adaBalance}</p>
                    </div>
                    <p className="text-white">Cardano</p> 
                    <p className="font-semibold text-green-400">{`$${(adaBalance * adaPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Solana size="24" className="text-[#00A4FF]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{solBalance}</p>
                    </div> 
                    <p className="text-white">Solana</p> 
                    <p className="font-semibold text-green-400">{`$${(solBalance * solPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Litecoin size="24" className="text-[#A6A9AA]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{ltcBalance}</p>
                    </div>  
                    <p className="text-white">Litecoin</p>
                    <p className="font-semibold text-green-400">{`$${(ltcBalance * ltcPrice).toFixed(2)}`}</p>
                </div>
                <div className="flex flex-col gap-y-1 items-center border border-slate-300 rounded-md p-2">
                    <div className="flex gap-x-2 items-center">
                        <Coin size="24" className="text-[#C3A634]"/>
                        <p className="text-sm md:text-base xl:text-lg font-semibold text-[#F0F0F0]">{dogeBalance}</p>
                    </div>
                    <p className="text-white">Dogecoin</p>
                    <p className="font-semibold text-green-400">{`$${(dogeBalance * dogePrice).toFixed(2)}`}</p>
                </div>
            </div>
            
        </main>
     );
}
 
export default UsersAccountSummary;