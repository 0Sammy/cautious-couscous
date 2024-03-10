import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {

    const {btcWallet, ethereumWallet, bnbSmartChainWallet, tronWallet, usdtErc20Wallet, usdtTrc20Wallet, adaWallet, solanaWallet, litecoinWallet, dogecoinWallet, depositMessage} = body

    const updateWallets = await prisma.utility.update({

        where: {
            id: "65dea02f908c2ec11ebcc34a",
        },

        data: {
            btcWallet, 
            ethereumWallet, 
            bnbSmartChainWallet, 
            tronWallet, 
            usdtErc20Wallet, 
            usdtTrc20Wallet, 
            adaWallet, 
            solanaWallet, 
            litecoinWallet, 
            dogecoinWallet, 
            depositMessage
        },
    });

    return NextResponse.json(updateWallets);

    }catch(error: any){
        console.log(error)
        return new NextResponse(error.message)
    }
    
}


