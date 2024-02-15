import { ChangeEvent } from "react";

type InputProps = {
    type: string;
    placeholder: string;
    label: string;
    id: string;
    value: string | number | any;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    pattern?: string,
    widthClass?: string; // Add widthClass prop for customizing width
  };
  
  const Input = ({ type, placeholder, label, id, value, onChange, pattern, widthClass = "w-full",
}: InputProps) => {
    return (
      <main className="flex flex-col gap-y-1 text-xs sm:text-sm xl:text-base">
        <label className="cursor-pointer" htmlFor={id}>
          {label}
        </label>
        <input
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)}
          value={value}
          name={id}
          id={id}
          pattern={pattern}
          type={type}
          placeholder={placeholder}
          className={`border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none ${widthClass}`}
        />
      </main>
    );
  };
  
  export default Input;
  