import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import PrecisionInMotionSection from "@/components/home/PrecisionInMotionSection";
import BuildCTASection from "@/components/home/BuildCTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PrecisionInMotionSection />
      <WhatWeDoSection />
      <BuildCTASection />
    </>
  );
}