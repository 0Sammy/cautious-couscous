//Import Needed Components
import ConnectForm from "@/components/WalletConnectComponents/ConnectForm";
import { getUserDetails } from "@/providers/userDetails";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main className="text-xs md:text-sm xl:text-base p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
                <ConnectForm name={`${user?.firstName} ${user?.lastName}`} email={user?.email}/>
            </div>
        </main>
     );
}
 
export default page;