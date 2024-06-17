import React from 'react';
import Popularpost from './Popularpost';
import Image from 'next/image';
import { ICONS } from '@/assets';

const Hero = () => {
    return (
        <div className='flex justify-center gap-10 my-10 warpper max-width'>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-4'>
                    <span className='text-4xl font-source-sans-pro font-900'>How to create an omnichannel customer engagement strategy</span>
                    <Image src={ICONS.blog} alt='' className='w-full' />
                </div>
                <div className='flex justify-between py-4 items-center'>
                    <span className='underline font-bold'>Posted On&nbsp;March 29, 2024&nbsp;</span>
                    <button className='bg-[#C9CDFF] text-primary-400 font-source-sans-pro font-700 py-2 px-3 rounded-3xl'>Design</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <p>Let&apos;s talk customer engagement—the holy grail of any business. Sephora is often considered the &apos;Sensei&apos; of customer engagement, thanks to its highly personalized Beauty Insider program and its tech-driven approach to providing a seamless customer experience.
                        However, delivering the greatest possible customer experience and engagement is complex and challenging. It requires hard and smart work. Simply providing good service and a cheerful smile isn&apos;t enough. Customers switch across channels—from browsing the website to chatting—and they expect a consistent experience no matter where they contact you.
                        Putting in place an omnichannel customer interaction strategy is one way we can deliver a positive customer experience.
                        In this article, we&apos;ll explore the concept of omnichannel customer engagement and effective strategies to amplify its impact.
                    </p>
                    <span className='font-source-sans-pro font-900 text-3xl'>What is omnichannel customer engagement?</span>
                    <p>The term &quot;omnichannel customer engagement&quot; describes how different communication channels are strategically integrated to offer a unified and consistent customer experience across all touchpoints.
                    Customer engagement through omnichannel is a two-way street. By using this method, customers receive a consistent experience, and businesses gain a comprehensive understanding of who their customers are.</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>What makes omnichannel customer engagement necessary?</span>
                    <p>Putting into practice a clear omnichannel strategy has several advantages, such as: Enhanced customer loyalty and satisfaction Improved brand perception Better sales and revenue</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>Challenges of creating an omnichannel customer engagement strategy</span>
                    <p>Even if there might be big benefits, there are several challenges that can hinder your journey.</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>Siloed data and systems</span>
                    <p>Companies often operate in silos, with different departments using separate systems and databases. This fragmented landscape makes it difficult to unify customer data and gain a holistic view of their interactions. This lack of a centralized view can lead to inconsistencies in messaging and personalization across channels.</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>Content personalization paradox</span>
                    <p>Customers crave personalized experiences, but achieving this at a large scale can be tricky. Tailoring content to individual preferences requires a deep understanding of customer behavior and preferences. However, gathering and ethically utilizing such data can be complex, requiring careful consideration of privacy regulations and customer expectations.</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>Change management hurdle</span>
                    <p>Shifting to an omnichannel approach often necessitates a cultural shift within the organization. Employees accustomed to traditional, siloed workflows may resist the change, requiring training and support to adapt to the new collaborative environment.</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>Measuring the maze</span>
                    <p>Measuring the maze
                    It might be difficult to assess an omnichannel strategy&apos;s effectiveness. Conventional metrics related to specific channels might not precisely depict the combined impact of the complete omnichannel encounter. Establishing thorough KPIs that record the client journey at every touchpoint is essential to successfully tracking results and refining your plan.</p>
                    <span className='font-source-sans-pro font-900 text-3xl'>Technological hurdles</span>
                    <p>Technological hurdles
                    Implementing an omnichannel strategy often requires investing in new technologies to integrate various channels and systems. Choosing the right technology stack, ensuring data security, and maintaining system integrations can be complex and resource-intensive.</p>
                </div>
                <div className='mt-16'>
                    <span className='font-source-sans-pro font-900 text-[#5E18EB] text-2xl'>Recent Blog Posts</span>
                </div>
                <div>
                    Recent Blog post
                </div>
            </div>
            <div>
                <Popularpost />
            </div>
        </div>
    );
};

export default Hero;
