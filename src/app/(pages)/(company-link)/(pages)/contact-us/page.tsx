"use client";
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
    termsChecked: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Clear the form after submission
    setFormData({
      companyName: '',
      email: '',
      phoneNumber: '',
      message: '',
      termsChecked: false,
    });
  };

  return (
    <>
      <div className="flex gap-10 mb-16  ">
        <div className='py-6 px-10 border-gray-300 border '>
          <form onSubmit={handleSubmit} className=' w-[550px] h-[480px] overflow-y-auto  px-8  rounded-xl'>
            <div className='mb-4'>
            <span className="text-[26px] font-source-sans-pro  font-900 text-primary-500 ">Send us a message</span>
            </div>
            <div className="mb-4">
              <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder='Company Name' className="mt-1 p-2  rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email Address' className="mt-1 p-2   rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder='Phone Number' className="mt-1 p-2   rounded-md w-full" required />
            </div>
            <div className="mb-4">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder='Message' className="mt-1 p-2 border border-gray-300  rounded-md w-full h-32 resize-none" required />
            </div>
            <div className="mb-4">
              <label htmlFor="termsChecked" className="inline-flex items-center">
                <input type="checkbox" id="termsChecked" name="termsChecked" checked={formData.termsChecked} onChange={handleChange} className="form-checkbox h-3 w-5 text-primary-500" />
                <span className="ml-2 text-sm text-gray-700">I agree to the <a href="/terms" className=" text-blue-600">terms and conditions</a> and <a href="/privacy-policy" className="text-blue-600">privacy policy</a>.</span>
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="termsChecked" className="inline-flex items-center">
                <input type="checkbox" id="termsChecked" name="termsChecked" checked={formData.termsChecked} onChange={handleChange} className="form-checkbox h-3 w-5 text-primary-500" />
                <span className="ml-2 text-sm text-gray-700">I consent to receiving additional information from Resellerclub from time to time </span>
              </label>
            </div>
            <button type="submit" disabled={!formData.termsChecked} className={`bg-primary-300 text-white px-20 py-2 rounded-md hover:bg-primary-600 ${!formData.termsChecked && 'opacity-50 cursor-not-allowed'}`}>Submit</button>
          </form>
        </div>
        <div>
          <div className="flex w-[300px] flex-col gap-2 mb-10 mt-2 ">
            <span className="text-[20px] text-primary-500 font-900 font-source-sans-pro">Now Digital Easy</span>
            <span className="font-merriweather w-full text-[15px]">Now Digital Easy, 76D/1 R.R Complex, New, Salem Bypass Rd, Karur, Tamil Nadu 639002</span>
          </div>
          <div className="flex flex-col gap-2 mb-10 w-[300px]">
            <span className="text-[20px] text-primary-500 font-900 font-source-sans-pro" >Now Digital Easy</span>
            <span className="font-merriweather w-full text-[15px]"> 5335 Gate Pkwy,
              Jacksonville, FL 32256,
              United States</span>
          </div>
        </div>
      </div>
      <div className='flex mb-10 py-10'>
        <div className='flex flex-col gap-3 w-[330px] pr-4  border-r-2 '>
          <span className=' font-source-sans-pro font-900 text-primary-500 text-[28px]'>Sales</span>
          <Image src={''} alt={''} />
          <p className=' font-merriweather text-[15px]'>For sales-related questions, please send us an email at  <a href="/terms" className=" text-blue-600 underline text-[12px]"> digital@nowdigitaleasy.com</a></p>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-primary-500 text-[20px]'>USA</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-primary-500 text-[20px]'>India</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[350px] px-3 border-r-2'>
          <span className=' font-source-sans-pro font-900 text-primary-500 text-[28px]'>Press</span>
          <p className=' font-merriweather text-[12px] '>If you have any queries about our Press Releases, need to discuss any Interviews or require company information for any media publication you can get in touch with our Media Contact  <a href="/terms" className=" text-blue-600 underline text-[12px]"> digital@nowdigitaleasy.com</a></p>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-primary-500 text-[20px]'>USA</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
          <div className='mt-4 flex flex-col gap-1'>
            <span className=' font-source-sans-pro font-900 text-primary-500 text-[15px]'>India</span>
            <span>Tel: <span className='text-blue-600 underline text-[12px]'>098941 11975</span></span>
            <span>Mail: <span className='text-blue-600 underline text-[12px]'>digital@nowdigitaleasy.com</span></span>
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[350px] px-3 '>
          <span className=' font-source-sans-pro font-900 text-primary-500 text-[28px]'>Report Abuse</span>
          <p className=' font-merriweather text-[12px]'>We hate spam too! In order to report any abuse activity (spam, phishing, adware etc) with respect to any domain name registered through any of our Resellers simply fill out a small form on our  <a href="/terms" className=" text-blue-600 underline text-[12px]">Report Abuse Page.</a></p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
