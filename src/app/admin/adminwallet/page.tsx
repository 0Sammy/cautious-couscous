import getWallets from "@/actions/getWallets";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import Utilities from "@/components/AdminComponents/Utilities";
import Wallets from "@/components/CoinComponents/Wallets";


export const revalidate = 1;
const  page = async () => {

    const wallets = await getWallets()


    return ( 
        <main>
            <Wallets wallets={wallets}/>
            <AdminHeader page="Administration Utilities" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <Utilities />
            </div>
        </main>
     );
}
 
export default page;