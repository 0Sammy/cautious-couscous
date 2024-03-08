import getUsers from "@/actions/getAllUsers";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";

export const revalidate = 1;
const page = async () => {
    return ( 
        <main>
            <AdminHeader page="Administration Users" />
            <div className="px-4 md:px-6 xl:px-8 py-4">

            </div>
        </main>
     );
}
 
export default page;