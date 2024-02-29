"use client"
import { useEffect } from "react";
import { useWalletStore } from "@/store/wallets";

const Wallets = ({wallets}: any) => {

    const {updateBTC, updateETH, updateUSDTE, updateUSDTT, updateTRON, updateBNB, updateADA, updateDOGE, updateLITECOIN, updateSOLANA, updateDepositMessage} = useWalletStore()
    //Update the wallets
    useEffect(() => {
        if (wallets) {

        updateBTC(wallets.btcWallet)
        updateETH(wallets.ethereumWallet)
        updateUSDTE(wallets.usdtErc20Wallet)
        updateUSDTT(wallets.usdtTrc20Wallet)
        updateTRON(wallets.tronWallet)
        updateBNB(wallets.bnbSmartChainWallet)
        updateADA(wallets.adaWallet)
        updateDOGE(wallets.dogecoinWallet)
        updateLITECOIN(wallets.litecoinWallet)
        updateSOLANA(wallets.litecoinWallet)

        if (wallets.depositMessage) {
            updateDepositMessage (wallets.depositMessage)
        }
    }
    },[updateADA, updateBNB, updateBTC, updateDOGE, updateDepositMessage, updateETH, updateLITECOIN, updateSOLANA, updateTRON, updateUSDTE, updateUSDTT, wallets])
    
    
    return ( 
        <main>
            
        </main>
     );
}
 
export default Wallets;