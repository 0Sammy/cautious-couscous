import getWallets from "@/actions/getWallets";

//Import Needed Components
import Balance from "@/components/DashboardComponents/Balance";
import CompliedCards from "@/components/DashboardComponents/CompliedCards";
import Wallets from "@/components/CoinComponents/Wallets";

export const revalidate = 1
const page = async () => {

    const wallets = await getWallets()

    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <Wallets wallets={wallets}/>
            <Balance />
            <CompliedCards />
        </main>
     );
}
 
export default page;