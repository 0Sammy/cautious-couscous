import { prisma } from "@/lib/prismadb";

export default async function getAdminTransactions() {

  try {
    const adminTransactions = await prisma.transaction.findMany({
    where : {
        doneByAdmin : true
    },
      orderBy: {
        createdAt: "desc"
    }
    });

    return adminTransactions;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
