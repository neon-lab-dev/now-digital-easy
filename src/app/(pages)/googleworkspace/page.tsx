// pages/googleworkspace/index.js

import React from "react";
import Hero from "./_components/Hero";
import Collaboration from "./_components/Collaboration";
import Services from "./_components/Services";
import Features from "./_components/Features";
import FAQs from "@/components/FAQs";
import Discover from "./_components/Discover";
import Testimonials from "@/components/Testimonials";

const GoogleWorkspacePage = () => {
  return (
    <div>
      <Hero />
      <Collaboration />
      <Services />
      <Features />
      <Testimonials />
      <Discover />
      <FAQs />
    </div>
  );
};

export default GoogleWorkspacePage;
