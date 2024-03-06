import AdminSidebar from '@/components/molecules/AdminSidebar';
import '../globals.css';
import { Toaster } from 'sonner';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions";
import getCurrentLoggedInUser from "@/actions/getCurrentUser";
import getCurrentLoggedInAdmin from '@/actions/getCurrentAdmin';


export default async function UserLayout({
  
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  if (session?.user){ 
    
    const loggedInEmail = (session?.user.email)
    const currentAdmin = await getCurrentLoggedInAdmin(loggedInEmail)
    //console.log({currentAdmin})

    
  return (

    <section>
      <AdminSidebar role={currentAdmin?.role}/>
        <section className="">
            <div className="">
                {children}
            </div>
        </section>
        <Toaster richColors position="top-center" closeButton />
    </section>

  )
}
}