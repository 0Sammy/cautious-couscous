//Import Needed Icons
import { CloseSquare } from "iconsax-react";

type transactionType = {
    hideModal?: () => void
}
const TransactionForm = ({hideModal}: transactionType) => {
    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[100] top-0 left-0 text-xs md:text-sm xl:text-base">
            <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg">
                <div className="flex justify-end">
                    <CloseSquare size="28" className="text-red-600 cursor-pointer" variant="Bold" onClick={hideModal}/>
                </div>
            </div>
        </main>
     );
}
 
export default TransactionForm;