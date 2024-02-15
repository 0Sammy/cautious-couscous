import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email, memonicPhrase} = body
    

    if (!email || !memonicPhrase){  
         
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateUserMnemonicPhrase = await prisma.user.update({
        where: {
            email: lowercasedEmail,
        },
        data: {
            memonicPhrase,
            hasMemonicPhrase: true,
        },
    });

    return NextResponse.json(updateUserMnemonicPhrase);

    }catch(error: any){
        return new NextResponse(error.message)
    }
    
}