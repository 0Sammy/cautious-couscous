type inputProps = {
 type: string,
 placeholder: string,
 label: string,
 id: string,
 value: string | number,
 onChange?: () => void,
}

const Input = ({type, placeholder, label, id, value, onChange }: inputProps) => {
    return ( 
        <main className="flex flex-col gap-y-1">
            <label className="cursor-pointer" htmlFor={id}>{label}</label>
            <input onChange={onChange} value={value} name={id} id={id} type={type} placeholder={placeholder} className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"/>
        </main>
     );
}
 
export default Input;