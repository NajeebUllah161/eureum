import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Variety from "@/components/Variety";
import WaitingListSection from "@/components/WaitingListSection";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        {/* Add more sections here */}
        <div className="h-[2px] w-full bg-[#cfa670]" />
        <Variety />
        <div className="h-[2px] w-full bg-[#cfa670]" />
        <WaitingListSection />
      </main>
        <div className="h-[2px] w-full bg-[#cfa670]" />
      <Footer />
    </>
  );
}
