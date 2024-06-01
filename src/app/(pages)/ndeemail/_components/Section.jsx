import Image from "next/image";
import group1 from "@/assets/images/Group 69505.svg";
import arrow from "@/assets/images/Group 69507.svg";


const Section = () => {
    return (
        <>
            <div className={`bg-[#F5F5F5] `}>
                <div className="flex justify-center max-lg:flex-col-reverse gap-16 max-lg:gap-0 max-md:gap-10 items-center">
                    <div className="flex flex-col gap-6 max-lg:gap-3 text-start max-lg:text-center w-[600px] max-lg:w-[700px] max-md:w-[350px] max-md:p-2 p-10">
                        <span className="text-[35px]  max-md:leading-7 text-[#000659] max-lg:text-[24px] font-source-sans-pro font-900 leading-[35px]">
                            Stay professional with email@yourdomain.com
                        </span>
                        <p className="text-[16px] font-merriweather  text-[#646464] ">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] text-[16px]  font-merriweather font-semibold">GET CUSTOM EMAILS</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                    <Image src={group1} alt="" className="w-[460px] max-lg:w-[600px] max-md:w-[350px]" />

                </div>
                <div className={`h-[150px] bg-fg-background`}></div>
            </div>
            <div className={`bg-[#EEFAFF]`}>
                <div className="flex justify-center max-lg:flex-col gap-[160px] items-center">
                    <Image src={""} alt="" className="w-[460px]" />
                    <div className="flex flex-col gap-6 max-lg:gap-3 text-start max-lg:text-center w-[500px] max-lg:w-[700px] max-md:w-[350px] max-md:p-2 p-10">
                        <span className="text-[35px] text-[#000659] max-lg:text-[25px] font-source-sans-pro font-900 leading-[35px] w-[300px] max-lg:w-[600px] max-md:w-[350px] ">
                            Extensive
                            Control Panel
                        </span>
                        <p className="text-[18px]  font-merriweathe text-[#646464]">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] font-merriweather font-semibold text-[18px] ">GET CUSTOM EMAILS</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`h-[150px] bg-bg-background`}></div>
            </div>
            <div className={`bg-[#F5F5F5]`}>
                <div className="flex justify-center gap-[100px] max-lg:flex-col-reverse items-center">
                    <div className="flex flex-col gap-6 max-lg:gap-4 text-start max-lg:text-center w-[600px] max-md:w-[350px] max-lg:w-[700px] max-md:p-2 p-10">
                        <span className="text-[35px] text-[#000659] max-lg:text-[24px] font-source-sans-pro font-900 leading-[35px] max-md:leading-[30px]">
                            Unparalleled security and privacy
                        </span>
                        <p className="text-[18px] text-[#646464]  font-merriweather ">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] font-merriweather font-semibold text-[18px] ">SECURE EMAIL DATA</span>
                            <button>
                                <Image src={arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                    <Image src={""} alt="" className="w-[460px]" />
                </div>
                <div className={`h-[150px] bg-gg-background`}></div>
            </div>
            <div className={`bg-[#EAEBFF]`}>
                <div className="flex justify-center gap-[210px] max-lg:flex-col items-center">
                    <Image src={""} alt="" className="w-[460px]" />
                    <div className="flex flex-col gap-6 max-lg:gap-4 text-start max-lg:text-center w-[600px] max-md:w-[350px] max-lg:w-[700px] max-md:p-2 p-10">
                        <span className="text-[35px] text-[#000659] max-lg:text-[24px] font-source-sans-pro font-900 leading-[35px]">
                        Email retention and e-Discoveryg
                        </span>
                        <p className="text-[18px] text-[#646464] font-merriweather ">Create a domain for your business and set up custom email addresses for users. Unique and professional email addresses give your company the visibility and authenticity it deserves</p>
                        <div className="flex items-center max-lg:justify-center gap-4">
                            <span className="text-[#0088FF] text-[18px] font-merriweather font-semibold ">RETAIN AND BACKUP</span>
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
