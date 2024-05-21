import gateway from "@/assets/images/Gateway.svg"
import Image from "next/image"

const Gateway = () => {
    return (
        <div className=" bg-gradient-gayway py-10">
            <div className="flex flex-col gap-4 px-16 text-center items-center  mt-[120px]">
                <span className="heading2 max-lg:text-[36px] max-md:text-[24px]">Gateway to Digital Success</span>
                <div className='flex justify-center w-[1041px] max-lg:w-[700px] max-md:w-[350px]'>
                    <span className="text-base-bold max-lg:text-[16px] max-md:text-[12px] max-md:leading-[16px]">{`'Create' your digital footprint seamlessly, 'Manage' your operations and connections effectively, and 'Grow' your outreach exponentially. Experience the power of streamlined solutions designed to Launch, Organize, and Amplify your business in the digital landscape.`}</span>
                </div>
            </div>
            <div className="flex justify-center pb-16 pt-[120px] max-md:pt-[80px]">
                <Image src={gateway} alt="gateway" className="w-[1250px] max-lg:w-[720px] max-md:w-[360px]" />
            </div>
        </div>
    )   
}

export default Gateway