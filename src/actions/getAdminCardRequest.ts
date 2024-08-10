import { prisma } from "@/lib/prismadb";

export default async function getAdminTransactions() {

    try {
        const adminCardRequests = await prisma.card.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return adminCardRequests;

    } catch (error: any) {
        console.error(error);
        throw error;
    }

}
