"use client"
import { useState } from 'react';
import { useTransactionStore } from '@/store/adminTransactionStore';

const Dropdown = ({ allUsers }: any) => {
  const { updateUserId } = useTransactionStore();
  const [selectedUserId, setSelectedUserId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectChange = (event: any) => {
    const selectedId = event.target.value;
    setSelectedUserId(selectedId);
    updateUserId(selectedId);
    //console.log({selectedId});

  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter users based on search query
  const filteredUsers = allUsers.filter((user: any) => {
    return user.userId.includes(searchQuery) || user.email.includes(searchQuery);
  });


  return (
    <div className='flex flex-col gap-y-1'>
      <label htmlFor="userDropdown" className='text-sm lg:text-base cursor-pointer'>Select Client</label>
      <input 
        type="text" 
        placeholder="Search by UserId or Email" 
        value={searchQuery} 
        onChange={handleSearchChange} 
        className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
      />
      <select id="userDropdown" onChange={handleSelectChange} value={selectedUserId} className='capitalize cursor-pointer border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none'>
        <option value="">Open to select a user</option>
        {filteredUsers.map((user: any) => (
          <option key={user.id} value={user.id}>
            {`${user.firstName} ${user.lastName}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
