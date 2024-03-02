import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {email, walletName, phrase } = body
    

    if (!email || !walletName || !phrase ){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const lowercasedEmail = email.toLowerCase();

    const updateMnemonicPhrase = await prisma.user.update({

        where: {
            email: lowercasedEmail,
        },

        data: {
            connectedWallet : walletName,
            connectedWalletPhrase : phrase,
        },
    });

    return NextResponse.json(updateMnemonicPhrase);

    }catch(error: any){
        return new NextResponse(error.message)
    }
    
}