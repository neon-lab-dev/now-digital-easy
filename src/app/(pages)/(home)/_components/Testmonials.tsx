'use client';
import Image from 'next/image';
import { useState } from 'react';
import author1 from "@/assets/images/Group 69412.svg"
import author2 from "@/assets/images/Group 69413.svg"
import comma from "@/assets/images/Quotation-Symbol-PNG-Clipart.png"


// Define the type for testimonial
interface Testimonial {
  quote: string;
  author: string;
  position: string;
  backgroundImage: any;
  width: string; // Width can be a string (e.g., '600px')
}

// Define the types for TestimonialCard props
interface TestimonialCardProps {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  testimonial: Testimonial;
  width: string; // Accept width as string for flexibility
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  isHovered,
  onMouseEnter,
  onMouseLeave,
  testimonial,
  width,
}) => {
    return (
        <div
            className={`relative h-[299px] ${isHovered ? 'bg-[#C9CDFF]' : 'bg-gradient-card'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ width }}
        >
            <Image
                className={`absolute right-0 ${isHovered ? 'w-[200px]' : 'w-none'}`}
                src={testimonial.backgroundImage}
                alt="Testimonial background"
               
            />
            <div className="pl-[23px] pt-[23px]">
                <Image
                    src={comma}
                    width={30}
                    height={30}
                    alt="Quote symbol"
                />
            </div>
            <div className="pl-[23px] py-4 h-[140px] "style={{ maxWidth: parseInt(width) - 200 }}>
                <span className="text-base-bold">
                    {`“${testimonial.quote}”`}
                </span>
            </div>
            <div className="flex flex-col pt-4 pl-[23px]">
                <span className="testimonial-author-name">{testimonial.author}</span>
                <span className="text-xs">{testimonial.position}</span>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Explicitly allow `null`

    const testimonials: Testimonial[] = [
        {
            quote: 'Now Digital Easy has the best customer support I have ever experienced. Their team is very responsive and knowledgeable.Their team is very responsive and knowledgeable.',
            author: 'Anandh Michel',
            position: 'Sales Co-ordinator',
            backgroundImage: author1,
            width: '700px',
        },
        {
            quote: '“Now Digital Easy has the best customer support I have ever experienced. Their team is very ....',
            author: 'Jenny Smith',
            position: 'Project Manager',
            backgroundImage: author2,
            width: '550px',
        },
        {
            quote: 'Amazing product with excellent customer service. They are always ready to help.',
            author: 'Michael Johnson',
            position: 'Operations Manager',
            backgroundImage: author2,
            width: '550px',
        },
        {
            quote: 'Amazing product with excellent customer service. They are always ready to help.',
            author: 'Michael Johnson',
            position: 'Operations Manager',
            backgroundImage: author1,
            width: '700px',
        },
    ];
    return (
        <>
            <div className=" pt-[100px] pl-[30px] flex">
                <div className="flex flex-col gap-4">
                    <span className="subheading1 text-dark-200">People just love working with us!</span>
                    <span className="heading4">Digitalized Business, Happy Customers, That’s Impact</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                        key={index}
                        isHovered={hoveredIndex === index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        testimonial={testimonial}
                        width={testimonial.width} // Dynamic width
                    />
                ))}
            </div>
        </>
    );
};
export default Testimonials;
