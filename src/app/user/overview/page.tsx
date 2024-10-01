import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import OverviewCardCompiled from "@/components/OverviewComponent/CardCompiltion";
import UserBalance from "@/components/DashboardComponents/UserBalance";
import Prices from "@/components/DashboardComponents/Prices";
import { permanentRedirect } from "next/navigation";

export const revalidate = 0;
const page = async () => {

   const { user } = await getUserDetails();
   const userTransactions = user?.transactions
   const withdrawalTransactions = userTransactions?.filter((transaction) => transaction.transactionType === "deposit" && transaction.status === "pending")
   const successfulTransactions = userTransactions?.filter((transaction) => transaction.status === 'successful');

   if (user?.isSuspended) {
      permanentRedirect('/suspend')
   }

   return (
      <main className="p-2 md:p-4 xl:p-6">
         <UserBalance transactions={successfulTransactions} pendingTransaction={withdrawalTransactions?.length} />
         <Prices pending={withdrawalTransactions?.length!} />
         <OverviewCardCompiled />
      </main>
   );
}

export default page;