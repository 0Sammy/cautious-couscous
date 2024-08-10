import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from "@/lib/prismadb";

export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { id, cardNumber, cardCvv, } = body


        if (!id || !cardNumber || !cardCvv) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        const newCardRequest = await prisma.card.create({

            data: {
                userId: id,
                cardNumber,
                cardCvv
            },
        });

        return NextResponse.json(newCardRequest, { status: 200 })

    } catch (error: any) {
        if (error instanceof Error) {
            return new NextResponse(error.message);
        } else {
            return new NextResponse('Internal Server Error', { status: 500 });
        }
    }

}