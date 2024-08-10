const Agreement = () => {
    return ( 
        <main className="mt-24 text-[#242426]">
           <p>Wealth Assets Platform, Inc., and/or its affiliates (“we,” “our,” or “us”) provides its software services through its website located at wealthassets.app and related mobile applications and products (collectively the “Services” or wealthassets). Before using our Services, please read the Terms of Service (the “Terms”) carefully, along with any other policies or notices on our website or mobile applications.</p> 
           <div className="mt-10 flex flex-col gap-y-5">
                <p className="text-sm md:text-base xl:text-lg text-primary font-semibold">Agreement to Terms</p>
                <p>By accessing or using any or all of the Services, you expressly acknowledge that (i) you have read and understood these Terms; (ii) you agree to be bound by these Terms; and (iii) you are legally competent to enter into these Terms. If you do not agree to be bound by these Terms or any updates or modifications to these Terms, you may not access or use our Services. WE DO NOT PROVIDE INVESTMENT OR FINANCIAL ADVICE OR CONSULTING SERVICES. WE ARE SOLELY THE PROVIDER OF wealthassets AND WE DO NOT ADVISE OR MAKE RECOMMENDATIONS ABOUT ENGAGING IN DIGITAL ASSET TRANSACTIONS OR OPERATIONS. DECISIONS TO ENGAGE IN TRANSACTIONS OR PERFORM OPERATIONS INVOLVING DIGITAL ASSETS SHOULD BE TAKEN ON YOUR OWN ACCORD.</p>
           </div>
           <div className="mt-10 flex flex-col gap-y-5">
                <p className="text-sm md:text-base xl:text-lg text-primary font-semibold">Privacy Policy</p>
                <p>For an explanation on how we collect, use and disclose information from our users please see our Privacy Policy at https://www.wealthassets.app/terms. You acknowledge and agree that your use of the Services is subject to, and that we can collect, use and/or disclose your information (including any personal data you provide to us) in accordance with our Privacy Policy.</p>
           </div>
           <div className="mt-10 flex flex-col gap-y-5">
                <p className="text-sm md:text-base xl:text-lg text-primary font-semibold">Updates to Terms or Service</p>
                <p>We reserve the right to update or modify these Terms at any time at our sole discretion. If we do so, we’ll let you know by either posting the revised Terms on our website, on our mobile application or through other methods of communication which we deem reasonable. Such revised Terms as posted will take effect immediately, unless otherwise indicated. You should regularly check our website to inform yourself of any such changes and decide whether or not to accept the revised version of these Terms. If you continue to use wealthassets following any update or modification of the Terms you shall be deemed to have accepted the revised Terms. If you do not agree to the Terms or any update or modification to the Terms, you must cease to access or use our Services. Our Services are evolving over time, we may change or discontinue all or any part of the Services, at any time and without prior notice, and at our sole discretion.</p>
           </div>
           <div className="mt-10 flex flex-col gap-y-5">
                <p className="text-sm md:text-base xl:text-lg text-primary font-semibold">Eligibility</p>
                <p>To be eligible to use wealthassets: (i) you must be at least eighteen (18) years old and legally competent to enter into these Terms; (ii) you must not be a resident of sanctioned jurisdictions according to any trade embargoes, UN Security Council Resolutions (“UNSCR”) or HM Treasury’s financial sanctions regime; and (iii) you must not be currently the subject of or subject to economic sanctions such as the United Nations Security Council Sanctions List, the list of specially designated nationals maintained by OFAC, the denied persons or entity list of the U.S. Department of Commerce or any similar list maintained by any other relevant sanctions authority. If you are using our Services on behalf of a legal entity, you further represent and warrant that: (iv) the legal entity is duly organized and validly existing under the applicable laws of the jurisdiction of its organization; and (v) you are duly authorized by such legal entity to act on its behalf. You can only use our Services if permitted under the laws of your jurisdiction. For the avoidance of doubt, you may not use our Services if you are located in, or a citizen or resident of any state, country, territory or other jurisdiction where your use of our Services would be illegal or otherwise violate any applicable laws. Please make sure that these Terms are in compliance with all laws, rules, and regulations that apply to you. You agree that you are only using our Services with legally-obtained funds that rightfully belong to you. By using wealthassets, you represent and warrant that you meet all eligibility requirements that we outline in these Terms. We may still refuse to let certain people access or use wealthassets, however, and we reserve the right to change our eligibility criteria at any time.</p>
           </div>
           <div className="mt-10 flex flex-col gap-y-5">
            <div>
                <p className="text-sm md:text-base xl:text-lg text-primary font-semibold">Services</p>
                <p className="mt-4">wealthassets is a non-custodial wallet software, for digital assets such as cryptocurrencies, virtual commodities and NFTs (“Digital Assets”), meaning you are solely in control of and responsible for your Digital Assets and private keys, and accordingly you can authorize transactions from your wallet address. You expressly acknowledge and agree that as wealthassets is a non-custodial wallet software, you are solely responsible for your activity and any risk of loss at all times. wealthassets allows you to:</p>
            </div>
                <ul className="list-disc">
                    <li>Generate wallet addresses and associated private keys that you may use to send and receive digital assets;</li>
                    <li>Browse and access third party decentralized application(s) (“DApp(s)”) and third party decentralized exchanges (“DEX”) through the mobile application’s web browser;</li>
                    <li>Swap/trade digital assets through DApp functionality made available by third party service provider(s);</li>
                    <li>Stake certain digital assets in a third party ‘proof of stake’ network through staking services (“Staking Service”);</li>
                    <li>View digital asset price information made available by third party service provider(s); and</li>
                    <li>Broadcast Digital Asset Transaction data to various blockchains supported by wealthassets without requiring you to download or install the associated blockchain-based software to your local device.</li>
                </ul>
           </div>
        </main>
     );
}
 
export default Agreement;