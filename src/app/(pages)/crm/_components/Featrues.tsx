import { ICONS } from '@/assets'
import Image from 'next/image'
import React from 'react'

const Featrues = () => {
    return (
        <div className='py-16 wrapper max-width'>
            <div className=' flex justify-center pt-8 py-10'>
                <span className=' text-5xl font-source-sans-pro font-900 text-primary-500 pb-6 max-lg:text-3xl'>Features</span>
            </div>
            <div className='flex justify-center max-lg:flex-col gap-6'>
                <div className='flex flex-col max-lg:flex-row max-lg:w-full max-lg:flex-wrap  max-lg:gap-10 gap-4 w-[350px]'>
                    <div className=' flex-col gap-3 flex '>
                        <span className=' text-primary-400 text-[20px] font-source-sans-pro '>Pipeline Management</span>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.pipeline} alt={''} />
                            <span>Team Pipelines</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.connect} alt={''} />
                            <span>Connected Pipelines</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.test} alt={''} />
                            <span>Task Management</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.supply} alt={''} />
                            <span>Products</span>
                        </div>
                    </div>
                    <div className=' flex-col gap-3 flex'>
                        <span className=' text-primary-400 text-[20px] font-source-sans-pro '>Customer Management</span>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.pipeline} alt={''} />
                            <span>Team Pipelines</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.connect} alt={''} />
                            <span>Connected Pipelines</span>
                        </div>
                    </div>
                    <div className='flex-col gap-3 flex'>
                        <span className=' text-primary-400 text-[20px] font-source-sans-pro '>Multichannel Communication</span>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.test} alt={''} />
                            <span>Task Management</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.supply} alt={''} />
                            <span>Products</span>
                        </div>
                    </div>
                    <div className=' flex-col gap-3 flex'>
                        <span className=' text-primary-400 text-[20px] font-source-sans-pro '>Automation</span>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.connect} alt={''} />
                            <span>Connected Pipelines</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.test} alt={''} />
                            <span>Task Management</span>
                        </div>
                    </div>
                    <div className=' flex-col gap-3 flex'>
                        <span className=' text-primary-400 text-[20px] font-source-sans-pro '>Security</span>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.pipeline} alt={''} />
                            <span>Team Pipelines</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.supply} alt={''} />
                            <span>Products</span>
                        </div>
                        <div className=' flex gap-2 px-2  items-center'>
                            <Image src={ICONS.connect} alt={''} />
                            <span>Connected Pipelines</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    "background": "linear-gradient(112.9deg, #D3D6FD 0%, #FFEF99 100%)"
                }} className='w-full h-[700px] max-lg:h-[500px] max-md:h-[300px]'>
                </div>
            </div>
        </div>
    )
}

export default Featrues