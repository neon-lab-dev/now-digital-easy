import { TESTIMONIALS } from "@/assets/data/testimonials";
import TestimonialCard from "./TestimonialsCard";

const Testimonials: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 wrapper max-w-[1400px] m-auto 2xl:min-w-[1264px]">
      <div className="lg:pt-[100px] pt-[50px] flex">
        <div className="flex justify-center">
          <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-4 text-start">
            <span className="text-dark-200 text-lg md:text-[28px] xl:text-2xl font-700">
              People just love working with us!
            </span>
            <span className="text-[24px] md:text-[36px] xl:text-[42px] max-lg:text-[40px] max-md:text-[24px] font-900 font-merriweather">
              Digitalized Business, Happy Customers, That’s Impact
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-full md:max-w-full lg:max-w-[900px] xl:max-w-none xl:min-w-[1139px] mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
