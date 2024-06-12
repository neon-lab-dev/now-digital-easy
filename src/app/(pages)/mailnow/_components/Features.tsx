import { ICONS } from '@/assets';
import Image from 'next/image';
import React from 'react';

interface FeatureItemProps {
  icon: string;
  text: string;
}

interface FeatureGroupProps {
  title: string;
  items: FeatureItemProps[];
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <div className='flex gap-2 px-2 items-center'>
    <Image src={icon} alt={''} />
    <span>{text}</span>
  </div>
);

const FeatureGroup: React.FC<FeatureGroupProps> = ({ title, items }) => (
  <div className='flex-col gap-3 flex'>
    <span className='text-[#AA39FF] text-20px font-source-sans-pro font-700'>{title}</span>
    {items.map(({ icon, text }, index) => (
      <FeatureItem key={index} icon={icon} text={text} />
    ))}
  </div>
);

const Features: React.FC = () => {
  const featureGroups: FeatureGroupProps[] = [
    {
      title: 'Cold Email Automation',
      items: [
        { icon: ICONS.pipeline, text: 'Automated follow-ups' },
        { icon: ICONS.connect, text: ' best copy win with A-Z' },
        { icon: ICONS.test, text: 'Task Management' },
      ],
    },
    {
      title: 'Hyper-Personalization',
      items: [
        { icon: ICONS.pipeline, text: 'Personalize at scale' },
        { icon: ICONS.connect, text: 'Create unique messages' },
        { icon: ICONS.connect, text: 'Write spam-free cold emails' },
      ],
    },
    {
      title: 'Deliverability Suite',
      items: [
        { icon: ICONS.test, text: 'Unlimited email accounts' },
        { icon: ICONS.supply, text: 'Unlimited Email Warm-up' },
        { icon: ICONS.supply, text: 'Send more emails daily' },

      ],
    },
  ];

  return (
    <div className='py-16 wrapper max-width'>
      <div className='flex justify-center'>
        <span className='text-5xl font-source-sans-pro font-900 text-primary-500 pb-6 max-lg:text-3xl'>Features</span>
      </div>
      <div className='flex justify-center max-lg:flex-col gap-6'>
        <div className='flex flex-col max-lg:flex-row max-lg:w-full max-lg:flex-wrap max-lg:gap-10 gap-4 w-[350px]'>
          {featureGroups.map(({ title, items }, index) => (
            <FeatureGroup key={index} title={title} items={items} />
          ))}
        </div>
        <div style={{
        "background": "linear-gradient(122.07deg, #F4F3F3 0.93%, #E2C1FC 100%)"
        }} className='w-full h-[450px] max-lg:h-[500px] max-md:h-[300px]'>
        </div>
      </div>
    </div>
  );
};

export default Features;
