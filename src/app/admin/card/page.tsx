

//Import Needed Components
import AdminHeader from "@/components/molecules/AdminHeader";


export const revalidate = 0;
const page = async () => {
    return (
        <main>
            <AdminHeader page="Admin. Card Request"/>
        </main>
    );
}

export default page;