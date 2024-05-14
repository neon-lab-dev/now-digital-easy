"use client";
import email from "@/assets/images/image 80.svg"
import meet from "@/assets/images/image 81.svg"
import calender from "@/assets/images/image 82.svg"
import chat from "@/assets/images/image 83.svg"
import docs from "@/assets/images/image 84.svg"
import sheet from "@/assets/images/image 85.svg"
import keep from "@/assets/images/image 86.svg"
import project from "@/assets/images/image 87.svg"
import form from "@/assets/images/image 88.svg"
import form1 from "@/assets/images/image 89.svg"
import form2 from "@/assets/images/image 90.svg"
import form3 from "@/assets/images/image 91.svg"
import form4 from "@/assets/images/image 92.svg"
import form5 from "@/assets/images/image 93.svg"
import form6 from "@/assets/images/image 94.svg"
import Image from "next/image"
import vector from "@/assets/images/Vector.svg";
import { SetStateAction, useState } from "react"


const Features = () => {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Monthly');
  const [isOpen, setIsOpen] = useState(false);


  const handleOptionSelect = (option: SetStateAction<string>) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleContinuetoCheckout = () => {
    setOpen(true)
  }
  const Checkout = () => {
    return (
      <div className="bg-gradient-checkout w-[1000px]  border border-[#000659] shadow-[#00065980] shadow-2xl rounded-xl fixed bottom-6 left-[300px] z-50">
        <div className="flex justify-between items-center px-6  py-6">
          <div className="flex flex-col gap-2">
            <span className="text-[17px] text-[#000659] leading-[15px]">Plan Name</span>
            <span className="font-400 text-[15px]">Business Starter</span>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="" className="text-[17px] text-[#000659]">No of Accounts</label>
            <input type="text" className="placeholder:text-center text-center text-[#646464] bg-transparent placeholder:text-[#646464] border border-[#646464] p-1 w-[100px] rounded-lg" value="5" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[17px] text-[#000659] leading-[15px]">Price</span>
            <span>Rs.82.80/acc/mo</span>
          </div>
          <div className="flex flex-col h-[100px] pt-5 gap-1">
            <span className="text-[17px] text-[#000659]">Duration</span>
            <div className="flex flex-col">
              <div onClick={toggleDropdown} className="flex justify-between  border-[#00000026] border  bg-transparent  rounded-lg  w-[130px] h-[28px] p-1 ">
                <span className="font-source-sans-pro text-[12px] font-700 text-[#646464]">{selectedOption}</span>
                <Image src={vector} alt="" />
              </div>
              {isOpen && (
                <div className="flex flex-col justify-center border border-black px-1 bg-transparent cursor-pointer">
                  <span onClick={() => handleOptionSelect('Monthly')} className="text-[12px]">Monthly</span>
                  <hr />
                  <span onClick={() => handleOptionSelect('Annually')} className="text-[12px]">Annually</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col ">
            <span className="text-[17px] text-[#000659] leading-[15px]">Total</span>
            <span className="text-[24px]">Rs.999.00</span>
          </div>
          <button className="px-8 py-4 rounded-xl bg-[#0009FF] text-white">Buy Now</button>
        </div>
      </div>
    );
  };


  const servicesData = [
    {
      title: 'Get secure and personalised email account for your business',
      image: email,
      stater: "✔",
      standand: "✔",
      plus: "✔"
    },
    {
      title: 'Setup HD video with 100 participants to ensure uninterrupted productivity.',
      image: meet,
      stater: "",
      standand: "",
      plus: ""
    },
    {
      title: 'Keep track of important events and share your schedule.',
      image: calender,
      stater: "✔",
      standand: "✔",
      plus: "✔"
    },
    {
      title: 'Secure communications tool, built for teams that makes team communication easy and efficient.',
      image: chat,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Generate and work on documents with images, tables, drawings, charts and more',
      image: docs,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Get valuable insights via spreadsheet data using formulas, charts, connectors and macros',
      image: sheet,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Make stunning presentations using templates, embed videos and images',
      image: keep,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Do engaging, high-quality sites for your project.',
      image: project,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Create custom forms for surveys and questionnaires.',
      image: form,
      stater: "❌",
      standand: "❌",
      plus: "❌"

    },
    {
      title: 'Manage your to-do’s, take notes on the go and never lose track of ideas.',
      image: form1,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Experience interesting conversations, discuss ideas, gather input and keep everyone in your organization engaged.',
      image: form2,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Basic security and admin controls.',
      image: form3,
      stater: "✔",
      standand: "✔",
      plus: "✔"

    },
    {
      title: 'Standard Endpoint device management for account security',
      image: form6,
      stater: "✔",
      standand: "✔",
      plus: "✔"
    },
    {
      title: 'Smart Search within and outside Google Workspace with Cloud Search.',
      image: form5,
      stater: "✔",
      standand: "✔",
      plus: "✔"
    },
    {
      title: 'Vault for eDiscovery for emails, chats, and files and archiving.',
      image: form4,
      stater: "❌",
      standand: "❌",
      plus: "✔"
    },
    // Add more service data as needed
  ];
  return (
    <div>
      <div className="flex justify-center pt-[120px]">
        <span className="text-[61px] text-[#000659]">Find the right plan for your business.</span>
      </div>
      <div className="flex justify-center pt-[10px]">
        <span className="text-[20px]">Choose the Google Workspace edition that best fits your business.</span>
      </div>
      <div className="flex justify-center py-[120px] ">
        <table className="table-auto rounded-xl w-[1252px]">
          <thead>
            <tr className="h-[200px]  border border-[#0437CD] border-b-[#AAD0FF]">
              <th className="w-[91px] bg-[#F2F3FF] "></th>
              <th className="w-[440px]">Google Workspace Features</th>
              <th className="bg-[#F2F3FF]" >
                <div className="flex flex-col p-2 gap-3">
                  <span>Business Starter</span>
                  <span className="text-[28px] text-[#0437CD]">₹125/mo</span>
                  <div className="flex justify-center">
                    <button className="bg-[#000AFF] text-white hover:bg-black p-3 w-[180px] rounded-lg" onClick={handleContinuetoCheckout}>Add to Cart</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="flex flex-col p-2 gap-3">
                  <span>Business Standard</span>
                  <span className="text-[28px] text-[#0437CD]">₹672/mo</span>
                  <div className="flex justify-center">
                    <button className="bg-[#000AFF] text-white hover:bg-black p-3 w-[180px] rounded-lg">Add to Cart</button>
                  </div>
                </div>
              </th>
              <th className="bg-[#F2F3FF]">
                <div className="flex flex-col p-2 gap-3 ">
                  <span>Business Plus</span>
                  <span className="text-[28px] text-[#0437CD]">₹1,299/mo</span>
                  <div className="flex justify-center">
                    <button className="bg-[#000AFF] text-white hover:bg-black p-3 w-[180px] rounded-lg">Add to Cart</button>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesData.map((service, index) => (
              <tr key={index} className="h-[80px]  border border-[#0437CD] border-t-[#AAD0FF] border-b-[#AAD0FF]">
                <th className="w-[91px] bg-[#F2F3FF]">
                  <div className="flex justify-center">
                    <Image src={service.image} alt="email" />
                  </div>
                </th>
                <th className="w-[440px] px-4 text-start">{service.title}</th>
                <th className="bg-[#F2F3FF]" ><span className=" text-green-600 text-[26px] font-source-sans-pro ">{service.stater}</span></th>
                <th>
                  {service.standand === "❌" ? (
                    <span className="text-green-600 text-[26px]">❌</span>
                  ) : (
                    <span className="text-green-600 text-[30px]">✔</span>
                  )}
                </th>
                <th className="bg-[#F2F3FF]"><span className=" text-green-600 text-[26px]">{service.plus}</span></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <><Checkout /></>
      )}
    </div>
  )
}

export default Features