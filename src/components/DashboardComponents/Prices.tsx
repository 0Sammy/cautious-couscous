"use client";

import { useEffect } from 'react';

//Store
import { usePriceStore } from '@/store/prices';
import { useBalanceStore } from '@/store/balance';

//Libs
import fetchPrices from '@/lib/fetchPrices';

const Prices = ({ pending }: { pending: number }) => {

    const { updatePrices } = usePriceStore();
    const { updatePendingTransaction } = useBalanceStore();

    useEffect(() => {
        if (pending > 0) {
            updatePendingTransaction(true);
        }

        const updateCryptoPrices = async () => {
            const data = await fetchPrices();
            if (data) {
                updatePrices(data);
            }
        };

        // Fetch prices initially
        updateCryptoPrices();

        // Set an interval to fetch prices every 3 minutes
        const interval = setInterval(updateCryptoPrices, 180000); // 3 minutes
        return () => clearInterval(interval);
    }, [pending, updatePendingTransaction, updatePrices]);

    return <main></main>;
};

export default Prices;
