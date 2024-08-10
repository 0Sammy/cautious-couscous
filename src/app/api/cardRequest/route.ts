import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from "@/lib/prismadb";


//Import Libs and utils
import { sendEmail } from "@/lib/email";
import { render } from '@react-email/components';

//Templates
import CardRequestTemplate from "../../../../emails/CardRequestEmail";

export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { id, cardNumber, cardCvv, email } = body


        if (!id || !cardNumber || !cardCvv) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        const currentDate = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };

        const formattedDateTime = currentDate.toLocaleString("en-US", options);

        //Convert the email template
        const emailHtml = render(CardRequestTemplate({ time: formattedDateTime }))

        //Create the Data
        const newCardRequest = await prisma.card.create({
            data: {
                userId: id,
                cardNumber,
                cardCvv
            },
        });

        //Send Email Confirmation
        sendEmail({
            to: email,
            subject: "Your Crypto Mastercard is on its way!",
            html: emailHtml,
        });
        
        //Return the card
        return NextResponse.json(newCardRequest, { status: 200 })

    } catch (error: any) {
        if (error instanceof Error) {
            return new NextResponse(error.message);
        } else {
            return new NextResponse('Internal Server Error', { status: 500 });
        }
    }

}