import FAQs from "@/components/FAQs";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import SectionAfterFeatures from "./_components/SectionAfterFeatures";
import WhyChooseChatNowTool from "./_components/WhyChooseChatNowTool";
import Plan from "../hosting/_components/Plan";

const SpotNow = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Features />
      <SectionAfterFeatures />
      {/*  reusable section to use from other page */}
      <Plan
        bgColor="#E5E7FF"
        desc="Bigin's promise to you is simple: No forced multi-year contracts, no hidden charges. You don't need to enter your credit card information to get started. Cancel anytime!"
      />
      <WhyChooseChatNowTool />
      <FAQs
        style={{
          background: "linear-gradient(237deg, #F0FEC9 1.14%, #D4DBFC 98.67%)",
        }}
      />
    </div>
  );
};

export default SpotNow;
