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
import Link from "next/link";

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
              <span className="footer-heading">COMPANY</span>
              <ul className="flex flex-col gap-3 py-2 text-[13px] text-[#151D8C] footer-links ">
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
            <div className="flex gap-8 py-2 px-2 items-center">
              <Link href="https://cloud.google.com/find-a-partner/partner/now-digital-easy">
                <Image src={GooglePartner} alt={""} />
              </Link>
              <Link href="https://www.facebook.com/nowdigitaleasyofficial/reviews">
                <Image src={facebookReview} alt={""} />
              </Link>
              <Link href="https://www.google.com/search?q=now+digital+easy+&sca_esv=1408e98ab1991b60&ei=yZk8ZsXPHcGO4-EPssqWuAU&ved=0ahUKEwiF2OqMo4CGAxVBxzgGHTKlBVcQ4dUDCBA&uact=5&oq=now+digital+easy+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW5vdyBkaWdpdGFsIGVhc3kgMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigVI9wVQ9wNY9wNwAXgAkAEAmAHtAaAB7QGqAQMyLTG4AQPIAQD4AQGYAgGgAvgBmAMAiAYBkgcDMi0xoAfyAw&sclient=gws-wiz-serp">
                <Image src={GoogleReview} alt={""} className="rounded-[50%]" />
              </Link>
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
          <span className="text-[13px] text-[#151D8C]">@2022 Nowdigitaleasy, Inc.All Rights Reserved.</span>
          <div className="flex gap-2 items-center">
            <span className="font-source-sans-pro text-[13px] text-[#151D8C]">Privacy Policy</span>
            <span className="font-source-sans-pro text-[13px] text-[#151D8C]">Terms and Conditions</span>
            <Link href="https://www.facebook.com/nowdigitaleasyofficial/">
              <Image src={facebook} alt={""} />
            </Link>
            <Link href="https://www.instagram.com/nowdigitaleasy/">
              <Image src={insta} alt={""} />
            </Link>
            <Link href="https://in.linkedin.com/company/nowdigitaleasy">
              <Image src={linkedin} alt={""} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
