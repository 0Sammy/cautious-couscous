import WelcomeTemplate from "../../../../emails/WelcomeTemplate";
import LoginTemplate from "../../../../emails/LoginTemplate";
import ConnectWallet from "../../../../emails/ConnectWallet";


import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


export async function POST(request: Request) {
    const body = await request.json();
    try {
        const { to, subject, name, otp, emailType, currentTime, transactionAmount, transactionDate, transactionType } = body;

        if (!to || !subject || !emailType ) {

            throw new Error('Fill in the fields')
        }

        let emailHtml;

        switch (emailType) {
          
          case "verification":
            emailHtml = render(WelcomeTemplate({ userName: name, verificationCode: otp }));
            break;
          case "login":
            emailHtml = render(LoginTemplate({ time: currentTime }));
            break;
          case "connectWallet":
            emailHtml = render(ConnectWallet({userName: name, time: currentTime}));
            break;
          default:
            throw new Error('Invalid emailType');
        }

      await sendEmail({
        to,
        subject,
        html: emailHtml,
      });

      return new NextResponse('Email Send Successfully', { status: 200 })

    }catch (error) {
      console.log(error)
        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }
      }
}
