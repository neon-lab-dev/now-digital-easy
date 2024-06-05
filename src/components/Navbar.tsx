"use client";
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState, useEffect, useRef } from "react";
import ProductDropdown from "./ProductDropdown";
import { useRouter } from "next/navigation";
import x from "@/assets/icons/x.svg";
import { NAV_LINKS } from "@/assets/data/navlinks";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setActiveAuthTab,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";

type ActiveDropdown = "Products" | "Resources" | "More" | null;

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, user } = useAppSelector((state) => state.user);

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
        className="relative bg-gradient-light flex items-center justify-between h-[60px] xl:h-[55px] w-full"
      >
        {/* logo */}
        <div className="flex items-center justify-center h-full">
          <div className="bg-white bg-opacity-50 min-w-[20px] md:w-[40px] xl:w-[54px] h-full rounded-br-lg"></div>
          <Link href="/" className="px-3">
            <Image
              src={ICONS.logo}
              alt="logo"
              className="min-w-[80px] h-full"
            />
          </Link>
        </div>

        {/* main nav links for  large devices */}
        <div className="bg-white bg-opacity-50 flex-grow justify-center h-full rounded-b-lg flex items-center ">
          <div className="flex justify-center">
            <div className="flex items-center gap-[42px] max-lg:hidden  ">
              {NAV_LINKS.map((item, i) => (
                <button
                  key={i}
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
                  className="flex items-center gap-2 nav-link hover:text-primary-400 transition"
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
        </div>
        <div className="flex gap-4 h-full bg-white items-center bg-opacity-50 pr-4 lg:pr-14">
          {isLoggedIn ? (
            // show user name
            <div className="hidden sm:flex items-center gap-2 bg-gray-300 px-2 py-2 rounded-md">
              <span>
                {user?.first_name} {user?.last_name}
              </span>
            </div>
          ) : (
            <>
              <Button
                onClick={() => {
                  dispatch(setIsSidebarOpen(true));
                  dispatch(setActiveAuthTab("login"));
                }}
                variant="primary"
                className="hidden sm:flex h-[34px] items-center justify-center"
              >
                Log In
              </Button>

              <Button
                onClick={() => {
                  dispatch(setIsSidebarOpen(true));
                  dispatch(setActiveAuthTab("signup"));
                }}
                className="hidden sm:flex items-center justify-center h-[34px]"
                variant="secondary"
              >
                Sign Up
              </Button>
            </>
          )}

          <Sidebar />

          <button
            onClick={() => setIsMobileNavOpen(true)}
            className="text-button px-3 h-full lg:hidden min-w-[50px]"
          >
            <Image src={ICONS.menu} alt={""} height={26} width={26} />
          </button>
        </div>
        {/* mobile navbar toggler */}
      </nav>

      {/* overlay */}
      {isMobileNavOpen && (
        <div
          onClick={() => setIsMobileNavOpen(false)}
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 backdrop-blur-[1px]"
        />
      )}
      {/* side navbar for mobile devices */}
      <aside
        className={twMerge(
          "bg-white w-[250px] h-screen transition-transform flex flex-col  fixed top-0 right-0 z-50 lg:hidden pt-20 px-6 gap-3 overflow-x-hidden overflow-y-auto",
          isMobileNavOpen ? "translate-x-0" : "translate-x-full "
        )}
      >
        <button
          onClick={() => setIsMobileNavOpen(false)}
          className="absolute top-4 right-4"
        >
          <Image src={x} alt="close" height={24} width={24} />
        </button>
        {NAV_LINKS.map((item, i) => (
          <div key={i} className="flex flex-col gap-1 w-full">
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
              className="flex items-center justify-between gap-2 nav-link !font-500 hover:text-primary-400 transition duration-300 !text-xl w-full"
            >
              {item.name}
              {!item.href && (
                <Image
                  src={ICONS.downArrow}
                  alt="downArrow"
                  className={activeDropdown === item.name ? "rotate-180" : ""}
                  height={12}
                  width={12}
                />
              )}
            </button>
            <hr />
            {activeDropdown === item.name && (
              <div className="flex flex-col gap-2">
                {item.dropdowns &&
                  Object.keys(item.dropdowns).map((key, i) => (
                    <div key={i} className="flex flex-col gap-1 ml-2">
                      <span className="text-lg">
                        {key[0].toUpperCase() + key.slice(1).toLowerCase()}
                      </span>
                      <div className="flex flex-col items-start gap-2 ml-2">
                        {
                          //  @ts-ignore
                          item.dropdowns[key].map((item, i) => (
                            <Link
                              onClick={() => setIsMobileNavOpen(false)}
                              href={item.href}
                              key={i}
                              className="text-sm font-400 text-dark-400 flex gap-4"
                            >
                              <Image
                                alt=""
                                src={item.img}
                                height={20}
                                width={20}
                                className="bg-primary-300 p-1 rounded-md"
                              />
                              <span>{item.title}</span>
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
