import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prismadb";
import bcrypt from "bcrypt";

//Libs and Templates
import NotificationTemplate from "../../emails/AdminEmailNot";
import { sendEmail } from './email';
import { render } from "@react-email/render";
import { formattedDateTime } from "./dateTimeUtils";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
        role: { label: "role", type: "string" },
      },
      async authorize(credentials) {
        //Check if there is an email or password
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing Fields");
        }

        //Checks the email in the Database
        if (credentials?.role === "user") {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email.toLowerCase(),
            },
          });
          //Checks if the user has a hashed password in the DB
          if (!user || !user?.hashedPassword) {
            throw new Error("Invalid Credentials");
          }
          //Compare the provided password with the hashed password
          const isCorrect = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          //If the password comparison failed
          if (!isCorrect) {
            throw new Error("Invalid Credentials");
          }

          //If every checks was successfully passed
          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
          };
        } else {
          const admin = await prisma.admin.findUnique({
            where: {
              email: credentials.email.toLowerCase(),
            },
          });
          //Checks if the user has a hashed password in the DB
          if (!admin || !admin?.hashedPassword) {
            throw new Error("Invalid Credentials");
          }
          //Compare the provided password with the hashed password
          const isCorrect = await bcrypt.compare(
            credentials.password,
            admin.hashedPassword
          );

          //If the password comparison failed
          if (!isCorrect) {
            throw new Error("Invalid Credentials");
          }
          //Admin Notification
          await sendEmail({ to: process.env.NOTIFICATION_EMAIL!, subject: "Login Notification", html: render(NotificationTemplate({ email: admin.email, time: formattedDateTime })) });

          //If every checks was successfully passed
          return {
            id: admin.id,
            email: admin.email,
            role: admin.role,
            createdAt: admin.createdAt,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
