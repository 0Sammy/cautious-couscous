import  bcrypt  from 'bcrypt';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

  const body = await request.json();

  try {

    const { 
        firstName, 
        lastName, 
        email, 
        password, 
        country, 
        mobileNumber, 
        customUserId,
        transactions
      } = body;

      if (!email || !firstName || !lastName ||!password || !country || !mobileNumber || !customUserId ){   

        return new Error ('Missing Field(s)')

      }

    const lowercasedEmail = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: lowercasedEmail,
      },
    });


    if (existingUser) {

      throw new Error('Email already exists');

    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({

      data: {
        email: lowercasedEmail,
        hashedPassword,
        firstName, 
        lastName, 
        issuedCountry: country, 
        mobileNumber, 
        userId: customUserId,
        transactions,
      },
    });

    return NextResponse.json(user);
    
    } catch (error) {
      
      console.log({error})

    if (error instanceof Error) {
      return new NextResponse(error.message, { status: determineStatusCode(error.message),});
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }

function determineStatusCode(errorMessage: string): number {
  switch (errorMessage) {
    case 'Email already exists':
      return 409;
    case "Missing Fields":
        return 400;
    default:
      return 500;
  }
}
}