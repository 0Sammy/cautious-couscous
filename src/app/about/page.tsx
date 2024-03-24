//Import Needed Components
import Nav from "@/components/PagesComponents/Nav";
import CTA from "@/components/BuyComponents/CTA";
import OurPurpose from "@/components/AboutUsComponents/OurPurpose";
import OurVision from "@/components/AboutUsComponents/OurVision";
import Empower from "@/components/AboutUsComponents/Empower";
import OurValues from "@/components/AboutUsComponents/OurValues";


import Footer from "@/components/PagesComponents/Footer";





const page = () => {
    return ( 
        <main className="bg-white">
            <Nav />
            <div className="lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto mt-32 md:mt-40 lg:mt-48 xl:mt-52 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
                <OurPurpose />
                <OurVision />
                <Empower />
                <OurValues />
                <CTA />
                <Footer />
            </div>
        </main>
     );
}
 
export default page;