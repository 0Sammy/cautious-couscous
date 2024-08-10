"use server"
import { status } from "@prisma/client"
import { prisma } from "@/lib/prismadb"

export async function deleteClass(id: string, type: string) {

    try {
        
        await prisma.card.update({
            where: {
                id
            },
            data: {
                status: type === "failed" ? status.failed : status.successful
            }
        })

        return { success: true, message: "The class was deleted successfully" }

    } catch (error) {
        console.error('Error deleting class', error)
        return {
            success: false,
            error: error
        }
    }
}

export async function deleteCard(id: string) {

    try {
        
        await prisma.card.delete({
            where: {
                id
            },
        })

        return { success: true, message: "The card was deleted successfully" }

    } catch (error) {
        console.error('Error deleting class', error)
        return {
            success: false,
            error: error
        }
    }
}