import { Container, Html, Img, Preview, Text, Body } from "@react-email/components";

export default function CardApprovalTemplate({ time }: { time: string }) {
    return (
        <Html>
            <Body style={main}>
                <Container style={container}>
                    <Container>
                        <Img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
                    </Container>
                    <Text style={bold}>Great news!</Text>
                    <Text style={paragraph}>
                        Congratulations! Your Crypto Mastercard application has been approved now {time}.
                    </Text>
                    <Text style={detailsParagraph}>
                        What&apos;s next:
                        <ul>
                            <li style={list}>Your card is now in production</li>
                            <li style={list}>Contact support for the instructions to follow in order to activate your card</li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                        You&apos;ll soon be able to use your new card for online shopping, bill payments, and tax-related transactions.
                    </Text>
                    <Text style={paragraph}>
                        Thank you for choosing Wealth Assets Mastercard. We&apos;re excited for you to start enjoying the benefits of seamless crypto-to-fiat transactions!
                    </Text>
                    <Text style={paragraph}>
                        If you have any questions, our support team is here to help. .
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

// Styles for the email template
const main = {
    backgroundColor: "#FFF",
    margin: "0 auto",
    padding: "2rem",
};

const container = {
    borderRadius: "4px",
    border: "1px solid #d4d7dc",
    padding: "1rem",
    backgroundColor: "#FFF",
    width: "100%",
};

const image = {
    width: "30px"
}

const bold = {
    fontWeight: "600",
    color: "#0d47a2",
    fontSize: "16px",
    lineHeight: "1.4",
    margin: "2rem 0",
}

const paragraph = {
    fontSize: "14px",
    lineHeight: "1.4",
    color: "#161618",
    margin: "2rem 0",
};

const list = {
    margin: "0.3rem 0",
    color: "#592F1A",
    fontWeight: "600",
}
const detailsParagraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#2C3E50",
    margin: "1rem 0",
    fontWeight: "500",
};