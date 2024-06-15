import FAQs from "@/components/FAQs";
import ChooseYourPlan from "./_components/ChooseYourPlan";
import FieldEmployeeTrackingSoftware from "./_components/FieldEmployeeTrackingSoftware";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import PowerYourField from "./_components/PowerYourFiled";
import WhyYouChoose from "./_components/WhyYouChoose";

const SpotNow = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <FieldEmployeeTrackingSoftware />
      <PowerYourField />
      <HowItWorks />
      <WhyYouChoose />
      <ChooseYourPlan />
      <FAQs
        style={{
          background: "linear-gradient(237deg, #CDFAE1 1.14%, #D4DBFC 98.67%)",
        }}
      />
    </div>
  );
};

export default SpotNow;
