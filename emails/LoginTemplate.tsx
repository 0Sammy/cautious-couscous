/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  time?: string;
};

export default function LoginTemplate({
  time
}: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
          </Container>
          <Text style={bold}>Welcome</Text>
          <Text style={paragraph}>
            You have successfully logged into your account at {time} today.
          </Text>
          <Text style={paragraph}>
            We have verified your credentials and authorization to access the system at this time. 
            Please review recent account activity for anything suspicious and report unauthorized transactions.
          </Text>
          <Text style={paragraph}>
            For any other help with managing your profile, accounts and services, please visit our Help Center or contact client support 24/7.
          </Text>
          <Text style={paragraph}>
            We are dedicated to providing prudent monitoring and identity verification protocols to keep your assets protected during every interaction.
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
