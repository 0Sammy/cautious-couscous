import { prisma } from "@/lib/prismadb";

export default async function getSuspendedUser() {

  try {
    const suspendedUsers = await prisma.user.findMany({
    where : {
        isSuspended : true
    },
      orderBy: {
        createdAt: "desc"
    }
    });

    return suspendedUsers;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
