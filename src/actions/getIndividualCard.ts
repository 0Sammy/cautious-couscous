import { prisma } from "@/lib/prismadb";

export default async function getIndividualCard(id: string) {
  try {
    const card = await prisma.card.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true
      }
    });

    return card;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
