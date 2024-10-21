const fetchPrices = (() => {
    let cachedPrices: any = null;
    let lastFetchTime = 0;
    const TTL = 180000; // 3 minutes in ms

    return async () => {
        const now = Date.now();
        if (!cachedPrices || now - lastFetchTime > TTL) {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,tron,tether,cardano,solana,litecoin,dogecoin&vs_currencies=usd&include_24hr_change=true'
                );
                const data = await response.json();
                cachedPrices = data;
                lastFetchTime = now;
            } catch (error) {
                console.error('Error fetching prices:', error);
                return null;
            }
        }
        return cachedPrices;
    };
})();

export default fetchPrices;
