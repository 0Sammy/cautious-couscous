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


const CompliedCards = () => {
  const {updateCoin} = useSelectionStore()
   const [coinList, setCoinList] = useState<any>([""])

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
    //           method: "POST",
    //           headers: ({
    //             'CMC_PRO_API_KEY': "be71b9f8-b896-4e66-84a5-b35238b85400",
    //           }),
              
    //         });
      
    //         const data = await response.json();
    //         setCoinList(data)
    //         console.log(data);
    //       } catch (error) {
    //         console.error("Error fetching data:", error);
    //       }
    //     };
      
    //     fetchData();
    //   }, []);
      
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
            
        </main>
     );
}
 
export default CompliedCards;