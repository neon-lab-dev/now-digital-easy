import howItWorks from "@/assets/images/how-it-works.png";
import Image from "next/image";

const STEPS = [
  {
    label: "Set Up Account",
    desc: "Sign up into your account",
  },
  {
    label: "Add Workforce",
    desc: "Add your employee's details",
  },
  {
    label: "Install The App",
    desc: "Let your employees install the app",
  },
  {
    label: "Seamless Management",
    desc: "Easily manage employees for better productivity",
  },
];
const HowItWorks = () => {
  return (
    <div
      className="text-primary-500"
      style={{
        background: "linear-gradient(169deg, #CDFAE1 20.82%, #D5D9FB 64.92%)",
      }}
    >
      <div className="flex flex-col items-center justify-center wrapper max-width py-12 gap-12">
        <h2 className="text-center font-source-sans-pro font-900 text-primary-500 text-[54px] tracking-[-2px] leading-[110%] ">
          How It Works
        </h2>
        <div className="flex gap-9 justify-between w-full">
          <div className="flex flex-col gap-7">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-merriweather text-primary-500 font-700">
                  Step {index + 1}
                </span>
                <span className="text-xl text-primary-500 font-700">
                  {step.label}
                </span>
                <span className=" text-primary-500 ">{step.label}</span>
              </div>
            ))}
          </div>
          <Image
            src={howItWorks}
            alt="howItWorks"
            width={632}
            height={324}
            className="rounded-[30px] border-[#0DB262] border-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
