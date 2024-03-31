"use client"
import { useSelectionStore } from "@/store/selection";
import { usePriceStore } from "@/store/prices";
import { useBalanceStore } from "@/store/balance";

//Import Needed Components
import Card from "./Card";

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

const CompliedCards = () => {
    const {btcPrice, btcChangePercent, ethPrice, ethChangePercent, bnbPrice, bnbChangePercent, trxPrice, trxChangePercent, usdtPrice, usdtChangePercent, adaPrice, adaChangePercent, solPrice, solChangePercent, ltcPrice, ltcChangePercent, dogePrice, dogeChangePercent } = usePriceStore()
    const {updateCoin} = useSelectionStore()
    const {btcBalance, ethBalance, binanceBalance, tronBalance, usdttBalance, usdteBalance, adaBalance, solBalance, liteBalance, dogeBalance} = useBalanceStore()
    // Function to get the amount for a specific coin
const getCoinAmount = (coinName: string) => {
    switch (coinName) {
      case 'bitcoin':
        return btcBalance;
      case 'ethereum':
        return ethBalance;
      case 'binance':
        return binanceBalance;
      case 'tron':
        return tronBalance;
      case 'usdtt':
        return usdttBalance;
      case 'usdte':
        return usdteBalance;
      case 'ada':
        return adaBalance;
      case 'solana':
        return solBalance;
      case 'lite':
        return liteBalance;
      case 'doge':
        return dogeBalance;
      default:
        return 0;
    }
  };
  
  
  // Function to get the current price for a specific coin
  const getCoinCurrentPrice = (coinName: string) => {
    switch (coinName) {
      case 'bitcoin':
        return btcPrice;
      case 'ethereum':
        return ethPrice;
      case 'binance':
        return bnbPrice;
      case 'tron':
        return trxPrice;
      case 'usdtt':
      case 'usdte':
        return usdtPrice;
      case 'ada':
        return adaPrice;
      case 'solana':
        return solPrice;
      case 'lite':
        return ltcPrice;
      case 'doge':
        return dogePrice;
      default:
        return 0;
    }
  };
  
  // Function to get the current change percent for a specific coin
  const getCoinChangePercent = (coinName: string) => {
    switch (coinName) {
      case 'bitcoin':
        return btcChangePercent;
      case 'ethereum':
        return ethChangePercent;
      case 'binance':
        return bnbChangePercent;
      case 'tron':
        return trxChangePercent;
      case 'usdtt':
      case 'usdte':
        return usdtChangePercent;
      case 'ada':
        return adaChangePercent;
      case 'solana':
        return solChangePercent;
      case 'lite':
        return ltcChangePercent;
      case 'doge':
        return dogeChangePercent;
      default:
        return 0;
    }
  };
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
        <main className="mt-10 flex flex-col gap-y-5">
            {coins.map((coin) => (
              <div key={coin.name} onClick={() => updateCoin(coin.name)}>
                  <Card
                    coinName={coin.name === "usdtt" ? "USDT TRC(20)" : coin.name === "usdte" ? "USDT ERC(20)" : coin.name === "binance" ? "Binance Coin" : coin.name === "ada" ? "Cardano" : coin.name === "lite" ? "Lite coin" : coin.name}
                    balance={coin.balance.toLocaleString()}
                    amount={getCoinAmount(coin.name)}
                    coinShortForm={getCoinShortForm(coin.name)}
                    imgSrc={getCoinLogo(coin.name)}
                    currentPrice={getCoinCurrentPrice(coin.name)}
                    currentChangeIndex={getCoinChangePercent(coin.name)}
                  />
              </div>
            ))}
        </main>
    );
}
 
export default CompliedCards;

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

 // Function to get the short form for a specific coin
 const getCoinShortForm = (coinName: string) => {
    switch (coinName) {
      case 'bitcoin':
        return 'btc';
      case 'ethereum':
        return 'eth';
      case 'binance':
        return 'bnb';
      case 'tron':
        return 'trx';
      case 'usdtt':
      case 'usdte':
        return 'usdt';
      case 'ada':
        return 'Ada';
      case 'solana':
        return 'Sol';
      case 'lite':
        return 'LTC';
      case 'doge':
        return 'Doge';
      default:
        return '';
    }
  };

