"use server"

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export default async function updateLimit(id: string, limit: number) {
    try {

        const updatedUser = await prisma.user.update({
            where: {
                id
            },
            data: {
                minimumPayout: limit
            }
        })

        revalidatePath(`admin/members/${id}`);
        return { success: true, message: `${updatedUser.firstName} ${updatedUser.lastName} withdrawal limit was updated successfully.` }

    } catch (error) {
        console.error('Error updating withdrawal limit', error)
        return { success: false, message: "Sorry, couldn't update user's withdrawal limit, kindly try again later." }
    }
}