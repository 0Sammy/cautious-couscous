//Import Needed Components
import Nav from "@/components/PagesComponents/Nav"

import Header from "@/components/SecurityComponents/Header";
import Tweet from "@/components/SecurityComponents/Tweet";
import Independent from "@/components/SecurityComponents/Independent";
import SafeAndSecure from "@/components/SecurityComponents/SafeAndSecure";
import Security from "@/components/SecurityComponents/Security";
import FourCards from "@/components/SecurityComponents/FourCards";
import SecurityPartners from "@/components/SecurityComponents/SecurityPartners";
import Privacy from "@/components/SecurityComponents/Privacy";
import Footer from "@/components/PagesComponents/Footer"
import InstallationPrompt from "@/components/DashboardComponents/InstallationPrompt";







const page = () => {
    return ( 
        <main className="bg-white">
            <InstallationPrompt />
            <Nav />
            <div className="lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto mt-32 md:mt-40 lg:mt-48 xl:mt-52 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                <Header />
                <Tweet />
                <Independent />
                <SafeAndSecure />
                <Security />
                <FourCards />
                <SecurityPartners />
                <Privacy />
                <Footer />
            </div>
        </main>
     );
}
 
export default page;