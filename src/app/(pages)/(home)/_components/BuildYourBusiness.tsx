'use client'
import { useEffect, useState, useRef } from "react";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

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
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain...",
    },
    {
      title: "Vision Now",
      subTitle: "Save Time Get More Done",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain...",
    },
    {
      title: "Google Ads",
      subTitle: "Unify. Connect. Thrive",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain...",
    },
    {
      title: "Mails Now",
      subTitle: "Simple Emails Better Conversions",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain...",
    },
    {
      title: "Vision Now",
      subTitle: "Save Time Get More Done",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain...",
    },
    {
      title: "Google Ads",
      subTitle: "Unify. Connect. Thrive",
      details:
        "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain...",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // Adjust this value according to your preference
    const difference = touchStartX.current - touchEndX.current;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        nextSlider(); // Swipe left, move to next slide
      } else {
        prevSlider(); // Swipe right, move to previous slide
      }
    }
  };

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
    <div
      className="px-[91px] max-lg:px-3 flex flex-col gap-[50px] mt-[42px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="heading2 capitalize text-center w-[800px] max-lg:w-[700px] max-md:w-[350px] max-lg:text-[48px] max-md:text-[30px] ml-[250px] max-md:ml-0 max-lg:ml-0 max-md:leading-[30px]">
        <div className=" w-[237px] max-md:w-[110px]  text-primary-400 inline-flex justify-end ">
          <div className="text-end max-md:text-[30px] border-b-4 border-dashed border-primary-400 w-fit ">
            {titles[currentTitleIndex]}
          </div>
        </div>{" "}
        your business in one single platform
      </h1>

      <div className="flex  justify-center">
        <div
          className="overflow-hidden"
          style={{ width: `${(350 + 32) * 3}px` }}
        >
          <div
            className="flex justify-between items-center "
            style={{
              width: `${(350 + 32) * businessCardDetails.length}px`,
            }}
          >
            <div
              className="ease-linear max-md:flex-col  duration-300 flex gap-8 max-lg:gap-6 max-md:gap-8"
              style={{
                transform: `translateX(-${currentSlider * (350 + 32)}px)`,
              }}
            >
              {businessCardDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-gradient-card w-[350px] max-md:w-[330px] max-md:ml-8 max-md:h-[420px] h-[420px] max-lg:h-[350px] max-lg:w-[226px] rounded-2xl"
                >
                  <div className="relative">
                    <Image
                      src={IMAGES.cardBg}
                      alt="cardBg"
                      className="w-full h-[153px] max-lg:h-[140px] max-md:h-[153px]"
                    />
                    <div className="bg-primary-400 w-full h-[60px] max-md:h-[60px] max-lg:h-[40px] flex items-center absolute top-[55px]">
                      <div className="flex items-center px-4 gap-2">
                        <h1 className="font-source-sans-pro font-900 text-[30px] text-white max-lg:text-[14px] max-md:text-[30px]">
                          {detail?.title}
                        </h1>
                        <div className="bg-primary-400 w-[120px] max-md:w-[120px] max-md:h-[120px] max-lg:w-[100px] h-[120px] max-lg:h-[100px] rounded-full flex justify-center items-center">
                          <div className="bg-white w-[90px] h-[90px]  rounded-full flex justify-center items-center">
                            <Image
                              src={IMAGES.communication}
                              alt="cardBg"
                              className="w-[52px] max-lg:w-[30px] max-md:w-[52px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-[30px]">
                    <h1 className="subheading3 mt-[12px] max-w-[190px] max-md:text-[24px] max-lg:text-[22px] max-lg:leading-[22px]">
                      {detail?.subTitle}
                    </h1>
                    <p className="card-text-body mt-[14px] max-md:text-[18px] max-md:leading-[20px] max-lg:text-[12px] max-lg:leading-[13px] ">
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

      <div className="flex items-center gap-[13px] justify-center max-md:hidden">
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
