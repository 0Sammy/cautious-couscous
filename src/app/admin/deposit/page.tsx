import getTransactions from "@/actions/getAllTransactions";


//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import AllDeposits from "@/components/AdminComponents/AllDeposits";


export const revalidate = 1;
const page = async () => {

    const transactions = await getTransactions();

    const depositTransactions = transactions.filter((transaction) => transaction.transactionType === 'deposit')

    return ( 
        <main>
            <AdminHeader page="Administration Transfer"/>
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4">
                <AllDeposits deposits={depositTransactions}/>
            </div>
        </main>
     );
}
 
export default page;