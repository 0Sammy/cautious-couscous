"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

//Import needed components
import SidebarLinks from "./SidarbarLinks";

//Import needed icons
import { DirectSend, MoneyRecive, MoneySend, HambergerMenu, Home2 , ProfileCircle, ToggleOnCircle, DirectboxReceive, Profile, MoneyRemove, MoneyTick, WalletCheck, UserRemove } from "iconsax-react";


//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg"


type sidebarProps = {
    role: string,
}

const AdminSidebar = ({role}: string | any) => {

  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [wasClicked, setWasClicked] = useState<boolean>(false);

  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const toggleClicked = () => {
    setWasClicked((prevWasClicked) => !prevWasClicked) 
  }
  useEffect(() => {

    if (wasClicked){
        setIsOpen(false)
    }
  }, [wasClicked])
  
  
    return ( 
        <main>
            <HambergerMenu size="41" className="text-black text-opacity-80 lg:hidden absolute top-3 left-1 cursor-pointer z-[70]" variant="Bold" onClick={toggleOpen}/>
            <div className="fixed left-0 top-0 z-[70] hidden lg:block h-screen w-[300px] bg-[#EEEEEE]">
                <div className="border-b border-slate-200 h-16 flex justify-center items-center">
                    <p className="font-semibold text-2xl text-black">Wealth Assets</p>
                </div>
                <div className="flex flex-col gap-y-2 mt-10">
                    <SidebarLinks route="/admin/dashboard" label="Dashboard" icon={<Home2 size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/deposit" label="Deposit" icon={<MoneyRecive size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/members" label="Users" icon={<ProfileCircle size={24} variant="Bold"/>} />
                    {role === "super_admin" && <>
                    <SidebarLinks route="/admin/sendbonus" label="Send Bonus" icon={<MoneyTick size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/sendpenalty" label="Send Penalty" icon={<MoneyRemove size={24} variant="Bold"/>} />
                    </>
                    }
                    <SidebarLinks route="/admin/withdrawal" label="Withdrawal" icon={<MoneySend size={24} variant="Bold"/>} />
                    {role === "super_admin" && <>
                    <SidebarLinks route="/admin/suspend" label="Suspend Users" icon={<UserRemove size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/adminwallet" label="Utilities" icon={<WalletCheck size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/staff" label="Staff" icon={<Profile size={24} variant="Bold"/>} />
                    </>}
                    <SidebarLinks route="/admin/logout" label="Logout" icon={<ToggleOnCircle size={24} variant="Bold"/>} />  
                </div> 
                <p className="text-sm absolute bottom-10 pl-8">Copyright © 2023 Wealth Assets</p>
            </div>
            <div className={`${!isOpen && "hidden"} lg:hidden fixed h-screen w-full bg-black bg-opacity-70 z-[70] top-0 left-0`} onClick={toggleOpen}>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="fixed left-0 top-0 h-screen flex flex-col gap-y-2 w-[300px] bg-white lg:hidden"
                  >
                    <div className="border-b border-slate-200 h-16 flex gap-x-5 items-center px-6">
                        <Image src={logo} alt="Logo" className="size-10"/>
                        <p className="font-semibold text-2xl text-black">Wealth Assets</p>
                        
                    </div>
                    <SidebarLinks route="/admin/dashboard" label="Dashboard" icon={<Home2 size={24} variant="Bold"/>} onClick={toggleClicked}/>
                    <SidebarLinks route="/admin/deposit" label="Deposit" icon={<MoneyRecive size={24} variant="Bold"/>} onClick={toggleClicked}/>
                    <SidebarLinks route="/admin/members" label="Users" icon={<ProfileCircle size={24} variant="Bold"/>} onClick={toggleClicked}/>
                    {role === "super_admin" && <>
                    <SidebarLinks route="/admin/sendbonus" label="Send Bonus" icon={<MoneyTick size={24} variant="Bold"/>} onClick={toggleClicked}/>
                    <SidebarLinks route="/admin/sendpenalty" label="Send Penalty" icon={<MoneyRemove size={24} variant="Bold"/>} />
                    </>
                    }
                    <SidebarLinks route="/admin/withdrawal" label="Withdrawal" icon={<MoneySend size={24} variant="Bold"/>} />
                    {role === "super_admin" && <>
                    <SidebarLinks route="/admin/suspend" label="Suspend Users" icon={<UserRemove size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/adminwallet" label="Utilities" icon={<WalletCheck size={24} variant="Bold"/>} />
                    <SidebarLinks route="/admin/staff" label="Staff" icon={<Profile size={24} variant="Bold"/>} />
                    </>
                    }
                    <SidebarLinks route="/admin/logout" label="Logout" icon={<ToggleOnCircle size={24} variant="Bold"/>} onClick={toggleClicked}/>
                    <p className="text-sm absolute bottom-10 pl-8">Copyright © 2023 Wealth Assets</p>
                  </motion.div>
                )}
                </AnimatePresence>
            </div>
        </main>
     );
}
 
export default AdminSidebar;