"use client";
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';

interface FormData {
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
  termsChecked: boolean;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
    termsChecked: false,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // This will contain your form data
    // Add your form submission logic here

    // Clear the form after submission
    reset({
      companyName: '',
      email: '',
      phoneNumber: '',
      message: '',
      termsChecked: false,
    });
  };

  return (
    <>
      <div className="flex gap-10 mb-16">
        <div className='py-6 px-10 border-gray-300 border'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-[550px] h-[480px] overflow-y-auto px-8 rounded-xl'>
            <div className='mb-4'>
              <span className="text-[26px] font-source-sans-pro font-900 text-primary-500 ">Send us a message</span>
            </div>
            <div className="mb-4">
              <input type="text" id="companyName" {...register("companyName", { required: true })} value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} placeholder='Company Name' className="mt-1 p-2 rounded-md w-full" />
              {errors.companyName && <span className="text-red-500">Company name is required</span>}
            </div>
            <div className="mb-4">
              <input type="email" id="email" {...register("email", { required: true })} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Email Address' className="mt-1 p-2 rounded-md w-full" />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="mb-4">
              <input type="tel" id="phoneNumber" {...register("phoneNumber", { required: true })} value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} placeholder='Phone Number' className="mt-1 p-2 rounded-md w-full" />
              {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
            </div>
            <div className="mb-4">
              <textarea id="message" {...register("message", { required: true })} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder='Message' className="mt-1 p-2 border border-gray-300 rounded-md w-full h-32 resize-none" />
              {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="termsChecked" className="inline-flex items-center">
                <input type="checkbox" id="termsChecked" {...register("termsChecked", { required: true })} checked={formData.termsChecked} onChange={(e) => setFormData({ ...formData, termsChecked: e.target.checked })} className="form-checkbox h-3 w-5 text-primary-500" />
                <span className="ml-2 text-sm text-gray-700">I agree to the <a href="/terms" className="text-blue-600">terms and conditions</a> and <a href="/privacy-policy" className="text-blue-600">privacy policy</a>.</span>
              </label>
              {errors.termsChecked && <span className="text-red-500">You must agree to the terms and conditions</span>}
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
