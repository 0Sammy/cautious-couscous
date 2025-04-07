"use server"

import { prisma } from "@/lib/prismadb";

export default async function getUserLimit(id: string) {

    try {
        const userLimit = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                minimumPayout: true,
            }
        });

        return { success: true, limit: userLimit };

    } catch (error) {
        console.error("Error fetching user limit", error);
        return { success: false, limit: null }
    }
}
