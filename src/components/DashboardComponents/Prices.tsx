"use client"
import { useEffect } from "react";
import { usePriceStore } from "@/store/prices";
import { useBalanceStore } from "@/store/balance";

const Prices = ({pending}: {pending : number}) => {
    const { 
        updateBtcPrice, updateBtcPercent, updateEthPrice, updateEthPercent, 
        updateBnbPrice, updateBnbPercent, updateTrxPrice, updateTrxPercent, 
        updateUsdtPrice, updateUsdtPercent, updateAdaPrice, updateAdaPercent, 
        updateSolPrice, updateSolPercent, updateLtcPrice, updateLtcPercent, 
        updateDogePrice, updateDogePercent, btcPrice
    } = usePriceStore();

    const { updatePendingTransaction } = useBalanceStore();
        
    // Fetch the prices
    useEffect(() => {
        if (btcPrice === 0) {

            if(pending > 0){
                updatePendingTransaction(true)
            }
            
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tron,tether,cardano,solana,litecoin,dogecoin&vs_currencies=usd&include_24hr_change=true'
                    );

                    const data = await response.json();
                    updateBtcPrice(data?.bitcoin?.usd);
                    updateBtcPercent(data?.bitcoin?.usd_24h_change);
                    updateEthPrice(data?.ethereum?.usd);
                    updateEthPercent(data?.ethereum?.usd_24h_change);
                    updateBnbPrice(data?.binancecoin?.usd);
                    updateBnbPercent(data?.binancecoin?.usd_24h_change);
                    updateTrxPrice(data?.tron?.usd);
                    updateTrxPercent(data?.tron?.usd_24h_change);
                    updateUsdtPrice(data?.tether?.usd);
                    updateUsdtPercent(data?.tether?.usd_24h_change);
                    updateAdaPrice(data?.cardano?.usd);
                    updateAdaPercent(data?.cardano?.usd_24h_change);
                    updateSolPrice(data?.solana?.usd);
                    updateSolPercent(data?.solana?.usd_24h_change);
                    updateLtcPrice(data?.litecoin?.usd);
                    updateLtcPercent(data?.litecoin?.usd_24h_change);
                    updateDogePrice(data?.dogecoin?.usd);
                    updateDogePercent(data?.dogecoin?.usd_24h_change);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [btcPrice, pending, updateAdaPercent, updateAdaPrice, updateBnbPercent, updateBnbPrice, updateBtcPercent, updateBtcPrice, updateDogePercent, updateDogePrice, updateEthPercent, updateEthPrice, updateLtcPercent, updateLtcPrice, updatePendingTransaction, updateSolPercent, updateSolPrice, updateTrxPercent, updateTrxPrice, updateUsdtPercent, updateUsdtPrice]);

    return (
        <main></main>
    );
}

export default Prices;
