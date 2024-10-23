"use client";

import { useEffect } from 'react';

//Store
import { usePriceStore } from '@/store/prices';

//Libs
import fetchPrices from '@/lib/fetchPrices';

const AdminPrices = () => {

    const { updatePrices } = usePriceStore();

    useEffect(() => {

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
    }, [updatePrices]);

    return <main></main>;
};

export default AdminPrices;
