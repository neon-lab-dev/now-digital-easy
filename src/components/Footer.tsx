import Image from "next/image";
import footer from "@/assets/images/Group 69454.svg";
import facebook from "@/assets/images/Group 69458.svg";
import insta from "@/assets/images/Group 69459.svg";
import linkedin from "@/assets/images/Group 69455.svg";
import logo from "@/assets/images/logo.svg";
import vector from "@/assets/images/Vector.svg";
import GooglePartner from "@/assets/images/image 63.svg";
import GoogleReview from "@/assets/images/image 64.svg";
import facebookReview from "@/assets/images/Mask group.svg";

const Footer = () => {
  return (
    <footer className="relative mt-[180px]">
      <Image
        className="absolute inset-0 w-full"
        style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} src={footer} alt={"footer"} />
      <div className="relative z-10 mx-[130px] mt-[150px]">
        <div className="flex justify-between">
          <div className="flex gap-[100px]">
            <div>
              <span className=" font-source-sans-pro text-[17px] font-600 text-[#000659]">COMPANY</span>
              <ul className="flex flex-col gap-3 py-2 text-[13px] text-[#151D8C]">
                <li>About Us</li>
                <li>Payment Method</li>
                <li>Refund Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <span className=" font-source-sans-pro text-[17px] font-600  text-[#000659]">SERVICES</span>
              <ul className="flex flex-col gap-3 py-2 text-[13px] text-[#151D8C]">
                <li>Register Domains</li>
                <li>Transfer Domains</li>
                <li>Manage Domains</li>
                <li>Web Hosting</li>
                <li>Google Workspace</li>
              </ul>
            </div>
            <div>
              <span className="font-source-sans-pro text-[17px] font-600  text-[#000659]">PRODUCTS</span>
              <ul className="flex flex-col gap-3 py-2 text-[13px] text-[#151D8C]">
                <li>NDE Mail</li>
                <li>Vision Now</li>
                <li>Peoples Now</li>
                <li>Spot Now</li>
                <li>Marketing Studio</li>
              </ul>
            </div>
            <div>
              <span className=" font-source-sans-pro text-[17px] font-600  text-[#000659]">SUPPORT</span>
              <ul className="flex flex-col gap-3 py-2 text-[13px] text-[#151D8C]">
                <li>Open Tickets</li>
                <li>Blog</li>
                <li>Live Chat</li>
                <li>Change Management</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-source-sans-pro text-[17px] font-600  text-[#000659] text-right ">Transform Your Business into</span>
            <span className="font-source-sans-pro text-[17px] font-600  text-[#000659] text-right ">Digital Organisation</span>
            <div className="flex gap-8 py-2 px-2">
              <Image src={GooglePartner} alt={""} />
              <Image src={facebookReview} alt={""} />
              <Image src={GoogleReview} alt={""} className="rounded-[50%]" />
            </div>
          </div>
        </div>
        <div className="flex mt-[60px] py-2 items-center  gap-16">
          <Image src={logo} alt={""} />
          <div className="flex gap-3">
            <div className="flex gap-1">
              <span className="font-source-sans-pro text-[13px] text-[#151D8C] font-600">- English </span>
              <Image src={vector} alt={""} />
            </div>
            <div className="flex gap-1">
              <span className="font-source-sans-pro text-[13px] text-[#151D8C] font-600">INR ₹ </span>
              <Image src={vector} alt={""} />
            </div>
          </div>
        </div>
        <hr className="bg-white h-[2px]" />
        <div className="px-4 py-4 flex justify-between">
          <span className="font-source-sans-pro text-[13px] text-[#151D8C]">@2022 Nowdigitaleasy, Inc.All Rights Reserved.</span>
          <div className="flex gap-2 items-center">
            <span className="font-source-sans-pro text-[13px] text-[#151D8C]">Privacy Policy</span>
            <span className="font-source-sans-pro text-[13px] text-[#151D8C]">Terms and Conditions</span>
            <Image src={facebook} alt={""} />
            <Image src={insta} alt={""} />
            <Image src={linkedin} alt={""} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
