import React from "react";
import HeroSection from "./_components/HeroSection";
import TabNavigation from "./_components/TabNavigation";

const CompanyLinksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 xl:gap-9 bg-[#F8F8FF]">
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-6 wrapper">
        <TabNavigation />
        <main className="flex-grow w-full">{children}</main>
      </div>
    </div>
  );
};

export default CompanyLinksLayout;
