import { ChangeEvent } from 'react';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="agreeCheckbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="h-5 w-5 text-primary border border-primary rounded cursor-pointer my-2"
      />
      <label htmlFor="agreeCheckbox" className='cursor-pointer'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
