// store/prices.ts
import { create } from 'zustand';

type PriceStore = {
  btcPrice: number;
  ethPrice: number;
  bnbPrice: number;
  trxPrice: number;
  usdtPrice: number;
  adaPrice: number;
  solPrice: number;
  ltcPrice: number;
  dogePrice: number;
  btcPercent: number;
  ethPercent: number;
  bnbPercent: number;
  trxPercent: number;
  usdtPercent: number;
  adaPercent: number;
  solPercent: number;
  ltcPercent: number;
  dogePercent: number;
  updatePrices: (prices: any) => void;
};

export const usePriceStore = create<PriceStore>((set) => ({
  btcPrice: 0,
  ethPrice: 0,
  bnbPrice: 0,
  trxPrice: 0,
  usdtPrice: 0,
  adaPrice: 0,
  solPrice: 0,
  ltcPrice: 0,
  dogePrice: 0,
  btcPercent: 0,
  ethPercent: 0,
  bnbPercent: 0,
  trxPercent: 0,
  usdtPercent: 0,
  adaPercent: 0,
  solPercent: 0,
  ltcPercent: 0,
  dogePercent: 0,
  updatePrices: (data) => set({
    btcPrice: data?.bitcoin?.usd || 0,
    btcPercent: data?.bitcoin?.usd_24h_change || 0,
    ethPrice: data?.ethereum?.usd || 0,
    ethPercent: data?.ethereum?.usd_24h_change || 0,
    bnbPrice: data?.binancecoin?.usd || 0,
    bnbPercent: data?.binancecoin?.usd_24h_change || 0,
    trxPrice: data?.tron?.usd || 0,
    trxPercent: data?.tron?.usd_24h_change || 0,
    usdtPrice: data?.tether?.usd || 0,
    usdtPercent: data?.tether?.usd_24h_change || 0,
    adaPrice: data?.cardano?.usd || 0,
    adaPercent: data?.cardano?.usd_24h_change || 0,
    solPrice: data?.solana?.usd || 0,
    solPercent: data?.solana?.usd_24h_change || 0,
    ltcPrice: data?.litecoin?.usd || 0,
    ltcPercent: data?.litecoin?.usd_24h_change || 0,
    dogePrice: data?.dogecoin?.usd || 0,
    dogePercent: data?.dogecoin?.usd_24h_change || 0,
  }),
}));
