import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        value: "item-1",
        question: "How do I set up a new account on WealthAssets wallet?",
        answer: "Creating an account on our platform is entirely complimentary and incurs no costs. To get started, kindly select the 'Sign Up' button to initiate the creation of your account. Afterward, please choose the 'send otp' option and input the OTP code you receive in your email. Subsequently, you can move on to verify your account KYC with your national identity card. Finally, establish a four-digit PIN which will serve as your transaction security code. Should you experience any difficulties during the account setup process, please feel free to contact our online support team for help.",
    },
    {
        value: "item-2",
        question: "Why do I have to complete the KYC process accurately?",
        answer: "It's important to fully verify your account accurately right after setting it up, prior to depositing any coins or making withdrawal attempts. Completing this verification is essential to avoid any possible interruptions such as account freezing or suspension.",
    },
    {
        value: "item-3",
        question: "How do I make a deposit?",
        answer: "Please navigate to your account dashboard, select the coins icon, and then choose the 'receive' option. This action will direct you to the receiving page, where you can copy the wallet address. Once you have the address, you can proceed to deposit funds into it.",
    },
    {
        value: "item-4",
        question: "How long does my deposit take before it can reflect on my WealthAssets account dashboard?",
        answer: "This process should only take approximately 5 to 10 minutes, after which it will be reflected in your account.",
    },
    {
        value: "item-5",
        question: "What is the process of making a withdrawal?",
        answer: "Wealth Assets is a trusted platform that simplifies the process of buying, selling, and managing cryptocurrencies. Our user-friendly interface, advanced security measures, and comprehensive educational resources make it easy for both beginners and experienced users to navigate the cryptocurrency world. With Wealth Assets, you can securely send, receive, and store your digital assets with confidence.",
    },
    {
        value: "item-6",
        question: "How long does it take to process my withdrawal?",
        answer: "Upon receipt of your withdrawal request, we will promptly process it and transfer the funds to your wallet address. You should expect to receive it in your external wallet within 5 to 10 minutes.",
    },
    {
        value: "item-7",
        question: "How can I activate my master card?",
        answer: "To enable the use of your wealth assets Mastercard for online purchases, bill payments, and tax transactions, you have the option to activate it by depositing $850 in ethereum into your account. Please be aware that this activation is voluntary.",
    },
];

const FrequentlyAsked = () => {
    return (
        <main id="frequently" className="mt-24">
            <p className="text-xl md:text-2xl xl:text-3xl font-bold text-center">
                Frequently asked questions
            </p>
            <div className="mt-8">
                {faqData.map(({ value, question, answer }) => (
                    <Accordion key={value} type="single" collapsible>
                        <AccordionItem value={value}>
                            <AccordionTrigger>{question}</AccordionTrigger>
                            <AccordionContent>{answer}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </main>
    );
};

export default FrequentlyAsked;
