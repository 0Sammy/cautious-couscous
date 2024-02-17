import  bcrypt  from 'bcrypt';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

const body = await request.json();

  try {

    const { email, password, role } = body;

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

      if (role) {
        // Super_Admin creation
        const admin = await prisma.admin.create({
          data: {
            email: lowercasedEmail,
            hashedPassword,
            role,
          },
        });

        return NextResponse.json(admin);
        
      } else {
        // Regular admin creation
        const admin = await prisma.admin.create({
          data: {
            email: lowercasedEmail,
            hashedPassword,
          },
        });

        return NextResponse.json(admin);
      }
  
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, {
        status: determineStatusCode(error.message),
      });
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
}

function determineStatusCode(errorMessage: string): number {
  switch (errorMessage) {
    case 'Email already exists':
      return 409;
    default:
      return 500;
  }
}
