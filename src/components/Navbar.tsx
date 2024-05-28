"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import ProductDropdown from "./ProductDropdown";
import { useRouter } from "next/navigation";
import x from "@/assets/icons/x.svg";

type ActiveDropdown = "Products" | "Resources" | "More" | null;
export const PRODUCT_DROPDOWN_DATA = {
  build: [
    {
      img: IMAGES.IoxHost,
      title: "Domain",
      description: "Purchase & manage your own domain.",
      href: "#",
    },
    {
      img: IMAGES.OpenStack,
      title: "Hosting",
      description: "Obtain & oversee your hosting solution",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "Google Workspace",
      description: "Acquire & efficiently manage your workspace.",
      href: "/googleworkspace",
    },
    {
      img: IMAGES.IoxHost,
      title: "NDE Mail",
      description: "Connect & optimize your email communication.",
      href: "/ndeemail",
    },
  ],
  manage: [
    {
      img: IMAGES.IoxHost,
      title: "Vision Now",
      description: "Purchase & manage your own domain.",
      href: "#",
    },
    {
      img: IMAGES.OpenStack,
      title: "Hosting",
      description: "Obtain & oversee your hosting solution",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "Google Workspace",
      description: "Acquire & efficiently manage your workspace.",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "NDE Mail",
      description: "Connect & optimize your email communication.",
      href: "#",
    },
  ],
  grow: [
    {
      img: IMAGES.IoxHost,
      title: "Mails Now",
      description: "Purchase & manage your own domain.",
      href: "#",
    },
    {
      img: IMAGES.OpenStack,
      title: "Google Ads",
      description: "Acquire & efficiently manage your workspace.",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "Social Media Ads",
      description: "Obtain & oversee your hosting solution",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "Marketing Planner",
      description: "Connect & optimize your email communication.",
      href: "#",
    },
  ],
};
const NAV_LINKS = [
  {
    name: "Products",
    dropdowns: PRODUCT_DROPDOWN_DATA,
  },
  {
    name: "Resources",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Demo",
    href: "#",
  },
  {
    name: "More",
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileSidebarRef = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (window.innerWidth < 1024) return;
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        ref={dropdownRef}
        className="relative productsDropdown bg-gradient-light flex gap-[13px] font-merriweather"
      >
        <div className="bg-white bg-opacity-50 w-[80px] h-[55px] rounded-b-lg"></div>
        <Link href="/">
          <Image src={ICONS.logo} alt="logo" className="w-[150px] h-[50px]" />
        </Link>
        <div className="bg-white bg-opacity-50 w-full h-[55px] rounded-b-lg flex items-center justify-between">
          <div className="w-[90%] flex justify-center ">
            <div className="flex items-center gap-[42px] max-lg:hidden  ">
              {NAV_LINKS.map((item, i) => (
                <button
                  onClick={
                    item.href
                      ? () => router.push(item.href)
                      : () =>
                          setActiveDropdown((prev) =>
                            prev === item.name
                              ? null
                              : (item.name as ActiveDropdown)
                          )
                  }
                  className="flex items-center gap-2 nav-link hover:text-primary-400 transition duration-300"
                >
                  {item.name}
                  {item.href ? null : activeDropdown === item.name ? (
                    <Image
                      src={ICONS.downArrow}
                      alt="downArrow"
                      className="rotate-180"
                    />
                  ) : (
                    <Image src={ICONS.downArrow} alt="downArrow" className="" />
                  )}
                </button>
              ))}

              {activeDropdown === "Products" && (
                <div className="absolute top-14 z-50 left-0 box-border">
                  <ProductDropdown
                    closeDropdown={() => setActiveDropdown(null)}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-[16px] pr-16 min-w-[260px] max-lg:pr-0">
            <div className="flex  items-center gap-[14px] min-w-[158px] max-md:hidden ">
              <button className="text-button rounded border border-primary-400 px-2 py-[10px] shadow">
                Log In
              </button>

              <button className="text-button rounded border border-primary-400 bg-primary-400 text-white px-2 max-lg:px-1 py-[10px] shadow">
                Sign Up
              </button>
            </div>
            <Sidebar />
            <button
              onClick={() => {
                mobileSidebarRef.current?.classList.remove("translate-x-full");
                mobileSidebarRef.current?.classList.add("translate-x-0");
              }}
              className="text-button  shadow px-3 max-lg:px-0 lg:hidden max-md:ml-[200px] "
            >
              <Image src={ICONS.menu} alt={""} />
            </button>
          </div>
        </div>
      </nav>
      {/* side navbar for mobile devices */}
      <aside
        ref={mobileSidebarRef}
        className="bg-white w-[250px] h-screen transition-transform flex flex-col translate-x-full  fixed top-0 right-0 z-50 lg:hidden pt-20 px-9 gap-3 overflow-x-hidden overflow-y-auto"
      >
        <button
          onClick={() => {
            mobileSidebarRef.current?.classList.add("translate-x-full");
            mobileSidebarRef.current?.classList.remove("translate-x-0");
          }}
          className="absolute top-4 right-4 h-6 w-6"
        >
          <Image src={x} alt="close" />
        </button>
        {NAV_LINKS.map((item, i) => (
          <div className="flex flex-col gap-1">
            <button
              onClick={
                item.href
                  ? () => router.push(item.href)
                  : () =>
                      setActiveDropdown((prev) =>
                        prev === item.name
                          ? null
                          : (item.name as ActiveDropdown)
                      )
              }
              key={i}
              className="flex items-center gap-2 nav-link hover:text-primary-400 transition duration-300 !text-xl"
            >
              {item.name}
              {item.href ? null : activeDropdown === item.name ? (
                <Image
                  src={ICONS.downArrow}
                  alt="downArrow"
                  className="rotate-180"
                />
              ) : (
                <Image src={ICONS.downArrow} alt="downArrow" className="" />
              )}
            </button>
            {activeDropdown === item.name && (
              <div className="flex flex-col gap-2">
                {item.dropdowns &&
                  Object.keys(item.dropdowns).map((key) => (
                    <div className="flex flex-col gap-1 ml-2">
                      <span className="">
                        {key[0].toUpperCase() + key.slice(1).toLowerCase()}
                      </span>
                      <div className="flex flex-col items-start gap-2">
                        {
                          //  @ts-ignore
                          item.dropdowns[key].map((item, i) => (
                            <Link
                              onClick={() => {
                                mobileSidebarRef.current?.classList.add(
                                  "translate-x-full"
                                );
                                mobileSidebarRef.current?.classList.remove(
                                  "translate-x-0"
                                );
                              }}
                              href={item.href}
                              key={i}
                              className="text-sm font-400 text-dark-400"
                            >
                              {item.title}
                            </Link>
                          ))
                        }
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </aside>
    </>
  );
};
export default Navbar;
