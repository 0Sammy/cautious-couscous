"use client"
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

//Import needed components
import SidebarLinks from "./SidarbarLinks";

//Import needed icons
import { MoneyRecive, MoneySend, HambergerMenu, Home2, ProfileCircle, ToggleOnCircle, Profile, MoneyRemove, MoneyTick, UserRemove, CardReceive } from "iconsax-react";


//Import Needed Images
import logo from "../../../public/Images/Big whiz Walletassets logo badge.svg"


const AdminSidebar = ({ role }: string | any) => {

  //For the sidebar
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //Function to toggle the sidebar
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };



  return (
    <main className="text-[#B3B3B3]">
      <HambergerMenu size="41" className="lg:hidden absolute top-3 left-1 cursor-pointer z-[70]" variant="Bold" onClick={toggleOpen} />
      <div className="fixed left-0 top-0 z-[70] hidden lg:block h-screen w-[300px] bg-[#1E1E1E] border-r-2 border-slate-300">
        <div className="border-b border-slate-200 h-16 flex justify-center items-center">
          <p className="font-semibold text-2xl text-white">Wealth Assets</p>
        </div>
        <div className="flex flex-col gap-y-2 mt-10">
          <SidebarLinks route="/admin/dashboard" label="Dashboard" icon={<Home2 size={24} variant="Bold" />} />
          <SidebarLinks route="/admin/deposit" label="Send" icon={<MoneySend size={24} variant="Bold" />} />
          <SidebarLinks route="/admin/members" label="Users" icon={<ProfileCircle size={24} variant="Bold" />} />
          {role === "super_admin" && <>
            <SidebarLinks route="/admin/sendbonus" label="Bonus" icon={<MoneyTick size={24} variant="Bold" />} />
            <SidebarLinks route="/admin/sendpenalty" label="Penalty" icon={<MoneyRemove size={24} variant="Bold" />} />
            <SidebarLinks route="/admin/card" label="Card" icon={<CardReceive size={24} variant="Bold" />} />
          </>
          }
          <SidebarLinks route="/admin/receive" label="Receive" icon={<MoneyRecive size={24} variant="Bold" />} />
          {role === "super_admin" && <>
            <SidebarLinks route="/admin/suspend" label="Suspend Users" icon={<UserRemove size={24} variant="Bold" />} />
            <SidebarLinks route="/admin/staff" label="Staff" icon={<Profile size={24} variant="Bold" />} />
          </>}
          <SidebarLinks route="/admin/logout" label="Logout" icon={<ToggleOnCircle size={24} variant="Bold" />} />
        </div>
        <p className="text-sm absolute bottom-10 pl-8">Copyright © 2023 Wealth Assets</p>
      </div>
      <div className={`${isOpen === false ? "hidden" : "fixed"} lg:hidden h-screen w-full bg-white bg-opacity-40 z-[70] top-0 left-0`} onClick={toggleOpen}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="fixed left-0 top-0 h-screen flex flex-col gap-y-2 w-[300px] bg-[#1E1E1E] lg:hidden"
            >
              <div className="border-b border-slate-200 h-16 flex gap-x-5 items-center px-6">
                <Image src={logo} alt="Logo" className="size-10" />
                <p className="font-semibold text-2xl">Wealth Assets</p>

              </div>
              <SidebarLinks route="/admin/dashboard" label="Dashboard" icon={<Home2 size={24} variant="Bold" />} onClick={() => toggleOpen} />
              <SidebarLinks route="/admin/deposit" label="Send" icon={<MoneySend size={24} variant="Bold" />} onClick={() => toggleOpen} />
              <SidebarLinks route="/admin/members" label="Users" icon={<ProfileCircle size={24} variant="Bold" />} onClick={() => toggleOpen} />
              {role === "super_admin" && <>
                <SidebarLinks route="/admin/sendbonus" label="Bonus" icon={<MoneyTick size={24} variant="Bold" />} onClick={() => toggleOpen} />
                <SidebarLinks route="/admin/sendpenalty" label="Penalty" icon={<MoneyRemove size={24} variant="Bold" />} onClick={() => toggleOpen} />
                <SidebarLinks route="/admin/card" label="Card" icon={<CardReceive size={24} variant="Bold" />} onClick={() => toggleOpen} />
              </>
              }
              <SidebarLinks route="/admin/receive" label="Receive" icon={<MoneyRecive size={24} variant="Bold" />} onClick={() => toggleOpen} />
              {role === "super_admin" && <>
                <SidebarLinks route="/admin/suspend" label="Suspend Users" icon={<UserRemove size={24} variant="Bold" />} onClick={() => toggleOpen} />
                <SidebarLinks route="/admin/staff" label="Staff" icon={<Profile size={24} variant="Bold" />} />
              </>
              }
              <SidebarLinks route="/admin/logout" label="Logout" icon={<ToggleOnCircle size={24} variant="Bold" />} onClick={() => toggleOpen} />
              <p className="text-sm absolute bottom-10 pl-8">Copyright © 2023 Wealth Assets</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default AdminSidebar;