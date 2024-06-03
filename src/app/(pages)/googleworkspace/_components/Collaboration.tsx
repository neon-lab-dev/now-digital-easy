import col from "@/assets/images/Rectangle 45977.svg";
import Image from "next/image";
const Collaboration = () => {
  return (
    <div className="mt-[120px] max-md:mt-[20px] f">
      <div className="wrapper max-width">
        <div className="flex justify-center">
          <div className="flex justify-center font-source-sans-pro font-900 text-center w-[1055px] tracking-tighter max-lg:w-full max-md:w-[375px] max-lg:mx-1">
            <span className="text-[55px] max-lg:text-[34px] leading-[56px] max-lg:leading-[34px] max-md:text-[21px] max-md:leading-[24px] text-[#000659]">
              Google Workspace: Transforming Collaboration and Productivity
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-8 flex justify-center">
          <div className="flex justify-center text-center font-merriweather font-700 w-[1120px] text-[17px] max-lg:w-full max-lg:mx-6 max-lg:text-[17px] max-md:text-[12px]">
            <p>
              Discover the power of Google Workspace, an integrated suite of
              cloud-based productivity tools designed to supercharge teamwork,
              streamline communication, and boost productivity. Explore our
              comprehensive guide to Google Workspace &apos;s apps, features,
              and benefits for businesses, educational institutions, and
              individuals. From Gmail and Google Drive to Google Meet and
              beyond, harness the potential of collaborative work with Google
              Workspace.
            </p>
          </div>
        </div>
      </div>
      {/* //todo */}
      <div className="flex justify-center max-xl:flex-col pt-8  font-source-sans-pro">
        <div className="bg-[#000AFF] flex items-center justify-center flex-col max-lg:w-full px-5 py-4 gap-8 md:px-7 md:py-12 xl:py-24 xl:px-12">
          <div className="xl:w-[300px] 2xl:w-[400px] font-900 text-white max-lg:w-full max-w-[850px] text-[38px] 2xl:text-[44px] max-lg:text-[40px] max-xl:text-center max-md:text-[28px] leading-tight">
            Want to know about Google Workspace Services At Your Fingertips.
          </div>
          <button className="text-white  hover:bg-white hover:text-[#000659] border-2 text-[15px] px-6 max-lg:py-2  py-4 xl:self-start rounded-[50px]">
            Contact Us
          </button>
        </div>
        <div>
          <Image src={col} alt={""} className="w-[1280px]" />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
