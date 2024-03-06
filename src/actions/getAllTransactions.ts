import { prisma } from "@/lib/prismadb";

export default async function getTransactions() {

  try {
    const transactions = await prisma.transaction.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return transactions;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
