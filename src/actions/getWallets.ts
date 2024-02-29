import { prisma } from "@/lib/prismadb";

export default async function getWallets() {

  try {
    const wallets = await prisma.utility.findUnique({

        where: {
            id: "65dea02f908c2ec11ebcc34a"
        },

    });

    return wallets;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
