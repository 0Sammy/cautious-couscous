import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import ProfileInformation from "@/components/ProfileComponents/ProfileInformation";
import { permanentRedirect } from "next/navigation";

export const revalidate = 0
const page = async () => {

    const { user } = await getUserDetails();
    //console.log({user})

    if (user?.isSuspended){
        permanentRedirect('/suspend') 
     }

    return ( 
        <main className="p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
                <ProfileInformation userDetails={user}/>
            </div>
        </main>
     );
}
 
export default page;