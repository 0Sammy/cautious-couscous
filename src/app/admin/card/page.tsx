//Import Needed Actions
import getAdminCardRequest from "@/actions/getAdminCardRequest";
import AllCardRequest from "@/components/AdminComponents/AllCardRequest";

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";


export const revalidate = 0;
const page = async () => {


    const cardRequests = await getAdminCardRequest()

    return (
        <main>
            <AdminHeader page="Admin. Card Request"/>
            <AllCardRequest requests={cardRequests} />
        </main>
    );
}

export default page;