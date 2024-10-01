import { getUserDetails } from "@/providers/userDetails";


//Import needed components
import SendForm from "@/components/SendComponents/SendForm";
import Prices from "@/components/DashboardComponents/Prices";
import { permanentRedirect } from "next/navigation";


export const revalidate = 0;
const page = async () => {

    const { user } = await getUserDetails();
    const userTransactions = user?.transactions
    const withdrawalTransactions = userTransactions?.filter((transaction) => transaction.transactionType === "deposit" && transaction.status === "pending")

    if (user?.isSuspended) {
        permanentRedirect('/suspend')
    }

    return (
        <main>
            <Prices pending={withdrawalTransactions?.length!}/>
            <SendForm email={user?.email!} name={`${user?.firstName} ${user?.lastName}`} message={user?.depositMessage!} id={user?.id!} />
        </main>
    );
}

export default page;