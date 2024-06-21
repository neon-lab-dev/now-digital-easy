"use client";
import React, { useState } from "react";
import { IDemoCredentials } from "@/services/demo";
import { SubmitHandler, useForm } from "react-hook-form";

const Form = () => {
  const isPending = false; // !Demo variable, this isPending will come from useMutation

  const labelStyle = "font-merriweather text-[15px]";
  const inputStyle =
    "border-[1px] p-2 mt-2 text-[15px] border-[rgba(0,0,0,0.6)] rounded-[12px] h-[50px] focus:border-[#0011FF] focus:outline-none focus:ring-2 focus:ring-[#0011FF] font-merriweather";
  const inputFieldStyle = "flex flex-col mb-[20px]";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDemoCredentials>();

  const countryCodes = [{ code: "IN", dialCode: "+91" }];

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const handleCountryChange = (e: { target: { value: string } }) => {
    const country = countryCodes.find(
      (country) => country.code === e?.target?.value
    );
    setSelectedCountry(country || countryCodes[0]);
  };

  const onSubmit: SubmitHandler<IDemoCredentials> = (data) => {
    console.log(data);
  };

  return (
    <div className="p-[30px] rounded-[23px] card-shadow bg-white">
      <h2 className="font-source-sans-pro font-700 text-[18px] leading-[24px] pb-[12px]">
        Ready to take support to the next level?
        <br />
        Fill in the form below and we will contact you to schedule a demo.
      </h2>

      {/* FORM */}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* FIRST NAME */}
          <div className={inputFieldStyle}>
            <label htmlFor="firstName" className={labelStyle}>
              First Name<span>*</span>
            </label>
            <input
              id="firstName"
              type="text"
              {...(register("first_name"), { required: true })}
              placeholder=""
              className={inputStyle}
            />
          </div>

          {/* WORK EMAIL */}
          <div className={inputFieldStyle}>
            <label htmlFor="workEmail" className={labelStyle}>
              Work Email<span>*</span>
            </label>
            <input
              id="workEmail"
              type="email"
              {...(register("work_email"), { required: true })}
              placeholder="Enter your business email"
              className={inputStyle}
            />
          </div>

          {/* COMPANY NAME */}
          <div className={inputFieldStyle}>
            <label htmlFor="companyName" className={labelStyle}>
              Company Name<span>*</span>
            </label>
            <input
              id="companyName"
              type="text"
              {...(register("company_name"), { required: true })}
              placeholder=""
              className={inputStyle}
            />
          </div>

          {/* PHONE NUMBER */}
          <div className={inputFieldStyle}>
            <label htmlFor="phoneNo" className={labelStyle}>
              Phone Number<span>*</span>
            </label>
            <div className="flex gap-[12px]">
              <div className="relative">
                <select
                  className={`${inputStyle} appearance-none bg-transparent w-[60px]`}
                  value={selectedCountry.code}
                  onChange={handleCountryChange}
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    appearance: "none",
                  }}>
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>

                <div className="absolute inset-y-[55%] left-[40%] right-0 flex items-center pointer-events-none justify-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              <div className="relative flex-grow">
                <div className="absolute left-2 top-[57%] transform -translate-y-[57%] text-[15px]">
                  {selectedCountry.dialCode}
                </div>
                <div>
                  <input
                    id="phoneNo"
                    type="number"
                    {...(register("phone_number"), { required: true })}
                    placeholder=""
                    className={`${inputStyle} font-merriweather col-span-3 w-full`}
                    style={{
                      paddingLeft: `${selectedCountry.dialCode.length + 1}ch`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* HEAR ABOUT US */}
          <div className={inputFieldStyle}>
            <label htmlFor="hearAboutUs" className={labelStyle}>
              Optional - How did you hear about us? 
            </label>
            <input
              id="hearAboutUs"
              type="text"
              {...register("hear_about_us")}
              placeholder=""
              className={inputStyle}
            />
          </div>

          {/* BUTTON CONTAINER */}
          <div className="flex justify-center mt-[10px]">
            <button
              disabled={isPending}
              type="submit"
              className="font-source-sans-pro text-[17px] font-700 text-white px-[32px] disabled:opacity-75  bg-[#0011FF]  h-[52px] rounded-[50px]">
              {isPending ? "Loading..." : "Request Demo"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
