"use client";
import FAQs from "@/components/FAQs";
import React from "react";
import MalionMoblie from "./_components/MalionMoblie";
import Section from "@/app/(pages)/ndeemail/_components/Section";
import Hero from "@/app/(pages)/ndeemail/_components/Hero";
import Features from "../ndeemail/_components/Features";

const page = () => {
  return (
    <div>
      <Hero />
      <Section />
      <Features />
      <MalionMoblie />
      <FAQs />
    </div>
  );
};

export default page;
