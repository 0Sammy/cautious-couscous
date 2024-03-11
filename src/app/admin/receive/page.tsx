import getTransactions from "@/actions/getAllTransactions";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import AllReceive from "@/components/AdminComponents/AllReceive";


export const revalidate = 1;
const page = async () => {

    const transactions = await getTransactions();
    const receiveTransactions = transactions.filter((transaction) => transaction.transactionType === 'receive')

    return ( 
        <main>
            <AdminHeader page="Administration Received"/>
            <div className="px-2 sm:px-4 md:px-6 xl:px-8 py-4">
                <AllReceive receive={receiveTransactions}/> 
            </div>
        </main>
     );
}
 
export default page;