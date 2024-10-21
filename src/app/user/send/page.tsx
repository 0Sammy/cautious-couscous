import { getUserDetails } from "@/providers/userDetails";


//Import needed components
import SendForm from "@/components/SendComponents/SendForm";
import { permanentRedirect } from "next/navigation";


export const revalidate = 0;
const page = async () => {

    const { user } = await getUserDetails();
    const userTransactions = user?.transactions

    if (user?.isSuspended) {
        permanentRedirect('/suspend')
    }

    return (
        <main>
            <SendForm email={user?.email!} name={`${user?.firstName} ${user?.lastName}`} message={user?.depositMessage!} id={user?.id!} />
        </main>
    );
}

export default page;