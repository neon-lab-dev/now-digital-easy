import email from "@/assets/images/image 80.svg"
import meet from "@/assets/images/image 81.svg"
import calender from "@/assets/images/image 82.svg"
import chat from "@/assets/images/image 84.svg"
import docs from "@/assets/images/image 85.svg"
import sheet from "@/assets/images/image 86.svg"
import keep from "@/assets/images/image 87.svg"
import project from "@/assets/images/image 88.svg"
import form from "@/assets/images/image 90.svg"
import form1 from "@/assets/images/image 91.svg"
import form2 from "@/assets/images/image 92.svg"
import form3 from "@/assets/images/image 93.svg"
import form4 from "@/assets/images/image 94.svg"
import Image from "next/image"



const Features = () => {

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
      plus: "❌"

    },
    {
      title: 'Generate and work on documents with images, tables, drawings, charts and more',
      image: docs,

    },
    {
      title: 'Do engaging, high-quality sites for your project.',
      image: sheet,

    },
    {
      title: 'Create custom forms for surveys and questionnaires.',
      image: keep,

    },
    {
      title: 'Manage your to-do’s, take notes on the go and never lose track of ideas.',
      image: project,

    },
    {
      title: 'Experience interesting conversations, discuss ideas, gather input and keep everyone in your organization engaged.',
      image: form,

    },
    {
      title: 'Basic security and admin controls.',
      image: form1,

    },
    {
      title: 'Standard Endpoint device management for account security',
      image: form2,

    },
    {
      title: 'Smart Search within and outside Google Workspace with Cloud Search.',
      image: form3,

    },
    {
      title: 'Vault for eDiscovery for emails, chats, and files and archiving.',
      image: form4,

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
                    <button className="bg-[#000AFF] text-white hover:bg-black p-3 w-[180px] rounded-lg">Add to Cart</button>
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
                <th className="bg-[#F2F3FF]" ><span className=" text-green-600 text-[30px] font-source-sans-pro ">{service.stater}</span></th>
                <th> {service.standand === "❌" && (
                  <span className="text-green-600 text-[30px]">❌</span>
                )}
                </th>
                <th className="bg-[#F2F3FF]"><span className=" text-green-600 text-[30px]">{service.plus}</span></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Features