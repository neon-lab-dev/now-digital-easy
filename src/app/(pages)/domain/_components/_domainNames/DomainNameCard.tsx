import React from "react";

type TDomainNameCardProps = {
  data: {
    domainName: string;
    details: string;
    price: string;
  };
};

const DomainNameCard: React.FC<TDomainNameCardProps> = ({ data }) => {
  const { domainName, details, price } = data;
  return (
    <div className="bg-gradient-to-r from-[#7F88FE] to-[#FB7ED9] rounded-lg p-[1px]">
      <div className="max-w-[350px]  bg-white rounded-lg p-4">
        <h1 className="text-[34px] font-700 text-dark-500 font-source-sans-pro leading-[37px]">
          {domainName}
        </h1>
        <p className="font-merriweather text-[15px] font-400 text-dark-500 leading-6 mt-4">
          {details} 
        </p>
        <h1 className="text-2xl font-900 leading-[26px] text-primary-500 font-source-sans-pro tracking-1 mt-3">
          {price}
        </h1>

        <button
          style={{ border: "1px solid rgba(0, 0, 0, 0.50)" }}
          className="w-full h-[56px] rounded text-primary-500 text-[15px] font-700 tracking-tighterg uppercase hover:bg-primary-400 transition duration-200 hover:text-white mt-5"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default DomainNameCard;
