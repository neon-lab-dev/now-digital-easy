import React from 'react'


interface Feature {
    title: string;
    description: string;
  }
  
const Choose = () => {
    const features: Feature[] = [
        {
            title: '1-click Application Installer',
            description: "With the 1-Click Application Installer, our customers will not only be able to deploy Applications' instances with ease, but they can also configure every installation separately! The Installer also allows for maintaining different application versions in different folders!",
        },
        {
            title: 'Consistent Backups',
            description: 'Backing up a website is quite an easy task, but maintaining healthy daily backups is always a challenge. All Open Source Hosting plans have automated cPanel backup service activated by default. The backup frequency is daily, and the backups can be restored for free whenever those are needed.',
        },
        {
            title: 'LiteSpeed Web Server Cache',
            description: "Here at HostArmada, we take the caching to the next level! With an intuitive caching mechanism, the websites of our customers' websites not only load faster, but they also have a minimal resource usage footprint, allowing more website visitors on smaller plans!",
        },
        {
            title: 'Managed Web Hosting service',
            description: 'With our Managed Cloud SSD Shared Hosting packages, our customers will never have to worry about the health and the up-to-date state of our web hosting environment! We will fully take care of that aspect!',
        },
    ];
    return (
        <>
            <div className=' flex justify-center pt-8 '>
                <span className=' text-5xl font-source-sans-pro font-900 text-primary-500 tracking-tighter pb-6 max-md:text-xl'>Why Choose NDE Hosting</span>
            </div>
            <div className='flex justify-center flex-wrap max-lg:gap-8 pt-8 gap-1 pb-[80px]'>
                {features.map((feature, index) => (
                    <div key={index} className='flex flex-col w-[310px] h-[430px] shadow-xl border border-b-[8px] border-b-primary-500 rounded-xl border-t-none'>
                        <div className='flex justify-center'>
                            <div className='w-[44px] h-[44px] bg-[#F2C8DC] rounded-[4px] my-6'></div>
                        </div>
                        <span className='text-center font-source-sans-pro font-900 text-[24px] leading-[24px] tracking-tighter py-2 h-[60px]'>{feature.title}</span>
                        <p className='text-center font-merriweather font-extralight text-[15px] leading-[24px] px-3 py-2'>{feature.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Choose