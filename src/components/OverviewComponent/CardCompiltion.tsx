"use client"
import { useSelectionStore } from "@/store/selection";

//Import Needed Components
import OverviewCard from "./OverviewCard";

//Import Needed Images
import bitcoinLogo from "../../../public/Images/bitcoin.svg";
import ethLogo from "../../../public/Images/eth.svg";
import bnbLogo from "../../../public/Images/bnb.svg";
import tronLogo from "../../../public/Images/tron.svg";
import usdtLogo from "../../../public/Images/usdt.svg";
import cardanoLogo from "../../../public/Images/cardano.png";


const OverviewCardCompiled = () => {
    
    const {updateCoin} = useSelectionStore()

    return ( 
        <main className="flex flex-col gap-y-5">
            <div onClick={() => updateCoin("bitcoin")}>
                <OverviewCard  coinName={"bitcoin"} balance= {"10,000"} imgSrc={bitcoinLogo} />    
            </div>
            <div onClick={() => updateCoin("ethereum")}>
                <OverviewCard  coinName={"ethereum"} balance= {"10,000"} imgSrc={ethLogo} />
            </div>
            <div onClick={() => updateCoin("binance")}>
                <OverviewCard  coinName={"bnb smart"} balance= {"10,000"} imgSrc={bnbLogo} />
            </div>
            <div onClick={() => updateCoin("tron")}>
                <OverviewCard  coinName={"tron"} balance= {"10,000"} imgSrc={tronLogo} />
            </div>
            <div onClick={() => updateCoin("usdtt")}>
                <OverviewCard  coinName={"usdt (trc20)"} balance= {"10,000"} imgSrc={usdtLogo} />
            </div>
            <div onClick={() => updateCoin("usdte")}>
                <OverviewCard  coinName={"usdt (erc20)"} balance= {"10,000"} imgSrc={usdtLogo} />
            </div>
            <div onClick={() => updateCoin("ada")}>
                <OverviewCard  coinName={"Cardano"} balance= {"10,000"} imgSrc={cardanoLogo} />
            </div>
        </main>
     );
}
 
export default OverviewCardCompiled;