//Import Needed Components
import Balance from "@/components/DashboardComponents/Balance";
import CompliedCards from "@/components/DashboardComponents/CompliedCards";

const page = () => {
    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <Balance />
            <CompliedCards />
        </main>
     );
}
 
export default page;