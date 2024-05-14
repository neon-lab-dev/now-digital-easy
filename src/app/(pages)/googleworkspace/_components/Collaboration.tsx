import col from '@/assets/images/Rectangle 45977.svg'
import Image from 'next/image'
const Collaboration = () => {
    return (
        <div>
            <div className="mt-[120px] flex justify-center">
                <div className="flex justify-center text-center w-[1055px]">
                    <span className="text-[55px] leading-[56px]">Google Workspace: Transforming Collaboration and Productivity</span>
                </div>
            </div>
            <div className=" mt-10 flex justify-center">
                <div className="flex justify-center text-center w-[1155px] text-[18px]">
                    <p>Discover the power of Google Workspace, an integrated suite of cloud-based productivity tools designed to supercharge teamwork, streamline communication, and boost productivity. Explore our comprehensive guide to Google Workspace &apos;s apps, features, and benefits for businesses, educational institutions, and individuals. From Gmail and Google Drive to Google Meet and beyond, harness the potential of collaborative work with Google Workspace.</p>
                </div>
            </div>
            <div className='flex justify-center pt-16'>
                <div className="bg-[#000AFF] w-[800px]">
                    <div className='flex justify-center pt-[150px] items-center text-white'>
                        <span className='w-[400px] text-[44px] leading-[66px] '>Want to know about Google Workspace Services At Your Fingertips.</span>
                    </div>
                    <div className='ml-[120px] pt-[30px]'>
                        <button className='text-white border border-1 text-[15px] px-6 py-4 rounded-[50px]'>Contact Us</button>
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