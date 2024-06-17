import React from 'react'
interface Feature {
    title: string;
    description: string;
  }
  
const Choose = () => {
    const features: Feature[] = [
        {
            title: 'Email Sequence',
            description: "Get to the bottom of simple queries in no time and increase team productivity.",
        },
        {
            title: 'Sequence Score',
            description: 'Analyze metrics and create custom reports to improve live chat support.',
        },
        {
            title: 'Auto Follow-up',
            description: "See pages your customer is browsing and chat previews in real-time.",
        },
        {
            title: 'Email Sequence',
            description: "Get to the bottom of simple queries in no time and increase team productivity.",
        },
        {
            title: 'Sequence Score',
            description: 'Analyze metrics and create custom reports to improve live chat support.',
        },
        {
            title: 'Auto Follow-up',
            description: "See pages your customer is browsing and chat previews in real-time.",
        },
    ];
    return (
        <div className='bg-[#F4F3F3] my-10 wrapper '>
            <div className=' flex justify-center pt-16 max-width'>
                <span className=' text-5xl max-lg:text-3xl max-lg:text-center font-source-sans-pro font-900 text-primary-500 tracking-tighter pb-6 '>One-stop solution for cold email lead generation</span>
            </div>
            <div className='flex justify-center flex-wrap  pt-8 pb-8 gap-[40px]  px-10  max-md:px-0  max-width'>
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col w-[350px] max-lg:w-[230px] max-md:w-[300px] rounded-xl'>
                        <div className='flex'>
                            <div className='w-[44px] h-[44px] bg-[#E3C2FC] rounded-[4px] my-6'></div>
                        </div>
                        <span className='font-source-sans-pro font-900 text-[24px] leading-[24px] tracking-tighter '>{feature.title}</span>
                        <p className='font-merriweather font-extralight text-[16px] leading-[24px] py-3'>{feature.description}</p>
                    </div>
                ))}
            </div>z
        </div>
    )
}

export default Choose