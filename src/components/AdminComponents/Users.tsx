"use client"
import { useState, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/dateTimeUtils";

const Users = ({ rawUsers }: any) => {

  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState<any>("");

  // Filter users based on search input
  useEffect(() => {
    if (searchInput.trim() === "") {
      setUsers(rawUsers);
    } else {
      const filtered = rawUsers.filter(
        (user: { email: string; userId: string; }) =>
          user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.userId.toLowerCase().includes(searchInput.toLowerCase())
      );
      setUsers(filtered);
    }
  }, [rawUsers, searchInput]);

  // Handle search input change
  const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchInput(e.target.value);
  };

  return (
    <main className="mt-8 border border-[#EEEEEE] px-2 md:px-4 py-6 rounded-xl min-h-screen text-xs sm:text-sm xl:text-base">
      <div className="flex justify-between items-center gap-x-3">
        <p className=" text-white">
          {users && users.length} User(s)
        </p>
        <input
        type="text"
        placeholder="Search by Email or UserId"
        value={searchInput}
        onChange={handleInputChange}
        className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none text-black bg-white"
      />
      </div>
      
      <div className="flex flex-col gap-y-5 mt-8">
        {users &&
          users.map((user: any) => (
            <Link href={`/admin/members/${user.id}`} key={user.id} className="flex justify-between gap-x-5 items-center overflow-x-auto special pb-2 border-b border-slate-100">
                <div>
                  <p className="text-[#F0F0F0] text-[10px] md:text-[12px] xl:text-[14px] capitalize">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-gray-400 text-[8px] md:text-[10px] xl:text-[12px]">
                    {user.email}
                  </p>
                </div>
              <div className="min-w-[10rem]">
                <p className="text-gray-400 text-[8px] md:text-[10px] xl:text-[12px]">
                  Registration date
                </p>
                <p className="text-[#F0F0F0] font-medium text-[10px] md:text-[12px] xl:text-[14px]">
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
