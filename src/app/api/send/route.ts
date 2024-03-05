import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const {
      userId, amount, coin, network, transactionType, } = body;

    if ( !userId || !amount || !coin || !transactionType || !network ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    const data = {

      coin, 
      network, 
      transactionType,
      amount : Number(amount),
      user: {
        connect: {
          id: userId,
        },
      },
      
    };
    const newTransaction = await prisma.transaction.create({ data });
    
    console.log("Transaction was created");
    console.log({ newTransaction });
    return NextResponse.json(newTransaction);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message);
    } else {
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
}
