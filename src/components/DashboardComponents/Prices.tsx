"use client"
import { useEffect } from "react";
import { usePriceStore } from "@/store/prices";

const Prices = () => {
    const { updateBtcPrice, updateBtcPercent, updateEthPrice, updateEthPercent, updateBnbPrice, updateBnbPercent, updateTrxPrice, updateTrxPercent, updateUsdtPrice, updateUsdtPercent, updateAdaPrice, 
        updateAdaPercent, updateSolPrice, updateSolPercent, updateLtcPrice, updateLtcPercent, updateDogePrice, updateDogePercent } = usePriceStore()
    //Fetch the prices
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tron,tether,cardano,solana,litecoin,dogecoin&vs_currencies=usd&include_24hr_change=true'
                );

                const data = await response.json();
                updateBtcPrice (data?.bitcoin?.usd)
                updateBtcPercent (data?.bitcoin?.usd_24h_change)
                updateEthPrice (data?.ethereum?.usd)
                updateEthPercent (data?.ethereum?.usd_24h_change)
                updateBnbPrice (data?.binancecoin?.usd)
                updateBnbPercent (data?.binancecoin?.usd_24h_change)
                updateTrxPrice (data?.tron?.usd)
                updateTrxPercent (data?.tron?.usd_24h_change)
                updateUsdtPrice (data?.tether?.usd)
                updateUsdtPercent (data?.tether?.usd_24h_change)
                updateAdaPrice (data?.cardano?.usd)
                updateAdaPercent (data?.cardano?.usd_24h_change)
                updateSolPrice (data?.solana?.usd)
                updateSolPercent (data?.solana?.usd_24h_change)
                updateLtcPrice (data?.litecoin?.usd)
                updateLtcPercent (data?.litecoin?.usd_24h_change)
                updateDogePrice (data?.dogecoin?.usd)
                updateDogePercent (data?.dogecoin?.usd_24h_change)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    });

    return (
        <main>

        </main>
    );
}

export default Prices;