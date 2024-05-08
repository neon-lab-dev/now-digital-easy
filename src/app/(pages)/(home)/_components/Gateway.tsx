import gateway from "@/assets/images/Gateway.svg"
import Image from "next/image"

const Gateway = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 px-16 text-center items-center  mt-[120px]">
                <span className="heading2">Gateway to Digital Success</span>
                <div className='flex justify-center w-[1041px]'>
                    <span className="text-base-bold">'Create' your digital footprint seamlessly, 'Manage' your operations and connections effectively, and 'Grow' your outreach exponentially. Experience the power of streamlined solutions designed to Launch, Organize, and Amplify your business in the digital landscape.</span>
                </div>
            </div>
            <div className="flex justify-center pb-16 pt-[120px]">
                <Image src={gateway} alt="gateway" className="w-[1250px] max-lg:w-[1001px] " />
            </div>
        </div>
    )
}

export default Gateway