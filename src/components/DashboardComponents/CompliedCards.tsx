"use client"
import { useState, useEffect } from "react";
//Import Needed Components
import Card from "./Card";

//Import Needed Images
import bitcoinLogo from "../../../public/Images/bitcoin.svg";
import ethLogo from "../../../public/Images/eth.svg";
import bnbLogo from "../../../public/Images/bnb.svg";
import tronLogo from "../../../public/Images/tron.svg";
import usdtLogo from "../../../public/Images/usdt.svg";


const CompliedCards = () => {

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
            console.log(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);
      
    return ( 
        <main className="mt-10 flex flex-col gap-y-5">
            <div>
                <Card coinName={"bitcoin"} balance= {"10,000"} amount={2} coinShortForm={"btc"} imgSrc={bitcoinLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div>
                <Card coinName={"ethereum"} balance= {"10,000"} amount={2} coinShortForm={"eth"} imgSrc={ethLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div>
                <Card coinName={"bnb smart"} balance= {"10,000"} amount={2} coinShortForm={"bnb"} imgSrc={bnbLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div>
                <Card coinName={"tron"} balance= {"10,000"} amount={2} coinShortForm={"trx"} imgSrc={tronLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div>
                <Card coinName={"usdt (trc20)"} balance= {"10,000"} amount={2} coinShortForm={"usdt (trc20)"} imgSrc={usdtLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            <div>
                <Card coinName={"usdt (erc20)"} balance= {"10,000"} amount={2} coinShortForm={"usdt (erc20)"} imgSrc={usdtLogo} currentPrice={51000} currentChangeIndex= {-5.6}/>
            </div>
            
        </main>
     );
}
 
export default CompliedCards;