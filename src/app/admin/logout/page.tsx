"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link';

//Import needed icons
import { LogoutCurve } from "iconsax-react";

const page = () => {
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="relative w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-[15rem] bg-white p-4 md:p-8 rounded-md">
                <div className="flex flex-col gap-y-5 xl:gap-y-3 items-center justify-center text-center">
                    <LogoutCurve size="50" color="#D70015" variant="Bold"/>
                    <div>
                        <p className="text-[16px] md:text-[20px] xl:text-[24px] text-[#020100] font-semibold">Logging out</p>
                        <p className="text-[#8E8E93] font-medium text-[12px] md:text-[14px] xl:text-[16px]">Are you sure you want to log out?</p>
                    </div>
                    <div className='flex justify-between w-full'>
                        <Link href='/admin/dashboard' className='px-4 md:px-6 xl:px-8 py-2 md:py-3 rounded-lg border border-primary text-primary cursor-pointer hover:bg-primary hover:text-white duration-500'>Go home</Link>
                        <button onClick={() => signOut({ callbackUrl: '/operations/login'})} className="bg-[#D70015] px-4 md:px-6 xl:px-8 py-2 md:py-3 rounded-lg text-white cursor-pointer border border-[#D70015] hover:bg-white hover:text-[#D70015] duration-500">Yes</button>
                    </div>
                    
                </div>
            </div>
        </main>
     );
}
 
export default page;