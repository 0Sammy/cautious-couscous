/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
  time?: string;
  transactionAmount?: number;
  transactionCoin?: string;
  transactionWallet?: string;
  transactionNetwork?: string;
};

export default function Send({
  userName,
  time,
  transactionAmount,
  transactionCoin,
  transactionWallet,
  transactionNetwork,
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
            Thank you for using Wealth Assets for your cryptocurrency transactions. We wanted to confirm the details of your recent transfer:
          </Text>
          <Text style={detailsParagraph}>
            Transaction Details:
            <ul>
              <li style={list}>Transaction Amount: {transactionAmount}</li>
              <li style={list}>Transaction Date and Time: {time}.</li>
              <li style={list}>Coin: {transactionCoin === "bitcoin"
              ? "BITCOIN"
              : transactionCoin === "ethereum"
              ? "ETHEREUM"
              : transactionCoin === "BINANCE COIN"
              ? "BNB"
              : transactionCoin === "tron"
              ? "TRON"
              : transactionCoin === "usdtt"
              ? "usdt (trc20)"
              : transactionCoin === "usdte"
              ? "usdt (erc20)"
              : transactionCoin === "ada"
              ? "CARDANO"
              : transactionCoin === "solana"
              ? "Solana"
              : transactionCoin === "lite"
              ? "Litecoin"
              : transactionCoin === "doge"
              ? "DOGE" : "Coin"} </li>
              <li style={list}>Recipient Wallet Address: {transactionWallet}</li>
              <li style={list}>Transaction Network: {transactionNetwork}</li>
            </ul>
          </Text>
          <Text style={paragraph}>
                Please note that this transaction may take some time to be confirmed on the blockchain network. Once confirmed, the funds will reflect in the receiving wallet&apos;s balance.
          </Text>
          <Text style={paragraph}>
            If you have any questions or concerns regarding this transaction, please don&apos;t hesitate to contact our customer support.
          </Text>
          <Text style={paragraph}>
            Thank you for choosing Wealth Assets for your cryptocurrency needs.
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

const detailsParagraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#2C3E50",
    margin: "1rem 0",
    fontWeight: "500",
  };
  
  const list ={
      margin: "0.3rem 0",
      color: "#592F1A",
      fontWeight: "600",
  }

const footer = {
  marginTop: "2rem",
  borderTop: "1px solid #B2B3BA",
  paddingTop: "1rem",
};
