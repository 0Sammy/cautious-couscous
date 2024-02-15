import { useState, useRef } from 'react';
import ids from '../../../public/data/id.json';
import { ArrowDown3 } from 'iconsax-react';
import { useKycStore } from '@/store/kyc';

type ID = {
  idType : string
}


const IdSelect = () => {

  const {updateIdType} = useKycStore();
    const [selectedIDs, setSelectedIDs] = useState<string | null>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleSelect = (ids: ID) => {
        setSelectedIDs(ids.idType);
        updateIdType(ids.idType)
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return ( 
    <div className="relative mt-2">
      <div
        className={`relative w-full rounded-md focus:outline-none bg-white border border-[#E6E7E8] px-4 py-2 md:py-3 cursor-pointer ${
          isDropdownOpen ? 'rounded-b-none border-b-0' : ''
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-between">
          <span>{selectedIDs || 'Choose ID Type'}</span>
          <div className={`transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`}>
            <ArrowDown3 />
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 w-full max-h-48 overflow-y-auto rounded-md bg-white border border-[#E6E7E8] shadow-lg z-10">
          {ids.map((id, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSelect(id)}
            >
              {id.idType}
            </div>
          ))}
        </div>
      )}
    </div>
     );
}
 
export default IdSelect;