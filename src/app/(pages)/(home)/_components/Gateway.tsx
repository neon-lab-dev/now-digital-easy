import gateway from "@/assets/images/gateway.png";
import Image from "next/image";

const Gateway = () => {
  return (
    <div className="bg-gradient-gateway py-10 md:pt-16 xl:pt-24">
      <div className="wrapper max-width flex flex-col items-center justify-center gap-6 md:gap-9 xl:gap-14">
        <div className="flex flex-col gap-4 text-center items-center">
          <span className="heading2 max-lg:text-[36px] max-md:text-[24px]">
            Gateway to Digital Success
          </span>
          <div className="flex justify-center max-w-[95%]">
            <span className="text-base-bold max-lg:text-[16px] max-md:text-[12px] max-md:leading-[16px] text-text-900/80">{`'Create' your digital footprint seamlessly, 'Manage' your operations and connections effectively, and 'Grow' your outreach exponentially. Experience the power of streamlined solutions designed to Launch, Organize, and Amplify your business in the digital landscape.`}</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={gateway}
            alt="gateway"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Gateway;
