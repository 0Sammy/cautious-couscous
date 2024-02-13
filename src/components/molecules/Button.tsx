//Import Needed Icons
import { BitcoinRefresh } from "iconsax-react";

type buttonProps = {
   type: "submit" | "reset" | "button";
   text: string;
   loading: boolean
   onClick?: () => void;
}

const Button = ({type, text, loading, onClick }: buttonProps) => {
    return ( 
        <main>
            <button onClick={(e : any) => onClick} disabled={loading} type={type} className={`my-6  w-full rounded-md text-sm bg-primary text-white sm:text-base py-3 lg:text-lg hover:bg-inherit hover:text-primary border border-primary duration-500`} >
            {loading ? <BitcoinRefresh size="30" className="animate-spin white mx-auto"/> : text }
          </button>
        </main>
     );
}
 
export default Button;