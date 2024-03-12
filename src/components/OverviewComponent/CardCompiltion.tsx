"use client"
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
    
    const {updateCoin} = useSelectionStore()
    const {btcPrice, ethPrice, bnbPrice, trxPrice, usdtPrice, adaPrice, solPrice, ltcPrice, dogePrice } = usePriceStore()
    const {btcBalance, ethBalance, binanceBalance, tronBalance, usdttBalance, usdteBalance, adaBalance, solBalance, liteBalance, dogeBalance} = useBalanceStore()

    return ( 
        <main className="flex flex-col gap-y-5">
            <div onClick={() => updateCoin("bitcoin")}>
                <OverviewCard  coinName={"bitcoin"} balance= {(btcBalance * btcPrice).toLocaleString()} imgSrc={bitcoinLogo} />    
            </div>
            <div onClick={() => updateCoin("ethereum")}>
                <OverviewCard  coinName={"ethereum"} balance= {(ethBalance * ethPrice).toLocaleString()} imgSrc={ethLogo} />
            </div>
            <div onClick={() => updateCoin("binance")}>
                <OverviewCard  coinName={"bnb smart"} balance= {(binanceBalance * bnbPrice).toLocaleString()} imgSrc={bnbLogo} />
            </div>
            <div onClick={() => updateCoin("tron")}>
                <OverviewCard  coinName={"tron"} balance= {(tronBalance * trxPrice).toLocaleString()} imgSrc={tronLogo} />
            </div>
            <div onClick={() => updateCoin("usdtt")}>
                <OverviewCard  coinName={"usdt (trc20)"} balance= {(usdttBalance * usdtPrice).toLocaleString()} imgSrc={usdtLogo} />
            </div>
            <div onClick={() => updateCoin("usdte")}>
                <OverviewCard  coinName={"usdt (erc20)"} balance= {(usdteBalance * usdtPrice).toLocaleString()} imgSrc={usdtLogo} />
            </div>
            <div onClick={() => updateCoin("ada")}>
                <OverviewCard  coinName={"Cardano"} balance= {(adaBalance * adaPrice).toLocaleString()} imgSrc={cardanoLogo} />
            </div>
            <div onClick={() => updateCoin("solana")}>
                <OverviewCard  coinName={"Solana"} balance= {(solBalance * solPrice).toLocaleString()} imgSrc={solanaLogo} />
            </div>
            <div onClick={() => updateCoin("lite")}>
                <OverviewCard  coinName={"Litecoin"} balance= {(liteBalance * ltcPrice).toLocaleString()} imgSrc={litecoinLogo} />
            </div>
            <div onClick={() => updateCoin("doge")}>
                <OverviewCard  coinName={"Doge coin"} balance= {(dogeBalance * dogePrice).toLocaleString()} imgSrc={dogeLogo} />
            </div>
        </main>
     );
}
 
export default OverviewCardCompiled;