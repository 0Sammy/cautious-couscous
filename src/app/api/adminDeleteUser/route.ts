import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { email } = body;

    if (!email) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const lowercasedEmail = email.toLowerCase();


    const deletedUser = await prisma.user.delete({
      where: {
        email: lowercasedEmail,
      },
    });

    return NextResponse.json(deletedUser);
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(error.message);
  }
}
