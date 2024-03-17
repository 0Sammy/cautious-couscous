import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email, idType, idNumber, idCardBackImgSrc, idCardFrontImgSrc } = body
    

    if (!email || !idType || !idNumber || !idCardBackImgSrc || !idCardFrontImgSrc ){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateUserKYC = await prisma.user.update({
        where: {
            email: lowercasedEmail,
        },
        data: {
            idType, 
            idNumber, 
            idCardBackImgSrc, 
            idCardFrontImgSrc,
            hasDoneKYC : true,
        },
    });

    return NextResponse.json(updateUserKYC);

    }catch(error: any){
        return new NextResponse(error.message)
    }
    
}