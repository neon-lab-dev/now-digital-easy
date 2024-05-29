import Testimonials from "./_components/Testimonials";
import Gateway from "./_components/Gateway";
import Hero from "./_components/Hero";
import BuildYourBusiness from "./_components/BuildYourBusiness";
import BusniessHire from "./_components/BusniessHire";

export default function Home() {
  return (
    <>
      <Hero />
      <BuildYourBusiness />
      <Gateway />
      <Testimonials />
      {/* <BusniessHire />
      <StartNow /> */}
    </>
  );
}
