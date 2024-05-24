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
    width:Boolean

}

// Define the types for TestimonialCard props
interface TestimonialCardProps {
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    testimonial: Testimonial;
}


const TestimonialCard: React.FC<TestimonialCardProps> = ({
    isHovered,
    onMouseEnter,
    onMouseLeave,
    testimonial,
}) => {
    return (
        <div
            className={`relative h-[299px] max-md:h-[250px] max-md:w-[380px] max-lg:w-[652px] ${testimonial.width ? 'w-[752px] ': 'w-[500px]'} ${isHovered ? 'bg-[#C9CDFF]' : 'bg-background-light'}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Image
                className={`absolute right-0  ${isHovered ? 'w-[180px]' : 'w-[150px]'}`}
                src={testimonial.backgroundImage}
                alt="Testimonial background"

            />
            <div className="pl-[23px] pt-[23px]">
                <Image
                    src={comma}
                    width={30}
                    height={30}
                    alt="Quote symbol"
                    className=' max-md:w-[15px]'
                />
            </div>
            <div className={`pl-[23px] py-4 max-md:py-1 h-[140px] ${testimonial.width?'w-[480px]':'w-[300px]'} max-md:w-[200px] max-lg:w-[500px] max-md:text-[12px]`}>
                <span className="text-base-bold max-md:text-[10px] max-md:leading-[5px]">
                    {`“${testimonial.quote}”`}
                </span>
            </div>
            <div className="flex flex-col pt-4 max-md:pt-0 pl-[23px]">
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
            width:true
        },
        {
            quote: '“Now Digital Easy has the best customer support I have ever experienced. Their team is very ....',
            author: 'Jenny Smith',
            position: 'Project Manager',
            backgroundImage: author2,
            width:false
            
        },
        {
            quote: 'Amazing product with excellent customer service. They are always ready to help.',
            author: 'Michael Johnson',
            position: 'Operations Manager',
            backgroundImage: author2,
            width:false
        },
        {
            quote: 'Amazing product with excellent customer service. They are always ready to help.',
            author: 'Michael Johnson',
            position: 'Operations Manager',
            backgroundImage: author1,
            width:true
        },
    ];
    return (
        <>
            <div className=" pt-[100px] max-lg:pt-[50px] flex">
                <div className='flex justify-center'>
                    <div className="flex flex-col gap-4 text-start pl-[130px] max-lg:pl-[60px] max-md:pl-[20px]">
                        <span className="subheading1 text-[#646464] max-md:text-[20px]">People just love working with us!</span>
                        <span className="heading4 max-lg:text-[40px] max-md:text-[24px] max-md:leading-[24px] text-[#000659]">Digitalized Business, Happy Customers, That’s Impact</span>
                    </div>
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
                    />
                ))}
            </div>
        </>
    );
};
export default Testimonials;
