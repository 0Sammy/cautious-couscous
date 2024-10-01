import getTransactions from "@/actions/getAllTransactions";


//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import AllPenalty from "@/components/AdminComponents/AllPenalty";


export const revalidate = 0;
const page = async () => {

    const transactions = await getTransactions();
    const penaltyTransactions = transactions.filter((transaction) => transaction.transactionType === 'penalty')

    return ( 
        <main>
            <AdminHeader page="Administration Penalty"/>
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4">
                <AllPenalty penalties={penaltyTransactions}/>
            </div>
        </main>
     );
}
 
export default page;