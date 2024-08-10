"use client"

import { useState } from "react";
import { toast } from "sonner";

const AllCardRequest = ({ requests }: any) => {

    //States
    const [expandedItem, setExpandedItem] = useState<string | null>(null);
    
    return ( 
        <main className="min-h-dvh">
            <div className="h-[50dvh] overflow-y-auto px-2 sm:px-4 md:px-6 xl:px-8 py-4 special1">

            </div>
            <div className="h-[50dvh] overflow-y-auto px-2 sm:px-4 md:px-6 xl:px-8 py-4 special1">

            </div>
        </main>
     );
}
 
export default AllCardRequest;