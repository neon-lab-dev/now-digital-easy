import Image from "next/image";
import group1 from "@/assets/images/Group 69505.svg";
import arrow from "@/assets/images/Group 69507.svg";


const Section = () => {
    return (
        <>
            <div className={`bg-[#F5F5F5] `}>
                <div className="flex justify-center max-lg:flex-col-reverse gap-[150px] max-lg:gap-0 items-center">
                    <div className="flex flex-col gap-6 text-start max-lg:text-center w-[600px] max-md:w-[400px] max-md:p-2 p-10">
                        <span className="text-[35px] text-[#000659] leading-[35px]">
                            Stay professional with
                            email@yourdomain.com
                        </span>
                        <p className="text-[17px] w-[431px] max-lg:w-[500px] max-md:w-[400px]">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] text-[18px]">GET CUSTOM EMAILS</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center  py-16">
                        <Image src={group1} alt="" className="" />
                    </div>
                </div>
                <div className={`h-[150px] bg-fg-background`}></div>
            </div>
            <div className={`bg-[#EEFAFF]`}>
                <div className="flex justify-center max-lg:flex-col gap-[150px] items-center">
                    <div className="flex justify-center py-16">
                        <Image src={""} alt="" className="w-[300px]" />
                    </div>
                    <div className="flex flex-col gap-6 text-start max-lg:text-center w-[600px] max-md:w-[400px] max-md:p-2  p-10">
                        <span className="text-[35px] text-[#000659] leading-[35px] w-[250px] max-lg:w-[500px] max-md:w-[400px]">
                            Extensive
                            Control Panel
                        </span>
                        <p className="text-[17] w-[431px] max-lg:w-[500px] max-md:w-[400px]">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] text-[18px]">GET CUSTOM EMAILS</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`h-[150px] bg-bg-background`}></div>
            </div>
            <div className={`bg-[#F5F5F5]`}>
                <div className="flex justify-center gap-[150px] max-lg:flex-col-reverse items-center">
                    <div className="flex flex-col gap-6 text-start max-lg:text-center w-[600px] max-md:w-[400px] max-md:p-2 p-10">
                        <span className="text-[35px] text-[#000659] leading-[35px]">
                        Unparalleled security and privacy
                        </span>
                        <p className="text-[17] w-[431px] max-lg:w-[500px] max-md:w-[400px]">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] text-[18px] ">SECURE EMAIL DATA</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center py-16">
                        <Image src={""} alt="" className="w-[400px]" />
                    </div>
                </div>
                <div className={`h-[150px] bg-gg-background`}></div>
            </div>
            <div className={`bg-[#EAEBFF]`}>
                <div className="flex justify-center gap-[150px] max-lg:flex-col items-center">
                <div className="flex justify-center py-16">
                        <Image src={""} alt="" className="w-[400px]" />
                    </div>
                    <div className="flex flex-col gap-6 text-start max-lg:text-center w-[600px] max-md:w-[400px] max-md:p-2 p-10">
                        <span className="text-[35px] text-[#000659] leading-[35px]">
                            Stay professional with
                            email@yourdomain.com
                        </span>
                        <p className="text-[17] w-[431px] max-lg:w-[500px] max-md:w-[400px]">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] text-[18px]">RETAIN AND BACKUP</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`h-[150px] bg-background-fade`}></div>
            </div>
        </>
    );
};

export default Section;
