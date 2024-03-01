import ProfileInformation from "@/components/ProfileComponents/ProfileInformation";
import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
ProfileInformation
const page = async () => {

    const { user } = await getUserDetails();
    //console.log({user})

    return ( 
        <main className="text-xs md:text-sm xl:text-base p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
                <ProfileInformation userDetails={user}/>
            </div>
        </main>
     );
}
 
export default page;