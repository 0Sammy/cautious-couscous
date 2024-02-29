import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 


export async function POST (request: Request){

    const body = await request.json();

    try {

    const {} = body
    

    const newUtility = await prisma.utility.create({
        data : {
        
        },
    });

    return NextResponse.json(newUtility);

    } catch(error: any){
        return new NextResponse(error.message)
    }
    
}