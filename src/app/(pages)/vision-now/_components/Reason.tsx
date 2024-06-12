import React from 'react'


interface Feature {
    title: string;
    description: string;
  }
  
const Choose = () => {
    const features: Feature[] = [
        {
            title: 'Easy to use',
            description: "Get to the bottom of simple queries in no time and increase team productivity.",
        },
        {
            title: 'Easy on your pocket',
            description: 'Analyze metrics and create custom reports to improve live chat support.',
        },
        {
            title: 'Easy on any platform',
            description: "See pages your customer is browsing and chat previews in real-time.",
        },
    ];
    return (
        <>
            <div className=' flex justify-center pt-16 bg-[#F5F6FF]'>
                <span className=' text-5xl max-lg:text-3xl font-source-sans-pro font-900 text-primary-500 tracking-tighter pb-6 max-md:text-xl'>More reasons to try Vision Now today</span>
            </div>
            <div className='flex justify-center flex-wrap max-lg:gap-4 pt-8 pb-8 gap-[100px]  bg-[#F5F6FF]'>
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col w-[275px] max-lg:w-[230px] max-md:w-[300px] rounded-xl'>
                        <div className='flex'>
                            <div className='w-[44px] h-[44px] bg-[#FFEF9B] rounded-[4px] my-6'></div>
                        </div>
                        <span className='font-source-sans-pro font-900 text-[24px] leading-[24px] tracking-tighter '>{feature.title}</span>
                        <p className='font-merriweather font-extralight text-[16px] leading-[24px] py-3'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Choose