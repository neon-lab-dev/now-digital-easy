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
    <span className=' font-merriweather text-[15px]'>{text}</span>
  </div>
);

const FeatureGroup: React.FC<FeatureGroupProps> = ({ title, items }) => (
  <div className='flex-col gap-3 flex'>
    <span className='text-primary-400 text-[18px] font-700 font-source-sans-pro'>{title}</span>
    {items.map(({ icon, text }, index) => (
      <FeatureItem key={index} icon={icon} text={text} />
    ))}
  </div>
);

const Features: React.FC = () => {
  const featureGroups: FeatureGroupProps[] = [
    {
      title: 'Pipeline Management',
      items: [
        { icon: ICONS.pipeline, text: 'Team Pipelines' },
        { icon: ICONS.connect, text: 'Connected Pipelines' },
        { icon: ICONS.test, text: 'Task Management' },
        { icon: ICONS.supply, text: 'Products' },
      ],
    },
    {
      title: 'Customer Management',
      items: [
        { icon: ICONS.pipeline, text: 'Team Pipelines' },
        { icon: ICONS.connect, text: 'Connected Pipelines' },
      ],
    },
    {
      title: 'Multichannel Communication',
      items: [
        { icon: ICONS.test, text: 'Task Management' },
        { icon: ICONS.supply, text: 'Products' },
      ],
    },
    {
      title: 'Automation',
      items: [
        { icon: ICONS.connect, text: 'Connected Pipelines' },
        { icon: ICONS.test, text: 'Task Management' },
      ],
    },
    {
      title: 'Security',
      items: [
        { icon: ICONS.pipeline, text: 'Team Pipelines' },
        { icon: ICONS.supply, text: 'Products' },
        { icon: ICONS.connect, text: 'Connected Pipelines' },
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
          "background": "linear-gradient(112.9deg, #D3D6FD 0%, #FFEF99 100%)"
        }} className='w-full h-[700px] max-lg:h-[500px] max-md:h-[300px]'>
        </div>
      </div>
    </div>
  );
};

export default Features;
