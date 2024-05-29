import Image from "next/image";
import { useState } from "react";
import google from "@/assets/images/image 110.svg";
import vector from "@/assets/images/Vector.svg";
import trash from "@/assets/images/trash-2.svg";

const CartItem = ({ product, price, domain }: { product: string; price: number; domain: string }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Monthly');
  const [isOpen, setIsOpen] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex p-2 gap-8 items-start hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={google} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000]">{product}</span>
          <span className="w-[130px] text-[12px]">Business Starter (<span className="text-[#0011FF]">{domain}</span>)</span>
          <div className="flex gap-1 items-center">
            <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">Users</span>
            <div className="bg-white flex justify-center items-start">
              <span className="border-[#00000026] border px-2 cursor-pointer" onClick={decreaseQuantity}>-</span>
              <span className="border-[#00000026] border px-2">{quantity}</span>
              <span className="border-[#00000026] border px-2 cursor-pointer" onClick={increaseQuantity}>+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div onClick={toggleDropdown} className="flex justify-between border-[#00000026] border bg-white w-[125px] h-[28px] p-1">
          <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">{selectedOption}</span>
          <Image src={vector} alt="" />
        </div>
        {isOpen && (
          <div className="flex flex-col justify-center border border-1 px-1 bg-white cursor-pointer">
            <span onClick={() => handleOptionSelect('Monthly')} className="text-[12px]">Monthly</span>
            <hr />
            <span onClick={() => handleOptionSelect('Annually')} className="text-[12px]">Annually</span>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center gap-2 ml-[23px]">
        <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">₹{price}.00</span>
        <Image src={trash} alt="" />
      </div>
    </div>
  );
};

export default CartItem;