import { prisma } from "@/lib/prismadb";

export default async function getCurrentLoggedInAdmin(email: string | any ) {

  try {

    const currentLoggedInAdmin = await prisma.admin.findUnique({

      where: { 
        email: email 
      },

    });

    return currentLoggedInAdmin

  } catch (error: any) {

    console.error(error);
    throw new Error;

  }
}
