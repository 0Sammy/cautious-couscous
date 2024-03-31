"use client"
import { useState, useEffect } from 'react';
import { useSelectionStore } from "@/store/selection";
import { usePriceStore } from "@/store/prices";
import { useBalanceStore } from "@/store/balance";

//Import Needed Components
import OverviewCard from "./OverviewCard";

//Import Needed Images
import bitcoinLogo from "../../../public/Images/bitcoin.svg";
import ethLogo from "../../../public/Images/eth.svg";
import bnbLogo from "../../../public/Images/bnb.svg";
import tronLogo from "../../../public/Images/tron.svg";
import usdtLogo from "../../../public/Images/usdt.svg";
import cardanoLogo from "../../../public/Images/cardano.png";
import solanaLogo from "../../../public/Images/solana.png";
import litecoinLogo from "../../../public/Images/litecoin.png";
import dogeLogo from "../../../public/Images/doge.png";

const OverviewCardCompiled = () => {
    const {updateCoin} = useSelectionStore();
    const {btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice} = usePriceStore();
    const {btcBalance, ethBalance, binanceBalance, tronBalance, usdttBalance, usdteBalance, adaBalance, solBalance, liteBalance, dogeBalance} = useBalanceStore();
  
    // Define an array of coin objects with their respective balances
    const coins = [
      { name: 'bitcoin', balance: btcBalance * btcPrice },
      { name: 'ethereum', balance: ethBalance * ethPrice },
      { name: 'binance', balance: binanceBalance * bnbPrice },
      { name: 'tron', balance: tronBalance * trxPrice },
      { name: 'usdtt', balance: usdttBalance * usdtPrice },
      { name: 'usdte', balance: usdteBalance * usdtPrice },
      { name: 'ada', balance: adaBalance * adaPrice },
      { name: 'solana', balance: solBalance * solPrice },
      { name: 'lite', balance: liteBalance * ltcPrice },
      { name: 'doge', balance: dogeBalance * dogePrice }
    ];
  
    // Sort the coins array in descending order based on balance
    coins.sort((a, b) => b.balance - a.balance);
  
    return (
      <main className="flex flex-col gap-y-5">
        {coins.map((coin) => (
          <div key={coin.name} onClick={() => updateCoin(coin.name)}>
            <OverviewCard
              coinName={coin.name === "usdtt" ? "USDT TRC(20)" : coin.name === "usdte" ? "USDT ERC(20)" : coin.name === "binance" ? "Binance Coin" : coin.name === "ada" ? "Cardano" : coin.name === "lite" ? "Lite coin" : coin.name}
              balance={coin.balance.toLocaleString()}
              imgSrc={getCoinLogo(coin.name)}
            />
          </div>
        ))}
      </main>
    );
};
 
export default OverviewCardCompiled;

// Function to get the logo for a specific coin
const getCoinLogo = (coinName: string) => {
  switch (coinName) {
    case 'bitcoin':
      return bitcoinLogo;
    case 'ethereum':
      return ethLogo;
    case 'binance':
      return bnbLogo;
    case 'tron':
      return tronLogo;
    case 'usdtt':
    case 'usdte':
      return usdtLogo;
    case 'ada':
      return cardanoLogo;
    case 'solana':
      return solanaLogo;
    case 'lite':
      return litecoinLogo;
    case 'doge':
      return dogeLogo;
    default:
      return '';
  }
};
