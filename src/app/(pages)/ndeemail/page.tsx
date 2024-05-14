"use client"
import FAQs from '@/components/FAQs'
import React from 'react'
import MalionMoblie from './_components/MalionMoblie'
import Section from '@/app/(pages)/ndeemail/_components/Section'
import Hero from '@/app/(pages)/ndeemail/_components/Hero'
import Stepper from '@/components/Stepper'
import { steps } from '@/components/Sidebar'

const page = () => {
  return (
    <div>
      <Hero/>
      <Section />
      <MalionMoblie/>
      <FAQs />
    </div>
  )
}

export default page