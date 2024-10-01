/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
    email?: string
    time?: string;
};

export default function NotificationTemplate({ email, time }: EmailProps) {
    return (
        <Html>
            <Section style={main}>
                <Container style={container}>
                    <Container>
                        <img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
                    </Container>
                    <Text style={bold}>Well...</Text>
                    <Text style={paragraph}>
                        Our system detected a successful login to the account with the email: {email} on {time}.
                    </Text>
                    <Text style={paragraph}>
                        The email is intended to notify you. Kindly contact the developer if you think your account have been compromised.
                    </Text>
                </Container>
            </Section>
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