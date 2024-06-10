import howItWorks from "@/assets/images/how-it-works.png";
import Image from "next/image";
import thumbnail from "@/assets/images/thumbnail-placeholder.png";

const CARDS_DATA = [
  {
    heading: "Heading",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices faucibus rhoncus at suspendisse. Maecenas tempus integer dui interdum risus vitae lorem.",
    thumbnail,
  },
  {
    heading: "Heading",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices faucibus rhoncus at suspendisse. Maecenas tempus integer dui interdum risus vitae lorem.",
    thumbnail,
  },
  {
    heading: "Heading",
    desc: "Lorem ipsum dolor sit amet consectetur. Ultrices faucibus rhoncus at suspendisse. Maecenas tempus integer dui interdum risus vitae lorem.",
    thumbnail,
  },
];
const WhyYouChoose = () => {
  return (
    <div className="bg-[#C7E5FC] bg-opacity-25">
      <div className="text-primary-500 wrapper">
        <div className="flex flex-col items-center justify-center wrapper max-width py-12 gap-12">
          <h2 className="text-center font-source-sans-pro font-900 text-primary-500 text-[25px] md:text-[36px] txl:ext-[54px] tracking-[-2px] leading-[110%]">
            Why You Choose SpotNow?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
            {CARDS_DATA.map((card, index) => (
              <div key={index} className="flex flex-col gap-5">
                <Image
                  src={card.thumbnail}
                  alt="thumbnail"
                  width={368}
                  quality={100}
                  height={300}
                  className="rounded-xl w-full max-h-[300px] object-cover object-center"
                />
                <h3 className="text-primary-500 font-900 text-[32px] tracking-[-1px] leading-[100%] ">
                  {card.heading}
                </h3>
                <p className="text-primary-500 text-[15px] opacity-70 font-merriweather leading-[160%]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYouChoose;
