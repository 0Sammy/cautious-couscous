import { permanentRedirect } from "next/navigation";

//Server actions
import getWallets from "@/actions/getWallets";
import { getUserDetails } from "@/providers/userDetails";
import getCurrentLoggedInUser from "@/actions/getCurrentUser";


export const revalidate = 0
const page = async () => {

    const wallets = await getWallets()
    const { user } = await getUserDetails();
    const currentUser = await getCurrentLoggedInUser(user?.email)
    console.log({currentUser})

    if (user?.isSuspended){
        permanentRedirect('/suspend') 
     }


    return ( 
        <main>

        </main>
     );
}
 
export default page;