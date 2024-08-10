"use server"

import { status } from "@prisma/client"
import { prisma } from "@/lib/prismadb"

//Import Libs and utils
import { sendEmail } from "@/lib/email";
import { render } from '@react-email/components';

//Templates
import ApprovalTemplate from "../../../emails/CardApprovalEmail";
import RejectionTemplate from "../../../emails/CardRejectionEmail"

export async function updateCard(id: string, type: string, email: string) {

    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDateTime = currentDate.toLocaleString("en-US", options);

    try {

        await prisma.card.update({
            where: {
                id
            },
            data: {
                status: type === "failed" ? status.failed : status.successful
            }
        })

        //Convert the email template
        let emailHtml;
        type === "failed" ? emailHtml = render(RejectionTemplate({ time: formattedDateTime })) : emailHtml = render(ApprovalTemplate({ time: formattedDateTime }))

        //Send Email Confirmation
        sendEmail({
            to: email,
            subject: type === "failed" ? "Card Request Status!" : "Card Request Approved!",
            html: emailHtml,
        });
        

        return { success: true, message: "The card was modified successfully" }

    } catch (error) {
        console.error('Error modifying card', error)
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
        console.error('Error deleting card', error)
        return {
            success: false,
            error: error
        }
    }
}