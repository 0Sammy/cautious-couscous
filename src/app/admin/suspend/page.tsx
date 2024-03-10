import getSuspendedUser from "@/actions/getAllSuspendedUsers";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import SuspendedUsers from "@/components/AdminComponents/SuspendedUsers";


export const revalidate = 1;
const page = async () => {

    const suspendedUsers = await getSuspendedUser()

    return ( 
        <main>
            <AdminHeader page="Admin. Suspension" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <SuspendedUsers suspendedUsers={suspendedUsers}/>
            </div>
        </main>
     );
}
 
export default page;