import HeroSection from "@/components/home/HeroSection";
import WhatWeDoShowcaseSection from "@/components/home/WhatWeDoShowcaseSection";
import PrecisionInMotionSection from "@/components/home/PrecisionInMotionSection";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PrecisionInMotionSection />
      <WhatWeDoShowcaseSection />
      <div className="py-8 md:py-16">
        <Button href="/contact" arrow>Talk to AKPC</Button>
      </div>
    </>
  );
}