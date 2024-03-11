import getTransactions from "@/actions/getAllTransactions";



//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import AllBonus from "@/components/AdminComponents/AllBonus";


export const revalidate = 1;
const page = async () => {

    const transactions = await getTransactions();
    const bonusTransactions = transactions.filter((transaction) => transaction.transactionType === 'bonus')

    return ( 
        <main>
            <AdminHeader page="Administration Bonus"/>
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4">
                <AllBonus bonuses={bonusTransactions} />
            </div>
        </main>
     );
}
 
export default page;