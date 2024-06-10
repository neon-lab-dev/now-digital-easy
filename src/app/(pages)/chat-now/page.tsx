import FAQs from "@/components/FAQs";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import SectionAfterFeatures from "./_components/SectionAfterFeatures";
import WhyChooseChatNowTool from "./_components/WhyChooseChatNowTool";

const SpotNow = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Features />
      <SectionAfterFeatures />
      {/*  reusable section to use from other page */}
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
