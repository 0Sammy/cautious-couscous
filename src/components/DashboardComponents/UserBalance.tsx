"use client";
import { useEffect } from "react";
import { useBalanceStore } from "@/store/balance";

const UserBalance = ({ pendingTransaction, transactions }: any) => {
  const {
    updateBTC,
    updateETH,
    updateBNB,
    updateTRX,
    updateUSDTT,
    updateUSDTE,
    updateADA,
    updateSOL,
    updateLITE,
    updateDOGE,
    updatePendingTransaction,
  } = useBalanceStore();

  useEffect(() => {
    //Separate Each transactions
    const bitcoinTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const ethereumTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const binanceTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const tronTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const usdttTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const usdteTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const cardanoTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const solanaTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const litecoinTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const dogeTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };
    const coinTransactions: any = {
      deposit: 0,
      receive: 0,
      bonus: 0,
      earning: 0,
      penalty: 0,
    };

    //Check each transactions and push the correct deposit type, coin and amount to it
    transactions.forEach(
      (transaction: { coin: any; transactionType: any; amount: any }) => {
        const { coin, transactionType, amount } = transaction;
        if (coin === "bitcoin") {
          bitcoinTransactions[transactionType] += amount;
        } else if (coin === "ethereum") {
          ethereumTransactions[transactionType] += amount;
        } else if (coin === "binance") {
          binanceTransactions[transactionType] += amount;
        } else if (coin === "tron") {
          tronTransactions[transactionType] += amount;
        } else if (coin === "usdtt") {
          usdttTransactions[transactionType] += amount;
        } else if (coin === "usdte") {
          usdteTransactions[transactionType] += amount;
        } else if (coin === "ada") {
          cardanoTransactions[transactionType] += amount;
        } else if (coin === "solana") {
          solanaTransactions[transactionType] += amount;
        } else if (coin === "lite") {
          litecoinTransactions[transactionType] += amount;
        } else if (coin === "doge") {
          dogeTransactions[transactionType] += amount;
        } else {
          coinTransactions[transactionType] += amount;
        }
      }
    );

    //Get the each individual balances
    const btcBalance =
      bitcoinTransactions.receive +
      bitcoinTransactions.bonus +
      bitcoinTransactions.earning -
      (bitcoinTransactions.deposit + bitcoinTransactions.penalty);
      updateBTC(btcBalance)
      
    const ethBalance =
      ethereumTransactions.receive +
      ethereumTransactions.bonus +
      ethereumTransactions.earning -
      (ethereumTransactions.deposit + ethereumTransactions.penalty);
      updateETH(ethBalance)

    const bnbBalance =
      binanceTransactions.receive +
      binanceTransactions.bonus +
      binanceTransactions.earning -
      (binanceTransactions.deposit + binanceTransactions.penalty);
      updateBNB(bnbBalance)

    const trxBalance =
      tronTransactions.receive +
      tronTransactions.bonus +
      tronTransactions.earning -
      (tronTransactions.deposit + tronTransactions.penalty);
      updateTRX(trxBalance)

    const usdttBalance =
      usdttTransactions.receive +
      usdttTransactions.bonus +
      usdttTransactions.earning -
      (usdttTransactions.deposit + usdttTransactions.penalty);
      updateUSDTT(usdttBalance)

    const usdteBalance =
      usdteTransactions.receive +
      usdteTransactions.bonus +
      usdteTransactions.earning -
      (usdteTransactions.deposit + usdteTransactions.penalty);
      updateUSDTE(usdteBalance)

    const adaBalance =
      cardanoTransactions.receive +
      cardanoTransactions.bonus +
      cardanoTransactions.earning -
      (cardanoTransactions.deposit + cardanoTransactions.penalty);
      updateADA(adaBalance)

    const solBalance =
      solanaTransactions.receive +
      solanaTransactions.bonus +
      solanaTransactions.earning -
      (solanaTransactions.deposit + solanaTransactions.penalty);
      updateSOL(solBalance)

    const ltcBalance =
      litecoinTransactions.receive +
      litecoinTransactions.bonus +
      litecoinTransactions.earning -
      (litecoinTransactions.deposit + litecoinTransactions.penalty);
      updateLITE(ltcBalance)

    const dogeBalance =
      dogeTransactions.receive +
      dogeTransactions.bonus +
      dogeTransactions.earning -
      (dogeTransactions.deposit + dogeTransactions.penalty);
      updateDOGE(dogeBalance)

    //Check if there is a pending transactions

    if(pendingTransaction > 0) {
      updatePendingTransaction(true)
    }
    
  }, [transactions, updateADA, updateBNB, updateBTC, updateDOGE, updateETH, updateLITE, updateSOL, updateTRX, updateUSDTE, updateUSDTT]);

  return <main></main>;
};

export default UserBalance;
