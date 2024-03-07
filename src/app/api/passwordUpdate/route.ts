import  bcrypt  from 'bcrypt';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

    const body = await request.json();

    try {
        
        const { newPassword, email, role } = body;

        if (!newPassword || !email ) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);

        if (role === "admin") {

            const editPassword = await prisma.admin.update({
            where : {
                email : email,
            },
            data : {
                hashedPassword
            }
        })

        return NextResponse.json(editPassword);

    } else {

        const editPassword = await prisma.user.update({
            where : {
                email : email,
            },
            data : {
                hashedPassword
            }
        })

        return NextResponse.json(editPassword);

    }

    } catch (error: any) {
        
        console.log({error})

        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }

    }

}