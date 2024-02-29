//Import Needed Components
import getWallets from "@/actions/getWallets";
import CoinOverview from "@/components/CoinComponents/CoinOverview";
import TransactionHistory from "@/components/CoinComponents/TransactionHistory";
import Wallets from "@/components/CoinComponents/Wallets";

export const revalidate = 1
const page = async () => {

    const wallets = await getWallets()
    //console.log({wallets})
    
    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <Wallets wallets={wallets}/>
            <CoinOverview />
            <TransactionHistory />
        </main>
     );
}
 
export default page;