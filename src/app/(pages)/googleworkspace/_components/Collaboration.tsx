import col from '@/assets/images/Rectangle 45977.svg'
import Image from 'next/image'
const Collaboration = () => {
    return (
        <div className=''>
            <div className="mt-[120px] flex justify-center">
                <div className="flex justify-center text-center w-[1055px] max-lg:w-full max-lg:mx-1">
                        <span className="text-[55px] max-lg:text-[34px] leading-[56px] max-lg:leading-[34px] max-md:text-[24px] text-[#000659]">Google Workspace: Transforming Collaboration and Productivity</span>
                </div>
            </div>
            <div className=" mt-10 flex justify-center">
                <div className="flex justify-center text-center w-[1155px] text-[18px] max-lg:w-full max-lg:mx-6 max-lg:text-[17px] max-md:text-[15px]">
                    <p>Discover the power of Google Workspace, an integrated suite of cloud-based productivity tools designed to supercharge teamwork, streamline communication, and boost productivity. Explore our comprehensive guide to Google Workspace &apos;s apps, features, and benefits for businesses, educational institutions, and individuals. From Gmail and Google Drive to Google Meet and beyond, harness the potential of collaborative work with Google Workspace.</p>
                </div>
            </div>
            <div className='flex justify-center max-lg:flex-col  pt-16 '>
                <div className="bg-[#000AFF] w-[800px] max-lg:w-full ">
                    <div className='flex justify-center pt-[150px] max-lg:pt-[20px]  items-center text-white'>
                        <span className='w-[400px] max-lg:w-full text-[44px] leading-[66px] max-lg:leading-[40px] max-lg:text-[40px] max-lg:text-center max-md:text-[28px] max-md:leading-[28px]'>Want to know about Google Workspace Services At Your Fingertips.</span>
                    </div>
                    <div className='ml-[90px] max-lg:ml-0 pt-[10px] flex max-lg:justify-center max-lg:mb-[70px] max-md:mb-8 max-md:mt-[40px]'>
                        <button className='text-white border border-1 text-[15px] px-6 max-lg:py-2  py-4 rounded-[50px]'>Contact Us</button>
                    </div>
                </div>
                <div>
                    <Image src={col} alt={''} className='w-[1280px]' />
                </div>
            </div>
        </div>
    )
}

export default Collaboration