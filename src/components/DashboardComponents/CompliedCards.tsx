"use client"
import { useSelectionStore } from "@/store/selection";
import { usePriceStore } from "@/store/prices";

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
    
      
    return ( 
        <main className="mt-10 flex flex-col gap-y-5">
            <div onClick={() => updateCoin("bitcoin")}>
                <Card coinName={"bitcoin"} balance= {"0"} amount={0} coinShortForm={"btc"} imgSrc={bitcoinLogo} currentPrice={btcPrice} currentChangeIndex= {btcChangePercent}/>
            </div>
            <div onClick={() => updateCoin("ethereum")}>
                <Card coinName={"ethereum"} balance= {"0"} amount={0} coinShortForm={"eth"} imgSrc={ethLogo} currentPrice={ethPrice} currentChangeIndex= {ethChangePercent}/>
            </div>
            <div onClick={() => updateCoin("binance")}>
                <Card coinName={"bnb smart"} balance= {"0"} amount={0} coinShortForm={"bnb"} imgSrc={bnbLogo} currentPrice={bnbPrice} currentChangeIndex= {bnbChangePercent}/>
            </div>
            <div onClick={() => updateCoin("tron")}>
                <Card coinName={"tron"} balance= {"0"} amount={0} coinShortForm={"trx"} imgSrc={tronLogo} currentPrice={trxPrice} currentChangeIndex= {trxChangePercent}/>
            </div>
            <div onClick={() => updateCoin("usdtt")}>
                <Card coinName={"usdt (trc20)"} balance= {"0"} amount={0} coinShortForm={"usdt (trc20)"} imgSrc={usdtLogo} currentPrice={usdtPrice} currentChangeIndex= {usdtChangePercent}/>
            </div>
            <div onClick={() => updateCoin("usdte")}>
                <Card coinName={"usdt (erc20)"} balance= {"0"} amount={0} coinShortForm={"usdt (erc20)"} imgSrc={usdtLogo} currentPrice={usdtPrice} currentChangeIndex= {usdtChangePercent}/>
            </div>
            <div onClick={() => updateCoin("ada")}>
                <Card coinName={"Cardano"} balance= {"0"} amount={0} coinShortForm={"Ada"} imgSrc={cardanoLogo} currentPrice={adaPrice} currentChangeIndex= {adaChangePercent}/>
            </div>
            <div onClick={() => updateCoin("solana")}>
                <Card coinName={"Solana"} balance= {"0"} amount={0} coinShortForm={"Sol"} imgSrc={solanaLogo} currentPrice={solPrice} currentChangeIndex= {solChangePercent}/>
            </div>
            <div onClick={() => updateCoin("lite")}>
                <Card coinName={"Litecoin"} balance= {"0"} amount={0} coinShortForm={"LTC"} imgSrc={litecoinLogo} currentPrice={ltcPrice} currentChangeIndex= {ltcChangePercent}/>
            </div>
            <div onClick={() => updateCoin("doge")}>
                <Card coinName={"Doge Coin"} balance= {"0"} amount={0} coinShortForm={"Doge"} imgSrc={dogeLogo} currentPrice={dogePrice} currentChangeIndex= {dogeChangePercent}/>
            </div>
        </main>
     );
}
 
export default CompliedCards;