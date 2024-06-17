import FAQs from '@/components/FAQs'
import React from 'react'
import Plan from '../hosting/_components/Plan'
import Solution from './_components/Solution'
import Featrues from './_components/Features'
import ChooseNDE from './_components/ChooseNDE'
import Hero from './_components/Hero'

const page = () => {
    return (
        <div>
            <Hero />
            <Solution />
            <Featrues />
            <Plan
                bgColor="#EFE3F6"
                desc="Bigin's promise to you is simple: No forced multi-year contracts, no hidden charges. You don't need to enter your credit card information to get started. Cancel anytime!"
            />
            <ChooseNDE />
            <FAQs style={{ "background": "linear-gradient(237.45deg, #E3C2FC 1.14%, #D4DBFC 98.67%" }} />
        </div>
    )
}

export default page