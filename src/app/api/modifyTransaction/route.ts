import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){ 

    const body = await request.json();

    try {

    const {id, currentUpdate} = body
    

    if (!id){   
        return new NextResponse('Missing Fields', { status: 400 })
    }


    const updateTransaction = await prisma.transaction.update({
        where: {
            id: id,
        },
        data: {
            status: currentUpdate,
        },
    });

    return NextResponse.json(updateTransaction);

    } catch(error: any){
        console.log(error.message)
        return new NextResponse(error.message)
    }
    
}