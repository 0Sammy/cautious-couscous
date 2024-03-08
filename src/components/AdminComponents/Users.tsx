import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/dateTimeUtils";

const Users = ({ users }: any) => {
  return (
    <main className="mt-8 border border-[#7676801F] px-2 md:px-4 py-6 rounded-xl">
      <p className="text-xs sm:text-sm xl:text-base text-[#06121B]">
        {users && users.length} Users
      </p>
      <div className="flex flex-col gap-y-5 mt-8">
        {users &&
          users.map((user: any) => (
            <Link href={`/admin/users/${user.id}`} key={user.id} className="flex justify-between gap-x-5 items-center overflow-x-auto special pb-2">
              <div className="min-w-[10rem] flex gap-x-1.5 items-center">
                <div className="relative min-w-[1.5rem] size-6 md:size-8 xl:size-10"><Image src={user.profileImgSrc} alt="Profile Pic" fill className="absolute rounded-[50%]"/></div>
                <div>
                  <p className="text-[#101828] text-[10px] md:text-[12px] xl:text-[14px] capitalize">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-[#667085] text-[8px] md:text-[10px] xl:text-[12px]">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="min-w-[10rem]">
                <p className="text-[#8E8E93] text-[8px] md:text-[10px] xl:text-[12px]">
                  Registration date
                </p>
                <p className="text-[#020100] font-medium text-[10px] md:text-[12px] xl:text-[14px]">
                  {formatDate(user.createdAt)}.
                </p>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
};

export default Users;
