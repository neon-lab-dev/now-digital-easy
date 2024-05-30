import start from "@/assets/images/Group 69477.svg";
import arrow from "@/assets/images/arrowright.svg";
import Button from "@/components/Button";

import Image from "next/image";
const StartNow = () => {
  return (
    <div className="flex justify-center wrapper mt-[112px] max-width">
      <div className="bg-gradient-start sm:max-h-[376px] h-fit md:max-h-none sm:max-w-[1150px] w-full flex flex-col sm:flex-row items-center justify- sm:justify-between gap-12 px-[30px] py-[60px] rounded-[40px] lg:px-[40px]">
        <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start text-[22px] gap-5 font-800 leading-tight max-w-[400px]">
          <span className="text-center sm:text-2xl md:text-4xl leading-tight sm:text-left">
            For what you are
            <br className="hidden sm:block" /> waiting for?
          </span>
          <span className="text-base text-center font-merriweather sm:text-left">
            12,000+ global businesses found an empowering digital
            transformation. Its your turn.
          </span>
          <Button
            variant="cta"
            className="w-[185px] rounded-[16px] mt-4 sm:mt-0 cta flex items-center justify-center"
          >
            Start Now
            <Image src={arrow} alt="arrowRight" className="w-[10px] h-[16px]" />
          </Button>
        </div>
        <Image
          src={start}
          alt="start"
          className="w-full h-auto sm:h-full sm:w-auto"
        />
      </div>
    </div>
  );
};

export default StartNow;
