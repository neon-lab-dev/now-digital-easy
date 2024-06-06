import React from "react";
import like from "../../../../../src/assets/images/Like.png";
import Image from "next/image";

type TWhyChoose = {
  title: string;
  description: string;
};
const WhyChoose = () => {
  const whyChooseList: TWhyChoose[] = [
    {
      title: "A trusted source",
      description:
        "Since 2000, we've been focused on helping customers find the best domain name as the building block of their online presence.",
    },
    {
      title: "Everything is covered",
      description:
        "A domain name is just the beginning. We'll help you host, design, and manage your site. We'll even build it for you, if you'd like.",
    },
    {
      title: "Simple Intuitive",
      description:
        "We integrate seamlessly with WordPress, WebsiteBuilder, and SiteLock, to name a few. We’ll help you get online with ease.",
    },
  ];
  return (
    <div className="max-width mt-20">
      <h1 className="heading1 text-dark-500 font-source-sans-pro text-center">
        WHY CHOOSE Now Digital Easy
      </h1>
      <p className="font-merriweather text-base font-400 text-dark-500 leading-[27px] text-center mt-6">
        The total package for starting your website.
      </p>

      <div className="flex justify-center flex-wrap gap-10 mt-10">
        {whyChooseList.map((list, index) => (
          <div key={index} className="max-w-[330px] flex gap-5">
            <Image src={like} alt="like-icon" className="w-8 h-8" />
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-900 leading-[26px] text-dark-500 font-source-sans-pro tracking-1">
                {list.title}
              </h1>
              <p
                style={{ color: " rgba(0, 0, 0, 0.60)" }}
                className="font-merriweather text-[15px] font-400 text-dark-500 leading-6"
              >
                {list.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
