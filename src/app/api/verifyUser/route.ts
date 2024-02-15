import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email} = body
    

    if (!email){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateUserEmailVerificationStatus = await prisma.user.update({
        where: {
            email: lowercasedEmail,
        },
        data: {
            isEmailVerified: true,
        },
    });

    return NextResponse.json(updateUserEmailVerificationStatus);

    }catch(error: any){
        return new NextResponse(error.message)
    }
    
}