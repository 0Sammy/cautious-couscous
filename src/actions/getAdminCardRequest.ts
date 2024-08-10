import { prisma } from "@/lib/prismadb";

export default async function getAdminCardRequest() {

    try {
        const adminCardRequests = await prisma.card.findMany({
            orderBy: {
                createdAt: "desc"
            },
            include: {
                user: true
            }
        });

        return adminCardRequests;

    } catch (error: any) {
        console.error(error);
        throw error;
    }

}
