import { formatDate } from "@/lib/dateTimeUtils";
import Link from "next/link";

const SuspendedUsers = ({suspendedUsers}: any) => {
    return ( 
        <main className="border border-[#EEEEEE] rounded-xl p-4 h-screen">
            <p className="text-xs md:text-sm xl:text-base text-secondary font-bold">All Suspended Clients</p>
            <div className="flex flex-col gap-y-2 mt-8">
            {suspendedUsers &&
            suspendedUsers.map((user: any) => (
              <Link href={`/admin/users/${user.id}`}
                key={user.id}
                className="flex justify-between overflow-x-auto special pb-2"
              >
                <div className="flex flex-col gap-y-0.5 w-[33%] min-w-[10rem]">
                  <p className="text-xs xl:text-sm text-[#101828]">
                    {user.email}
                  </p>
                  <p className="text-[10px] text-xs text-[#667085]">
                    {user.id}
                  </p>
                </div>
                <div className="flex flex-col gap-y-0.5 w-[33%] min-w-[10rem]">
                  <p className="text-[#8E8E93] text-[10px] text-xs">
                    Date Joined
                  </p>
                  <p className="text-[#020100] text-xs xl:text-sm font-medium">
                    {formatDate(user.createdAt)}
                  </p>
                </div>
              </Link>
            ))}
            </div>
            {suspendedUsers &&  suspendedUsers.length === 0 && <div className="text-center text-xs md:text-sm xl:text-base text-secondary font-medium my-10"><p>There is no suspended clients</p></div>}
        </main>
     );
}
 
export default SuspendedUsers;