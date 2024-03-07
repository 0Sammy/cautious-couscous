import getTransactions from "@/actions/getAllTransactions";
import getUsers from "@/actions/getAllUsers";

//Import Needed Components
import Activity from "@/components/AdminComponents/Activity";
import AdminChangePassword from "@/components/AdminComponents/AdminChangePassword";
import LastTransactions from "@/components/AdminComponents/LastTransactions";
import AdminHeader from "@/components/molecules/AdminHeader";


export const revalidate = 1;
const page = async () => {

    const transactions = await getTransactions();

    const clients = await getUsers();

    //console.log({transactions})
    //console.log({clients})
    //Deposit Amount
    const depositAmount = transactions
    .filter((transaction) => transaction.transactionType === 'deposit')
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  
    //Received Amount
    const receiveAmount = transactions
    .filter((transaction) => transaction.transactionType === 'receive')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

    //Bonus Amount
    const bonusAmount = transactions
    .filter((transaction) => transaction.transactionType === 'bonus')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

    //Earning Amount
    const earningAmount = transactions
    .filter((transaction) => transaction.transactionType === 'earning')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

    //Penalty Amount
    const penaltyAmount = transactions
    .filter((transaction) => transaction.transactionType === 'penalty')
    .reduce((sum, transaction) => sum + transaction.amount, 0);

    //Last 7 Transactions
    const lastSevenTransactions = transactions?.slice(-7);
    return ( 
        <main>
            <AdminHeader page="Administration Dashboard"/>
            <div className="px-4 md:px-6 xl:px-8 py-4">
              <Activity usersLength={clients?.length} depositAmount={depositAmount} transferAmount={receiveAmount} bonusAmount={bonusAmount}/>
              <LastTransactions transactions={lastSevenTransactions}/>  
              <AdminChangePassword />
            </div>
            
        </main>
     );
}
 
export default page;