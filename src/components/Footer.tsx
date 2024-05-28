"use client";

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
import india from "@/assets/icons/India.svg";
import Link from "next/link";
import { useState } from "react";
import plus from "@/assets/icons/plus-large-svgrepo-com.svg";
import minus from "@/assets/icons/minus-svgrepo-com.svg";

const FOOTER_LINKS = [
  {
    title: "COMPANY",
    links: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Payment Method",
        href: "#",
      },
      {
        label: "Refund Policy",
        href: "#",
      },
      {
        label: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "SERVICES",
    links: [
      {
        label: "Register Domains",
        href: "#",
      },
      {
        label: "Transfer Domains",
        href: "#",
      },
      {
        label: "Manage Domains",
        href: "#",
      },
      {
        label: "Web Hosting",
        href: "#",
      },
      {
        label: "Google Workspace",
        href: "#",
      },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      {
        label: "NDE Mail",
        href: "#",
      },
      {
        label: "Vision Now",
        href: "#",
      },
      {
        label: "Peoples Now",
        href: "#",
      },
      {
        label: "Spot Now",
        href: "#",
      },
      {
        label: "Marketing Studio",
        href: "#",
      },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      {
        label: "Open Tickets",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Live Chat",
        href: "#",
      },
      {
        label: "Change Management",
        href: "#",
      },
      {
        label: "Support",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  return (
    <footer className="relative mt-[180px]">
      <Image
        className="absolute inset-0 w-full"
        style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        src={footer}
        alt={"footer"}
      />
      <div className="relative z-10 px-[130px] max-md:px-[80px] max-lg:px-[100px] mt-[150px] max-lg:mt-[100px] bg-gradient-footer max-md:mt-10">
        <div className="flex max-lg:flex-col justify-between max-lg:gap-10">
          <div className="flex flex-col md:flex-row mt-12 md:mt-0 gap-[100px] max-lg:gap-10 max-md:gap-[40px]">
            {FOOTER_LINKS.map((footerLink, i) => (
              <div>
                <div className="flex justify-between items-center gap-12">
                  <span className="footer-heading">{footerLink.title}</span>
                  <button
                    onClick={() =>
                      setActiveLink(() => (i === activeLink ? null : i))
                    }
                    className="focus:outline-none"
                  >
                    <Image
                      src={activeLink === i ? minus : plus}
                      alt={""}
                      height={20}
                      width={20}
                      className="min-w-[20px] min-h-[20px] md:hidden"
                    />
                  </button>
                </div>
                <ul className="flex md:hidden flex-col gap-3 py-2 text-[13px] text-[#151D8C] footer-links ">
                  {activeLink === i &&
                    footerLink.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                </ul>
                <ul className="md:flex hidden flex-col gap-3 py-2 text-[13px] text-[#151D8C] footer-links ">
                  {footerLink.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-source-sans-pro text-[17px] font-600  text-[#000659] text-right max-lg:text-left ">
              Transform Your Business into
            </span>
            <span className="font-source-sans-pro text-[17px] font-600  text-[#000659] text-right max-lg:text-left ">
              Digital Organisation
            </span>
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
        <div className="flex mt-[60px] py-2 items-center gap-16 max-md:gap-6">
          <Image src={logo} alt={""} className="w-[80px]" />
          <div className="flex gap-3 items-center">
            <Image src={india} alt={""} />
            <div className="flex gap-1">
              <span className="font-source-sans-pro text-[13px] text-[#151D8C] font-600">
                - English{" "}
              </span>
              <Image src={vector} alt={""} />
            </div>
            <div className="flex gap-1">
              <span className="font-source-sans-pro text-[13px] text-[#151D8C] font-600">
                INR ₹{" "}
              </span>
              <Image src={vector} alt={""} className="" />
            </div>
          </div>
        </div>
        <hr className="bg-white h-[2px]" />
        <div className="px-4 py-4 flex max-md:flex-col max-md:gap-6 justify-between">
          <span className="text-[13px] max-md:text-[10px] text-[#151D8C]">
            @2022 Nowdigitaleasy, Inc.All Rights Reserved.
          </span>
          <div className="flex gap-2 items-center">
            <span className="font-source-sans-pro text-[13px] max-md:text-[9px] text-[#151D8C]">
              Privacy Policy
            </span>
            <span className="font-source-sans-pro text-[13px] max-md:text-[9px] text-[#151D8C]">
              Terms and Conditions
            </span>
            <Link href="https://www.facebook.com/nowdigitaleasyofficial/">
              <Image src={facebook} alt={""} className="w-[15px]" />
            </Link>
            <Link href="https://www.instagram.com/nowdigitaleasy/">
              <Image src={insta} alt={""} className="w-[15px]" />
            </Link>
            <Link href="https://in.linkedin.com/company/nowdigitaleasy">
              <Image src={linkedin} alt={""} className="w-[15px]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
