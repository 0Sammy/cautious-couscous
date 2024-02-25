import { permanentRedirect } from 'next/navigation'
import Sidebar from "@/components/molecules/Sidebar";
import '../globals.css';
import { Toaster } from 'sonner';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions";
import getCurrentLoggedInUser from "@/actions/getCurrentUser";
import Header from '@/components/molecules/Header';


export default async function UserLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  if (session?.user){ 
    
    const loggedInEmail = (session?.user.email)
    const currentUser = await getCurrentLoggedInUser(loggedInEmail)
    //console.log({currentUser})
    
    //Redirect accordingly
    // if (currentUser?.isEmailVerified === false) {

    //   permanentRedirect('/onboarding/verification')

    // } else if (currentUser?.hasTransactionPin === false){

    //   permanentRedirect('/onboarding/transaction')

    // } else if (currentUser?.hasMemonicPhrase === false) {

    //   permanentRedirect('/onboarding/mnemonic')

    // } else if (currentUser?.hasDoneKYC === false) {

    //   permanentRedirect('/onboarding/kyc')

    // } else if (currentUser?.isSuspended === true) {

    //   permanentRedirect('/user/suspend')

    // }
    
  return (

    <section>
      <Sidebar/>
        <section className="mainWidth">
        <Header />
            <div className='bg-[#E4E3EF] min-h-screen h-full'>
                {children}
            </div>
        </section>
        <Toaster richColors position="top-center" closeButton />
    </section>

  )
}
}