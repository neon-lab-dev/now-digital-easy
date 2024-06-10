import icon from "@/assets/icons/location.svg";
import Image from "next/image";

const DATA = [
  {
    icon,
    heading: "Provide Efficient Support",
    desc: "Get to the bottom of simple queries in no time and increase team productivity.",
  },
  {
    icon,
    heading: "Engage with Customers",
    desc: "Improve customer engagement by Initiating chats with current and potential customers with Messenger.",
  },
  {
    icon,
    heading: "Monitor Performance",
    desc: "Analyze metrics and create custom reports to improve live chat support.",
  },
  {
    icon,
    heading: "Understand Your Visitors",
    desc: "See pages your customer is browsing and chat previews in real-time.",
  },
];

const SectionAfterFeatures = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10 wrapper max-width gap-8 sm:gap-16">
      {DATA.map((data, index) => (
        <div key={index} className="flex flex-col gap-4 max-w-96">
          <Image src={data.icon} alt="icon" className="w-12 h-12" />
          <h3 className="font-900 text-[24px] tracking-[-2px] leading-[110%] ">
            {data.heading}
          </h3>
          <p className="text-sm font-merriweather leading-[165%]">
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionAfterFeatures;
