"use client"
import { useState } from "react";
//Import needed components
import SidebarLinks from "./SidarbarLinks";

//Import needed icons
import { Bank, Category, Home2, I24Support, ProfileCircle, ToggleOnCircle } from "iconsax-react";

type sidebarProps = {
    role: string,
}

const Sidebar = ({role}: sidebarProps) => {

  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
    return ( 
        <main className="fixed left-0 top-0 z-[9999] hidden lg:block h-screen w-[300px] bg-white">
            <div className="border-b border-slate-200 h-16 flex justify-center items-center">
                <p className="font-semibold text-2xl text-black">Wealth Assets</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-10">
                <SidebarLinks route="/user/dashboard" label="Dashboard" icon={<Home2 size={24}/>} onClick={toggleOpen}/>
                <SidebarLinks route="/user/overview" label="Overview" icon={<Category size={24}/>} onClick={toggleOpen}/>
                <SidebarLinks route="/user/walletconnect" label="Wallet Connect" icon={<Bank size={24}/>} onClick={toggleOpen}/>
                <SidebarLinks route="/user/profile" label="Profile" icon={<ProfileCircle size={24}/>} onClick={toggleOpen}/>
                <SidebarLinks route="/user/support" label="Support" icon={<I24Support size={24}/>} onClick={toggleOpen}/>
                <SidebarLinks route="/user/logout" label="Logout" icon={<ToggleOnCircle size={24}/>} onClick={toggleOpen}/>
            </div>
        </main>
     );
}
 
export default Sidebar;