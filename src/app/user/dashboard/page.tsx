import getWallets from "@/actions/getWallets";
import { getUserDetails } from "@/providers/userDetails";


//Import Needed Components
import Balance from "@/components/DashboardComponents/Balance";
import CompliedCards from "@/components/DashboardComponents/CompliedCards";
import Wallets from "@/components/CoinComponents/Wallets";
import Prices from "@/components/DashboardComponents/Prices";
import UserBalance from "@/components/DashboardComponents/UserBalance";
import InstallationPrompt from "@/components/DashboardComponents/InstallationPrompt";
import { permanentRedirect } from "next/navigation";
import LiveChat from "@/components/molecules/LiveChat";


export const revalidate = 0
const page = async () => {

    const wallets = await getWallets()
    const { user } = await getUserDetails();
    const userTransactions = user?.transactions
    const withdrawalTransactions = userTransactions?.filter((transaction) => transaction.transactionType === "deposit" && transaction.status === "pending")
    const successfulTransactions = userTransactions?.filter((transaction) => transaction.status === 'successful');
    //console.log({userTransactions})

    if (user?.isSuspended) {
        permanentRedirect('/suspend')
    }

    return (
        <main className="p-2 md:p-4 xl:p-6">
            <LiveChat />
            <UserBalance transactions={successfulTransactions} pendingTransaction={withdrawalTransactions?.length} />
            <Prices pending={withdrawalTransactions?.length!} />
            <Wallets wallets={wallets} />
            <Balance />
            <CompliedCards />
            <InstallationPrompt />
        </main>
    );
}

export default page;