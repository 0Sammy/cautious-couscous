"use client";
import { useEffect, useState } from "react";

// Import Needed Components
import Nav from "@/components/PagesComponents/Nav";
import HeroSection from "@/components/PagesComponents/HeroSection";
import Summary from "@/components/PagesComponents/Summary";
import OnePlatform from "@/components/PagesComponents/OnePlatform";
import SimpleSection from "@/components/PagesComponents/SimpleSection";
import StayPrivate from "@/components/PagesComponents/StayPrivate";
import Wallet from "@/components/PagesComponents/Wallet";
import Community from "@/components/PagesComponents/Community";
import CTA from "@/components/PagesComponents/CTA";
import Footer from "@/components/PagesComponents/Footer";
import InstallationPrompt from "@/components/DashboardComponents/InstallationPrompt";
import Prices from "@/components/DashboardComponents/Prices";
import Loader from "@/components/PagesComponents/Loader";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleComplete = () => setLoading(false);
    handleComplete()
    if (typeof window !== 'undefined') {
      window.addEventListener('load', handleComplete);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleComplete);
      }
    };
  }, []);

  return (
    <main className="bg-white">
      <Loader visible={loading} />
      <InstallationPrompt />
      <Nav />
      <HeroSection />
      <div className="lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto mt-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <Summary />
        <OnePlatform />
        <SimpleSection />
        <StayPrivate />
        <Wallet />
        <Community />
        <CTA />
        <Footer />
      </div>
      <Prices />
    </main>
  );
}
