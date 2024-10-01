import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { permanentRedirect } from 'next/navigation';

//Actions
import getCurrentLoggedInAdmin from '@/actions/getCurrentAdmin';

//Components
import AdminSidebar from '@/components/molecules/AdminSidebar';
import { Toaster } from 'sonner';

//Styles
import '../globals.css';


export default async function UserLayout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession(authOptions)

  if (session?.user) {

    const loggedInEmail = (session?.user.email)
    const currentAdmin = await getCurrentLoggedInAdmin(loggedInEmail)
    //console.log({currentAdmin})

    if (currentAdmin?.role !== "admin" && currentAdmin?.role !== "super_admin") {
      permanentRedirect('/not-authorized')
    }

    return (
      <section>
        <AdminSidebar role={currentAdmin?.role} />
        <div className="mainWidth bg-[#121212] text-[#B3B3B3]">
          {children}
        </div>
        <Toaster richColors position="top-center" closeButton />
      </section>
    )
  }
}