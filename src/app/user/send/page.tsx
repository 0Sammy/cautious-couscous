
//Actions
import { getUserDetails } from "@/providers/userDetails";
import getUserLimit from "@/actions/getUserLimit";

//Components
import SendForm from "@/components/SendComponents/SendForm";
import { permanentRedirect } from "next/navigation";


export const revalidate = 0;
const page = async () => {

    const { user } = await getUserDetails();
    const { success, limit } = await getUserLimit(user!.id);

    if (user?.isSuspended) {
        permanentRedirect('/suspend')
    }

    return (
        <main>
            <SendForm email={user?.email!} name={`${user?.firstName} ${user?.lastName}`} message={user?.depositMessage!} id={user?.id!} userLimit={limit!.minimumPayout} />
        </main>
    );
}

export default page;