import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllCartItemsService } from "@/services/cart";
import Cookies from "js-cookie";
import { ICartItemDomain } from "@/types/cart.types";

const CartSummary = () => {
  const [showCoupon, setShowCoupon] = useState(false);

  const handClickCoupon = () => {
    setShowCoupon(true);
  };

  const { isLoading, isError, data } = useQuery<ICartItemDomain[]>({
    queryKey: ["cart"],
    queryFn: () => {
      const token = Cookies.get("token");
      return handleGetAllCartItemsService(token);
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data, isLoading, isError]);

  return (
    <div>
      <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4 text-center">
        <span>Product</span>
        <span>Duration</span>
        <span>Price</span>
      </div>
      <hr className="h-[1px]" />
      <CartItem
        product="Google Workspace"
        price={225}
        domain="thedesignerclub.com"
      />
      <CartItem product="Linux Hosting" price={225} domain="iaaxin.com" />
      <hr />
      <div className="flex justify-between items-start py-2 px-2">
        {!showCoupon && (
          <span
            onClick={handClickCoupon}
            className="font-source-sans-pro text-[17px] font-700 text-[#0011FF] px-6 transition-transform duration-300"
          >
            Have a Coupon Code?
          </span>
        )}
        {showCoupon && (
          <div className="flex border-dashed border border-gray-400 opacity-50 focus:opacity-100">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="placeholder:text-[14px] placeholder:text-center"
            />
            <button className="bg-green-600 text-white p-2">Apply</button>
          </div>
        )}
        <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-700 text-[#000000] text-end">
          <span>Subtotal</span>
          <span>Tax</span>
        </div>
        <div className="flex flex-col gap-3 font-source-sans-pro text-[15px] font-700 text-[#000000] text-end">
          <span>₹ 1600.00</span>
          <span>₹ 80.00</span>
        </div>
      </div>
      <hr className="h-[1px]" />
      <div className="flex justify-end">
        <div className="flex gap-12 font-source-sans-pro text-[15px] font-900 text-[#000000] text-start py-4 px-3">
          <span>Total</span>
          <span>₹ 1600.00</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-center p-4">
        <button className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px] rounded-[4px]">
          Continue to Cart
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
