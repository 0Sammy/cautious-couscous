import { Container, Html, Img, Preview, Text, Body } from "@react-email/components";

export default function CardRejectionTemplate({ time }: { time: string }) {
    return (
        <Html>
            <Body style={main}>
                <Container style={container}>
                    <Container>
                        <Img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
                    </Container>
                    <Text style={bold}>Sorry!</Text>
                    <Text style={paragraph}>
                        We regret to inform you that your Wealth Assets Mastercard request could not be approved at this time {time}. This decision was based on our current eligibility criteria.
                    </Text>
                    <Text style={paragraph}>
                        For more information about our card eligibility requirements or to discuss alternative options, please contact our support team.
                        We appreciate your interest in our services and thank you for your understanding.
                    </Text>
                    <Text style={paragraph}>
                        If you have any questions, our support team is here to help.
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