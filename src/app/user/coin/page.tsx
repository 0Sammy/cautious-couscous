//Import Needed Components
import CoinOverview from "@/components/CoinComponents/CoinOverview";
import TransactionHistory from "@/components/CoinComponents/TransactionHistory";


const page = () => {
    
    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <CoinOverview />
            <TransactionHistory />
        </main>
     );
}
 
export default page;