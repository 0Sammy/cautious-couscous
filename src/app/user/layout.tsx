import { permanentRedirect } from 'next/navigation';
import { Toaster } from 'sonner';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

//Actions
import getCurrentLoggedInUser from "@/actions/getCurrentUser";

//Components
import Sidebar from "@/components/molecules/Sidebar";
import Header from '@/components/molecules/Header';

//Styles
import '../globals.css';


export default async function UserLayout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession(authOptions)

  if (session?.user) {

    const loggedInEmail = (session?.user.email)
    const currentUser = await getCurrentLoggedInUser(loggedInEmail)

    //Redirect accordingly
    if (currentUser?.isEmailVerified === false) {

      permanentRedirect('/onboarding/verification')

    } else if (currentUser?.hasTransactionPin === false) {

      permanentRedirect('/onboarding/transaction')

    } else if (currentUser?.hasMemonicPhrase === false) {

      permanentRedirect('/onboarding/mnemonic')

    } else if (currentUser?.hasDoneKYC === false) {

      permanentRedirect('/onboarding/kyc')

    } else if (currentUser?.isSuspended === true) {

      permanentRedirect('/suspend')

    }

    return (
      <section>
        <Sidebar firstName={`${currentUser?.firstName} ${currentUser?.lastName}`} />
        <section className="mainWidth">
          <Header userDetails={currentUser} />
          <div className='bg-[#E4E3EF] min-h-screen h-full'>
            {children}
          </div>
        </section>
        <Toaster richColors position="top-center" closeButton />
      </section>
    )
  }
}