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
    card: isLarge ? "xl:w-[752px]" : "xl:w-[500px]",
    quote: isLarge ? "w-[180px]" : "w-[150px]",
  };
  return (
    <div
      className={twMerge(
        "relative h-[299px] max-md:h-[250px] max-md:w-[380px] max-xl:w-[652px] group hover:bg-[#C9CDFF] bg-background-card",
        width.card
      )}
    >
      <Image
        className="absolute right-0  group-hover:w-[180px] w-[150px]"
        src={props.backgroundImage}
        alt="Testimonial background"
      />
      <div className="pl-[23px] pt-[23px]">
        <Image
          src={comma}
          width={30}
          height={30}
          alt="Quote symbol"
          className=" max-md:w-[15px]"
        />
      </div>
      <div
        className={twMerge(
          "pl-[23px] py-4 max-md:py-1 h-[140px] max-md:w-[200px] max-xl:w-[500px] max-md:text-[12px]",
          width.quote
        )}
      >
        <span className="text-base-bold max-md:text-[10px] max-md:leading-[5px]">
          {props.quote}
        </span>
      </div>
      <div className="flex flex-col pt-4 max-md:pt-0 pl-[23px]">
        <span className="testimonial-author-name">{props.author}</span>
        <span className="text-xs">{props.position}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
