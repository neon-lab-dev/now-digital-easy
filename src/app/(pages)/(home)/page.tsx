import Gateway from "./_components/Gateway";
import Hero from "./_components/Hero";
import BuildYourBusiness from "./_components/BuildYourBusiness";
import BusinessHire from "./_components/BusinessHire";
import StartNow from "./_components/StartNow";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildYourBusiness />
      <Gateway />
      <Testimonials />
      <BusinessHire />
      <StartNow />
    </>
  );
}
