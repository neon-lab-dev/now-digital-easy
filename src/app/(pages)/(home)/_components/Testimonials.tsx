import { TESTIMONIALS } from "@/assets/data/testimonials";
import TestimonialCard from "./TestimonialsCard";

const Testimonials: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 wrapper max-w-[1350px] m-auto">
      <div className="lg:pt-[100px] pt-[50px] flex">
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 text-start">
            <span className="subheading1 text-dark-200 max-md:text-[20px]">
              People just love working with us!
            </span>
            <span className="heading4 max-lg:text-[40px] max-md:text-[24px]">
              Digitalized Business, Happy Customers, That’s Impact
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 xl:min-w-[1265px] mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
