import getWallets from "@/actions/getWallets";
import getCurrentLoggedInUser from "@/actions/getCurrentUser";
import { getUserDetails } from "@/providers/userDetails";


//Import Needed Components
import CoinOverview from "@/components/CoinComponents/CoinOverview";
import TransactionHistory from "@/components/CoinComponents/TransactionHistory";
import Wallets from "@/components/CoinComponents/Wallets";

export const revalidate = 1
const page = async () => {

    const wallets = await getWallets()
    const { user } = await getUserDetails();
    const currentUser = await getCurrentLoggedInUser(user?.email)
    const userTransactions = currentUser?.transactions
    //console.log({wallets})
    
    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <Wallets wallets={wallets}/>
            <CoinOverview />
            <TransactionHistory transactions={userTransactions}/>
        </main>
     );
}
 
export default page;