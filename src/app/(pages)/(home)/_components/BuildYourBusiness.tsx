"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

interface businessDetains {
  title: string;
  subTitle: string;
  details: string;
}

const BuildYourBusiness = () => {
  const titles = ["Build", "Manage", "Grow"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const businessCardDetails: businessDetains[] = [
    {
      title: "Mails Now",
      subTitle: "Simple Emails Better Conversions",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.",
    },
    {
      title: "Vision Now",
      subTitle: "Save Time Get More Done",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.",
    },
    {
      title: "Google Ads",
      subTitle: "Unify. Connect. Thrive",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.",
    },
    {
      title: "Mails Now",
      subTitle: "Simple Emails Better Conversions",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.",
    },
    {
      title: "Vision Now",
      subTitle: "Save Time Get More Done",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.",
    },
    {
      title: "Google Ads",
      subTitle: "Unify. Connect. Thrive",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics.",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState<number>(0);

  const prevSlider = (): void => {
    const cardsPerPage = 3; // Number of cards per page

    setCurrentSlider((currentSlider) =>
      currentSlider - cardsPerPage < 0
        ? Math.floor((businessCardDetails.length - 1) / cardsPerPage) *
          cardsPerPage
        : currentSlider - cardsPerPage
    );
  };

  const nextSlider = (): void => {
    const cardsPerPage = 3; // Number of cards per page
    const totalCards = businessCardDetails.length;

    setCurrentSlider((currentSlider) =>
      currentSlider + cardsPerPage >= totalCards
        ? 0
        : currentSlider + cardsPerPage
    );
  };

  return (
    <div className="px-[91px] flex flex-col gap-[50px] mt-[42px]">
      <h1 className="heading2 capitalize text-center w-full">
        <div className="border-b-4 border-dashed border-primary-400 text-primary-400 inline-block">
          {titles[currentTitleIndex]}
        </div>{" "}
        your business in one single platform
      </h1>

      <div className="flex justify-center">
        <div
          className="overflow-hidden"
          style={{ width: `${(350 + 32) * 3}px` }}
        >
          <div
            className="flex justify-between items-center"
            style={{ width: `${(350 + 32) * businessCardDetails.length}px` }}
          >
            <div
              className="ease-linear duration-300 flex gap-8"
              style={{
                transform: `translateX(-${currentSlider * (350 + 32)}px)`,
              }}
            >
              {businessCardDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-gradient-card w-[350px] h-[420px] rounded-2xl"
                >
                  <div className="relative">
                    <Image
                      src={IMAGES.cardBg}
                      alt="cardBg"
                      className="w-full h-[153px]"
                    />
                    <div className="bg-primary-400 w-full h-[60px] flex items-center absolute top-[55px]">
                      <div className="flex items-center px-4 gap-2">
                        <h1 className="font-source-sans-pro font-900 text-[30px] text-white">
                          {detail?.title}
                        </h1>
                        <div className="bg-primary-400 w-[120px] h-[120px] rounded-full flex justify-center items-center">
                          <div className="bg-white w-[90px] h-[90px] rounded-full flex justify-center items-center">
                            <Image
                              src={IMAGES.communication}
                              alt="cardBg"
                              className="w-[52px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-[30px]">
                    <h1 className="subheading3 mt-[12px]">
                      {detail?.subTitle}
                    </h1>
                    <p className="card-text-body mt-[14px]">
                      {detail?.details}
                    </p>
                    <button className="card-text-cta text-primary-400 mt-5 underline transition duration-300 transform hover:-translate-y-0.5">
                      Know More{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[13px] justify-center">
        <Image
          onClick={prevSlider}
          src={ICONS.arrowLeft}
          alt="cardBg"
          className="w-[6px] h-[12px] cursor-pointer"
        />

        {/* Navigation pointers */}
        <div className="flex items-center gap-2">
          {[...Array(Math.ceil(businessCardDetails.length / 3)).keys()].map(
            (index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentSlider === index * 3
                    ? "bg-primary-100"
                    : "bg-dark-400 opacity-40"
                }`}
                onClick={() => setCurrentSlider(index * 3)}
                style={{ cursor: "pointer" }}
              ></div>
            )
          )}
        </div>

        <Image
          onClick={nextSlider}
          src={ICONS.arrowRight}
          alt="cardBg"
          className="w-[6px] h-[12px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BuildYourBusiness;
