import getTransactions from "@/actions/getAllTransactions";


//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import AllPenalty from "@/components/AdminComponents/AllPenalty";


export const revalidate = 1;
const page = async () => {

    const transactions = await getTransactions();
    const penaltyTransactions = transactions.filter((transaction) => transaction.transactionType === 'penalty')

    return ( 
        <main>
            <AllPenalty penalties={penaltyTransactions}/>
        </main>
     );
}
 
export default page;