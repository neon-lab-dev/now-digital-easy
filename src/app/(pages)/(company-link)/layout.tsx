import React from "react";
import HeroSection from "./_components/HeroSection";
import TabNavigation from "./_components/TabNavigation";

const CompanyLinksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-2 wrapper">
        <TabNavigation />
        <main className="flex-grow w-full">{children}</main>
      </div>
    </div>
  );
};

export default CompanyLinksLayout;
