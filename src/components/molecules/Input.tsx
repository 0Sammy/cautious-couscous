import { ChangeEvent } from "react";

type InputProps = {
    type: string;
    placeholder: string;
    label: string;
    id: string;
    value: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    widthClass?: string; // Add widthClass prop for customizing width
  };
  
  const Input = ({ type, placeholder, label, id, value, onChange, widthClass = "w-full",
}: InputProps) => {
    return (
      <main className="flex flex-col gap-y-1">
        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
          value={value}
          name={id}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none ${widthClass}`}
        />
      </main>
    );
  };
  
  export default Input;
  