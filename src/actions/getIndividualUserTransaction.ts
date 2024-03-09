import { prisma } from "@/lib/prismadb";

export default async function getIndividualUserTransaction(id: string) {
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: id,
      },
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
