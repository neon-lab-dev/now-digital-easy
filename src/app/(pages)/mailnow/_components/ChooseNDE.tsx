import React from 'react';

const ChooseNDE: React.FC = () => {
  return (
    <div className='flex justify-center items-center py-16 gap-10'>
      <div className='flex flex-col max-w-[517px] gap-4'>
        <span className='heading4 text-primary-500'>Why Choose NDE’s Mails Now Tool?</span>
        <p className='text-xs'>Offer top-notch cobrowsing directly from your app with one-click initiation to enhance remote support and solve customer issues more efficiently.</p>
      </div>
      <div className='grid grid-cols-1 gap-10'>
        <FeatureCard bgColor='#F5F6FF' title='Instant' description='No links or codes. Cobrowse with users directly within your product and see your customer&apos;s screen instantly.' />
        <FeatureCard bgColor='#F5FFE5' title='Privacy' description='You choose what to see and what to hide with customizable data masking options.' />
        <FeatureCard bgColor='#FFECD7' title='Console' description='See console events and user journeys during live calls to troubleshoot effortlessly.' />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ bgColor: string; title: string; description: string }> = ({ bgColor, title, description }) => {
  return (
    <div className={`w-[517px] bg-[${bgColor}] p-4`}>
      <span className='text-base-bold'>{title}</span>
      <p className='w-[300px] text-xs'>{description}</p>
    </div>
  );
};

export default ChooseNDE;
