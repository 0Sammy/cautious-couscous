
import { useState } from 'react';
import countries from '../../../public/data/countries.json';
import { ArrowDown3 } from 'iconsax-react';
import { useCreateUserStore } from '@/store/userAccountCreation'; 

type Country = {
  code: string;
  name: string;
}
const CountrySelect = () => {
  const {updateCountry} = useCreateUserStore();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (country: Country) => {
    setSelectedCountry(country.name);
    updateCountry(country.name)
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className={`relative w-full rounded-lg focus:outline-none bg-white border border-[#E6E7E8] px-4 py-3 cursor-pointer ${
          isDropdownOpen ? 'rounded-b-none border-b-0' : ''
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-between">
          <span>{selectedCountry || 'Choose a country'}</span>
          <div className={`transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`}>
            <ArrowDown3 size="18"/>
          </div>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 w-full max-h-48 overflow-y-auto rounded-lg bg-white border border-[#E6E7E8] shadow-lg z-10">
          {countries.map((country) => (
            <div
              key={country.code}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={() => handleSelect(country)}
            >
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
