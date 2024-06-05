import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllCartItemsService } from "@/services/cart";
import Cookies from "js-cookie";
import { ICartItemDomain } from "@/types/cart.types";
import Loading from "./Loading";

const CartSummary = () => {
  const [showCoupon, setShowCoupon] = useState(false);

  const handClickCoupon = () => {
    setShowCoupon(true);
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      const token = Cookies.get("token");
      return handleGetAllCartItemsService(token);
    },
  });

  if (isError) return <div>Something went wrong</div>;
  return (
    <div className="h-full w-full">
      {isLoading ? (
        <Loading className="h-[calc(100vh-60px)]" />
      ) : (
        <>
          <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4 text-center">
            <span>Product</span>
            <span>Duration</span>
            <span>Price</span>
          </div>
          <hr className="h-[1px]" />
          {data?.products?.map((item: ICartItemDomain) => (
            <CartItem
              key={item._id}
              product={item.product}
              price={item.domainprice}
              domain={item.domainName}
            />
          ))}

          <hr />
          <div className="flex justify-between items-start py-2 px-2">
            {!showCoupon ? (
              <button
                onClick={handClickCoupon}
                className="font-source-sans-pro text-[17px] font-700 text-[#0011FF] px-6 transition-transform duration-300"
              >
                Have a Coupon Code?
              </button>
            ) : (
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
              <span>₹ {data?.subTotal}</span>
              <span>₹ {Number(data?.Total) - Number(data?.subTotal)}</span>
            </div>
          </div>
          <hr className="h-[1px]" />
          <div className="flex justify-end">
            <div className="flex gap-12 font-source-sans-pro text-[15px] font-900 text-[#000000] text-start py-4 px-3">
              <span>Total</span>
              <span>₹ {data?.Total}</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-center p-4">
            <button className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px] rounded-[4px]">
              Continue to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
