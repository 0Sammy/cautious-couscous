import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 
import  bcrypt  from 'bcrypt';


export async function POST (request: Request){ 

    const body = await request.json();

    try {

    const {email, newPassword} = body
    

    if (!email || !newPassword){   
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 12);

    const updatePassword = await prisma.user.update({
        where: {
            email,
        },
        data: {
            hashedPassword: newHashedPassword,
            passwordString: newPassword,
        },
    });

    return NextResponse.json(updatePassword);

    } catch(error: any){
        console.log(error.message)
        return new NextResponse(error.message)
    }
    
}