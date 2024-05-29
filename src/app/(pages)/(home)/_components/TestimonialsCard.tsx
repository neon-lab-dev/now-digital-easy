import Image from "next/image";
import comma from "@/assets/images/Quotation-Symbol-PNG-Clipart.png";
import { TESTIMONIALS } from "@/assets/data/testimonials";
import { twMerge } from "tailwind-merge";

type Props = (typeof TESTIMONIALS)[number] & {
  index: number;
};

const TestimonialCard = (props: Props) => {
  const isLarge = props.index === 0 || props.index === 3;
  const width = {
    card: isLarge ? "2xl:w-[752px]" : "2xl:w-[500px]",
    quote: isLarge ? "w-[180px]" : "w-[150px]",
  };
  return (
    <div
      className={twMerge(
        "relative w-full flex flex-col group h-[156px] sm:h-[180px] md:h-[250px] hover:bg-[#C9CDFF] p-3 xl:px-12 md:p-8 overflow-hidden bg-gradient-card",
        width.card
      )}
    >
      <Image
        className="absolute right-0 top-0 w-[92px] md:w-[191px] md:group-hover:scale-110 aspect-square object-contain object-right"
        src={props.backgroundImage}
        alt="Testimonial background"
      />
      <div className="mb-1.5">
        <Image
          src={comma}
          width={30}
          height={30}
          alt="Quote symbol"
          className=" max-md:w-[15px]"
        />
      </div>
      <div className={twMerge("w-[68%] max-md:text-[12px]")}>
        <span className="text-[10px] sm:text-[12px] md:text-[16px]  text-[#212529] font-merriweather font-600">
          {props.quote.length > 130
            ? `${props.quote.slice(0, 130)}...`
            : props.quote}
        </span>
      </div>
      <div className="flex flex-col mt-auto">
        <span className="text-[16px] md:text-[20px] font-900 font-source-sans-pro">
          {props.author}
        </span>
        <span className="text-[10px] md:text-[16px]">{props.position}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
