import getCurrentLoggedInUser from "@/actions/getCurrentUser";
import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import OverviewCardCompiled from "@/components/OverviewComponent/CardCompiltion";
import UserBalance from "@/components/DashboardComponents/UserBalance";
import Prices from "@/components/DashboardComponents/Prices";
import { permanentRedirect } from "next/navigation";

export const revalidate = 1
const page = async () => {

   const { user } = await getUserDetails();
   const currentUser = await getCurrentLoggedInUser(user?.email)
   const userTransactions = currentUser?.transactions
   const successfulTransactions = userTransactions?.filter((transaction) => transaction.status === 'successful');

   if (user?.isSuspended){
      permanentRedirect('/suspend') 
   }

    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <UserBalance transactions={successfulTransactions}/>
            <Prices />
           <OverviewCardCompiled />
        </main>
     );
}
 
export default page;