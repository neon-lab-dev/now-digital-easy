import React from "react";
import Hero from "@/app/(pages)/hosting/_components/Hero";
import Plans from "@/app/(pages)/hosting/_components/Features";
import Choose from "./_components/Choose";
import Plan from "./_components/ChooseARightPlan";
import FAQs from "@/components/FAQs";

const page = () => {
  return (
    <div>
      <Hero />
      <Plan />
      <Plans />
      <Choose />
      <FAQs
        style={{
          background:
            "linear-gradient(237.45deg, #F7E4EF 1.14%, #F3F3FF 47.1%, #E4E6FF 98.67%)",
        }}
      />
    </div>
  );
};

export default page;
