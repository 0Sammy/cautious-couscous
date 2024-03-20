//Import Needed Components
import Nav from "@/components/PagesComponents/Nav"
import HeroSection from "@/components/PagesComponents/HeroSection"
import Summary from "@/components/PagesComponents/Summary"
import OnePlatform from "@/components/PagesComponents/OnePlatform"



export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <div className="lg:w-[90%] xl:w-[80%] 2xl:w-[65%] mx-auto mt-32 md:mt-40 lg:mt-48 xl:mt-52 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <HeroSection />
          <Summary />
          <OnePlatform />
      </div>
    </main>
  )
}
