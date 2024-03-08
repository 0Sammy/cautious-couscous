import getUsers from "@/actions/getAllUsers";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions";

//Import Needed Components
import TransactionForm from "@/components/AdminComponents/TransactionForm";
import AdminHeader from "@/components/molecules/AdminHeader";
import Prices from "@/components/DashboardComponents/Prices";


export const revalidate = 1;

const page = async () => {

    const session = await getServerSession(authOptions)
    const allUsers = await getUsers()
    //console.log(userNames);
    //console.log({allUsers})
    if (session?.user){ 
    const loggedInEmail = (session?.user.email)

    return ( 
        <main>
            <Prices />
            <AdminHeader page="Admin Transaction" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <TransactionForm allUsers={allUsers} loggedInEmail={loggedInEmail}/>
            </div>
        </main>
     );
    }
    
}
 
export default page;