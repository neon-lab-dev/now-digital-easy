import React from 'react'
import Hero from '@/app/(pages)/hosting/_components/Hero'
import Plans from '@/app/(pages)/hosting/_components/Plans'
import Choose from './_components/Choose'
import Plan from './_components/Plan'

const page = () => {
  return (
    <div>
        <Hero/>
        <Plan/>
        <Plans/>
        <Choose/>
    </div>
  )
}

export default page