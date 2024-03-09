//Import Needed Components
import Utilities from "@/components/AdminComponents/Utilities";
import AdminHeader from "@/components/molecules/AdminHeader";

const page = () => {
    return ( 
        <main>
            <AdminHeader page="Administration Utilities" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <Utilities />
            </div>
        </main>
     );
}
 
export default page;