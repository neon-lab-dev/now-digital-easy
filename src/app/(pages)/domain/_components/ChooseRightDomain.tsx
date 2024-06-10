import React from "react";

const ChooseRightDomain = () => {
  const details1 = [
    {
      title: "Use relevant keywords",
      description:
        "Include your brand name, location, and other identifying elements to find a unique domain name. Strong domain names with popular keywords are memorable and can drive more traffic.",
    },
    {
      title: "Explore alternatives",
      description:
        "nde.com has hundreds of domain extensions to choose from! Check out all the available options in domain search.",
    },
    {
      title: "Keep it short",
      description:
        "The shorter the domain name, the easier it is for your audience to remember. ",
    },
  ];

  const details2 = [
    {
      title: "Protect your brand",
      description:
        "Register multiple domain names, including common misspellings and alternative domain extensions so others can’t capitalize on your brand name.",
    },
    {
      title: "Add Domain Privacy",
      description:
        "Domain Privacy masks your personal information on the WHOIS database so you're protected online. Domain Privacy prevents spam mail, unwanted phone calls, and solicitations.",
    },
    {
      title: "Add Domain Privacy",
      description:
        "Domain Privacy masks your personal information on the WHOIS database so you're protected online. Domain Privacy prevents spam mail, unwanted phone calls, and solicitations.",
    },
  ];
  return (
    <div className="bg-gradient-right-domain">
      <div className="wrapper max-width py-10  mt-[56px]">
        <h1 className="heading1 text-dark-500 font-source-sans-pro text-center tracking-2">
          How do you choose the right domain name?
        </h1>

        <div className="flex justify-start lg:justify-end mt-[250px] md:mt-[271px] lg:mt-[60px]">
          <div className="flex flex-col gap-[30px] justify-end">
            {details1.map((detail, index) => (
              <div key={index} className=" max-w-[490px] flex flex-col gap-4">
                <h1 className="text-2xl font-900 leading-[26px] text-dark-500 font-source-sans-pro tracking-1">
                  {detail.title}
                </h1>
                <p className="font-merriweather text-[15px] font-400 text-dark-500 leading-6">
                  {detail.description} 
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[30px] mt-[306px] md:mt-[319px] lg:mt-10">
          {details2.map((detail, index) => (
            <div key={index} className=" max-w-[490px] flex flex-col gap-4">
              <h1 className="text-2xl font-900 leading-[26px] text-dark-500 font-source-sans-pro tracking-1">
                {detail.title}
              </h1>
              <p className="font-merriweather text-[15px] font-400 text-dark-500 leading-6">
                {detail.description} 
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseRightDomain;
