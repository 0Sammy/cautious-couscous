import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";



const FrequentlyAsked = () => {
    return ( 
        <main className="mt-24">
            <p className="text-xl md:text-2xl xl:text-3xl font-bold text-center">Frequently asked questions</p>
            <div className="mt-8">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>What is cryptocurrency?</AccordionTrigger>
                    <AccordionContent>
                    A cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit or double-spend. Cryptocurrencies operate on decentralized networks based on blockchain technology, eliminating the need for a central authority like a government or bank. Popular cryptocurrencies include Bitcoin, Ethereum, and Litecoin.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-2">
                    <AccordionTrigger> How do I get started with cryptocurrencies?</AccordionTrigger>
                    <AccordionContent>
                    To get started with cryptocurrencies, you&apos;ll need to set up a cryptocurrency wallet, which is a secure digital wallet used to store, send, and receive digital currencies. You can then purchase cryptocurrencies through an exchange platform or by receiving them as payment. Wealth Assets simplifies this process by providing a user-friendly platform to buy, sell, and manage your cryptocurrencies.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-3">
                    <AccordionTrigger>Is cryptocurrency safe?</AccordionTrigger>
                    <AccordionContent>
                    Cryptocurrency transactions are secured by advanced cryptography, making them generally safe from hacking or fraud. However, it&apos;s essential to take proper security measures, such as using strong passwords, enabling two-factor authentication, and keeping your wallet and private keys secure. Wealth Assets employs robust security protocols to protect your assets and transactions.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-4">
                    <AccordionTrigger>What are the benefits of using cryptocurrencies?</AccordionTrigger>
                    <AccordionContent>
                    Some benefits of using cryptocurrencies include decentralization (no central authority control), lower transaction fees compared to traditional payment methods, faster international transactions, and increased privacy and anonymity. Cryptocurrencies also offer an alternative investment opportunity and a way to participate in the growing digital economy.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-5">
                    <AccordionTrigger>How can Wealth Assets help me with cryptocurrencies?</AccordionTrigger>
                    <AccordionContent>
                    Wealth Assets is a trusted platform that simplifies the process of buying, selling, and managing cryptocurrencies. Our user-friendly interface, advanced security measures, and comprehensive educational resources make it easy for both beginners and experienced users to navigate the cryptocurrency world. With Wealth Assets, you can securely send, receive, and store your digital assets with confidence.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
     );
}
 
export default FrequentlyAsked;