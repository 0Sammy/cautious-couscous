import getWallets from "@/actions/getWallets";
import { getUserDetails } from "@/providers/userDetails";


//Import needed components
import SendForm from "@/components/SendComponents/SendForm";
import Wallets from "@/components/CoinComponents/Wallets";


export const revalidate = 1
const page = async () => {

    const wallets = await getWallets()
    const { user } = await getUserDetails();

    return ( 
        <main>
            <Wallets wallets={wallets}/>
            <SendForm email={user?.email} name={`${user?.firstName} ${user?.lastName}`} message={user?.depositMessage} id={user?.id}/>
        </main>
     );
}
 
export default page;