import getTransactions from "@/actions/getAllTransactions";


//Import Needed Components
import AllDeposits from "@/components/AdminComponents/AllDeposits";
import AdminHeader from "@/components/molecules/AdminHeader";


const page = async () => {

    const transactions = await getTransactions();

    const depositTransactions = transactions.filter((transaction) => transaction.transactionType === 'deposit')

    return ( 
        <main>
            <AdminHeader page="Administration Deposit"/>
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4">
                <AllDeposits deposits={depositTransactions}/>
            </div>
        </main>
     );
}
 
export default page;