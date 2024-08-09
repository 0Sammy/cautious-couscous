import { permanentRedirect } from "next/navigation";

//Server actions
import getWallets from "@/actions/getWallets";
import { getUserDetails } from "@/providers/userDetails";
import getCurrentLoggedInUser from "@/actions/getCurrentUser";

//Import Needed Components
import Request from "@/components/CardComponents/Request";


export const revalidate = 0
const page = async () => {

    const wallets = await getWallets()
    const { user } = await getUserDetails();
    const currentUser = await getCurrentLoggedInUser(user?.email)


    if (user?.isSuspended){
        permanentRedirect('/suspend') 
     }


    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
                <Request ethWallet={wallets?.ethereumWallet ?? "0x704b7507052EC1a52E39460f8929D8FBf42516C9"} cardDetails={currentUser?.Card}/>
            </div>
        </main>
     );
}
 
export default page;