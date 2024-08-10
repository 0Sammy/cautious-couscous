import { Container, Html, Img, Preview, Text, Body } from "@react-email/components";

export default function CardRequestTemplate({time}: {time: string}) {
    return (
        <Html>
            <Preview>Your Crypto Mastercard is on its way!</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Container>
                        <Img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
                    </Container>
                    <Text style={bold}>Great news!</Text>
                    <Text style={paragraph}>
                        Your Crypto Mastercard request was recieved on {time} and is being processed.
                    </Text>
                    <Text style={detailsParagraph}>
                        This card will allow you to:
                        <ul>
                            <li style={list}>Shop online with ease</li>
                            <li style={list}>Settle bills conveniently</li>
                            <li style={list}>Handle tax-related payments</li>
                        </ul>
                    </Text>
                    <Text style={paragraph}>
                        We'll notify you as soon as your card is approved. Get ready to enjoy seamless transactions between the crypto and fiat worlds!
                    </Text>
                    <Text style={paragraph}>
                        If you have any questions, our support team is here to help. If you never requested for this service, or you think your account has been compromised, kindly contact us.
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