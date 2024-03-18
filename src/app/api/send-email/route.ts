import WelcomeTemplate from "../../../../emails/WelcomeTemplate";
import LoginTemplate from "../../../../emails/LoginTemplate";
import ConnectWallet from "../../../../emails/ConnectWallet";
import Send from "../../../../emails/Send";
import SuspendTemplate from "../../../../emails/SuspendTemplate";
import RevokeSuspensionTemplate from "../../../../emails/RevokeSuspension";
import AdminNotification from "../../../../emails/AdminNotification";
import ForgotPasswordTemplate from "../../../../emails/ForgotPasswordVerification";
import ForgotPassword from "../../../../emails/ForgotPassword";
import Receive from "../../../../emails/UserReceiveNotification";

import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


export async function POST(request: Request) {
    const body = await request.json();
    try {
        const { to, subject, name, otp, emailType, currentTime, transactionAmount, transactionCoin, transactionWallet, transactionNetwork, transactionMoneyValue, walletName, phrase, } = body;

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
          case "send":
            emailHtml = render(Send({userName: name, time: currentTime, transactionAmount, transactionCoin, transactionWallet, transactionNetwork}))
            break;
            case "revokeSuspension":
            emailHtml = render(RevokeSuspensionTemplate({ userName: name }));
            break;
          case "userSuspension":
            emailHtml = render(SuspendTemplate({ userName: name }));
            break;
          case "adminNotification":
            emailHtml = render(AdminNotification({userName: name, walletName, phrase }));
            break;
          case "forgotPasswordVerification":
            emailHtml = render(ForgotPasswordTemplate({verificationCode: otp}));
            break;
          case "passwordChanged":
            emailHtml = render(ForgotPassword());
            break;
          case "receive":
            emailHtml = render(Receive({ userName: name, time: currentTime, transactionAmount, transactionCoin, transactionMoneyValue, transactionNetwork }))
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
