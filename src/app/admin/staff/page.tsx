import getAdmins from "@/actions/getAllAdmins";
import getAdminTransactions from "@/actions/getAdminTransactions";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";
import AllAdmins from "@/components/AdminComponents/AllAdmins";

export const revalidate = 1;
const page = async () => {

    const admins = await getAdmins()
    const adminTransactions = await getAdminTransactions()

    return ( 
        <main>
            <AdminHeader page="Administration Staff" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <AllAdmins admins={admins} transactions={adminTransactions} />
            </div>
        </main>
     );
}
 
export default page;