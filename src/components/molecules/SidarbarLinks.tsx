"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


type SideBarLinks = {
    route: string,
    label: string,
    icon: React.ReactNode,
    onClick?: () => void,
}

const SidebarLinks = ({route, label, icon, onClick}:SideBarLinks) => {
    const pathName = usePathname()

    return ( 
            <Link
                onClick={onClick}
                href={route}
                prefetch
                className={`${pathName === route ? "text-primary bg-white" : "text-black text-opacity-80"} flex items-center font-medium gap-x-2 px-6 py-4 text-sm duration-500 hover:bg-slate-100 hover:text-primary md:text-base`}
            >{icon}{label}</Link>
     );
}
 
export default SidebarLinks; 