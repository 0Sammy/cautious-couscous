import { permanentRedirect } from "next/navigation";

//Server actions
import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Request from "@/components/CardComponents/Request";


export const revalidate = 0
const page = async () => {

    const { user, email } = await getUserDetails();

    if (user?.isSuspended) {
        permanentRedirect('/suspend')
    }


    return (
        <main className="p-2 md:p-4 xl:p-6">
            <div className="w-[90%] md:w-[70%] xl:w-[50%] bg-white p-4 md:p-8 rounded-lg mx-auto">
                <Request ethWallet={"0x704b7507052EC1a52E39460f8929D8FBf42516C9"} cardDetails={user?.Card!} userEmail={email!} userId={user?.id!} userName={`${user?.firstName} ${user?.lastName}`} />
            </div>
        </main>
    );
}

export default page;