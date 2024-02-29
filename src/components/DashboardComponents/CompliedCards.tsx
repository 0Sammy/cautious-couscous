"use client"
import { useState, useEffect } from "react";
import { useSelectionStore } from "@/store/selection";

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
  const {updateCoin} = useSelectionStore()
   const [coinList, setCoinList] = useState<any>([""])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://api.livecoinwatch.com/coins/list", {
              method: "POST",
              headers: new Headers({
                "content-type": "application/json",
                "x-api-key": "bb365a6e-e8eb-47ae-90aa-0da9969e09a9",
              }),
              body: JSON.stringify({
                currency: "USD",
                sort: "rank",
                order: "ascending",
                offset: 0,
                limit: 10,
                meta: false,
              }),
            });
      
            const data = await response.json();
            setCoinList(data)
            console.log(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);
      
    return ( 
        <main className="mt-10 flex flex-col gap-y-5">
            <div onClick={() => updateCoin("bitcoin")}>
                <Card coinName={"bitcoin"} balance= {"10,000"} amount={2} coinShortForm={"btc"} imgSrc={bitcoinLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("ethereum")}>
                <Card coinName={"ethereum"} balance= {"10,000"} amount={2} coinShortForm={"eth"} imgSrc={ethLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("binance")}>
                <Card coinName={"bnb smart"} balance= {"10,000"} amount={2} coinShortForm={"bnb"} imgSrc={bnbLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("tron")}>
                <Card coinName={"tron"} balance= {"10,000"} amount={2} coinShortForm={"trx"} imgSrc={tronLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("usdtt")}>
                <Card coinName={"usdt (trc20)"} balance= {"10,000"} amount={2} coinShortForm={"usdt (trc20)"} imgSrc={usdtLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("usdte")}>
                <Card coinName={"usdt (erc20)"} balance= {"10,000"} amount={2} coinShortForm={"usdt (erc20)"} imgSrc={usdtLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("ada")}>
                <Card coinName={"Cardano"} balance= {"10,000"} amount={2} coinShortForm={"Ada"} imgSrc={cardanoLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("solana")}>
                <Card coinName={"Solana"} balance= {"10,000"} amount={2} coinShortForm={"Sol"} imgSrc={solanaLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("lite")}>
                <Card coinName={"Litecoin"} balance= {"10,000"} amount={2} coinShortForm={"LTC"} imgSrc={litecoinLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div onClick={() => updateCoin("doge")}>
                <Card coinName={"Doge Coin"} balance= {"10,000"} amount={2} coinShortForm={"Doge"} imgSrc={dogeLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
        </main>
     );
}
 
export default CompliedCards;