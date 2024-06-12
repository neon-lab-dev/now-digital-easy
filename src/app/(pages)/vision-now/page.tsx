import React from 'react'
import Hero from './_components/Hero'
import Reason from './_components/Reason'
import Choose from './_components/Choose'
import Plan from '../hosting/_components/Plan'
import FAQs from '@/components/FAQs'
import Featrues from './_components/Featrues'

const page = () => {
  return (
    <div>
        <Hero/>
        <Featrues/>
        <Reason/>
        <Choose/>
        <Plan
        bgColor="#FFEF9A"
        desc="Bigin's promise to you is simple: No forced multi-year contracts, no hidden charges. You don't need to enter your credit card information to get started. Cancel anytime!"
      />
        <FAQs style={{"background": "linear-gradient(237.45deg, #FFEF9C 1.14%, #D4DBFC 98.67%)"}}/>
    </div>
  )
}

export default page