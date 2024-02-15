import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email, transactionPin} = body
    

    if (!email || !transactionPin){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateUserTransactionPin = await prisma.user.update({
        where: {
            email: lowercasedEmail,
        },
        data: {
            transactionPin,
            hasTransactionPin: true,
        },
    });

    return NextResponse.json(updateUserTransactionPin);

    }catch(error: any){
        return new NextResponse(error.message)
    }
    
}