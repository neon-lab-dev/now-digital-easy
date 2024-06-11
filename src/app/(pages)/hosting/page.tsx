// Page.tsx
import React from 'react';
import Hero from '@/app/(pages)/hosting/_components/Hero';
import Plans from '@/app/(pages)/hosting/_components/Plans';
import Choose from './_components/Choose';
import Plan from './_components/Plan';
import FAQs from '@/components/FAQs';

const Page: React.FC = () => {
  // Define different background styles based on the page
  const pageBackgroundStyles = {
    home: {
      background: "",
    },
    about: {
      background: "linear-gradient(90deg, #FFA6A6 0%, #FFD3B6 100%)",
    },
    contact: {
      background: "linear-gradient(90deg, #B8B8FF 0%, #FF9E9E 100%)",
    },
    // Add more styles for other pages as needed
  };

  return (
    <div>
        <Hero/>
        {/* Pass the background style as a prop to the Plan component */}
        <Plan backgroundStyle={ {background: "#F6E6F0"}}/>
        <Plans/>
        <Choose/>
        <FAQs style={{"background": "linear-gradient(237.45deg, #F7E4EF 1.14%, #F3F3FF 47.1%, #E4E6FF 98.67%)"}}/>
    </div>
  )
}

export default Page;
