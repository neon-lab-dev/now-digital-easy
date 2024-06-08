import { IMAGES } from "..";

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
      href: "/hosting",
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
      description: "Powerful Customer management tools" ,
      href: "#",
    },
    {
      img: IMAGES.OpenStack,
      title: "Chat Now",
      description: "Connect and Engage with real-time chat support",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "Spot Now",
      description: "Employee tracking tool for efficient workforce",
      href: "#",
    },
    {
      img: IMAGES.IoxHost,
      title: "Peoples Now",
      description: "Manage your employees details",
      href: "#",
    },
  ],
  grow: [
    {
      img: IMAGES.IoxHost,
      title: "Marketing Planner",
      description: "Connect & optimize your email communication.",
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
      title: "Mails Now",
      description: "Purchase & manage your own domain.",
      href: "#",
    },
  ],
};
export const NAV_LINKS = [
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
