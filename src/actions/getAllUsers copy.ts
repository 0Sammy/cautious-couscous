import { prisma } from "@/lib/prismadb";

export default async function getUsers() {

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return users;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
