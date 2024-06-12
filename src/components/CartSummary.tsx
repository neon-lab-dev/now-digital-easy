import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllCartItemsService } from "@/services/cart";
import Cookies from "js-cookie";
import Loading from "./Loading";
import cartImage from "@/assets/icons/cart.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import CartItemForLocalData from "./CartItemForLocalData";
import { handleGetGSuiteDetailsServices } from "@/services/gsuite";
import {
  setActiveAuthTab,
  setIsSideBarActive,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";

const CartSummary = ({ onClick }: { onClick: () => void }) => {
  const [showCoupon, setShowCoupon] = useState(false);
  const { cartItems: cartItemsFromLocal } = useAppSelector(
    (state) => state.cart
  );
  const { isLoggedIn } = useAppSelector((state) => state.user);

  const handClickCoupon = () => {
    setShowCoupon(true);
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => handleGetAllCartItemsService(currency?.code!),
    enabled: isLoggedIn,
  });

  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { data: productsData, isLoading: isProductsLoading } = useQuery({
    queryFn: () => {
      return handleGetGSuiteDetailsServices(currency?.code!);
    },
    queryKey: ["gsuite"],
  });

  return (
    <div className="h-full w-full">
      {isProductsLoading ? (
        <Loading className="h-[calc(100vh-60px)]" />
      ) : !isLoggedIn ? (
        cartItemsFromLocal?.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4 text-center">
              <span>Product</span>
              <span>Duration</span>
              <span>Price</span>
            </div>
            <hr className="h-[1px]" />
            {cartItemsFromLocal?.map((item) => (
              <CartItemForLocalData
                key={item.productId}
                {...item}
                productDetails={
                  productsData?.find(
                    (product) => product._id === item.productId
                  )!
                }
              />
            ))}
            <div className="flex justify-center p-4 mt-auto">
              <button
                onClick={() => {
                  dispatch(setIsSidebarOpen(true));
                  dispatch(setIsSideBarActive(false));
                  dispatch(setActiveAuthTab("login"));
                }}
                className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] rounded-[4px]"
              >
                Login to Continue
              </button>
            </div>
          </>
        )
      ) : isLoading ? (
        <Loading className="h-[calc(100vh-60px)]" />
      ) : // @ts-ignore
      data?.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4 text-center">
            <span>Product</span>
            <span>Duration</span>
            <span>Price</span>
          </div>
          <hr className="h-[1px]" />
          {data?.products?.map((item) => (
            <CartItem
              key={item._id}
              {...item}
              productDetails={
                productsData?.find((product) => product._id === item.productId)!
              }
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
              <span>
                {getSelectedCurrencySymbol(currency?.code!)} {data?.subTotal}
              </span>
              <span>
                {getSelectedCurrencySymbol(currency?.code!)}{" "}
                {Number(data?.Total) - Number(data?.subTotal)}
              </span>
            </div>
          </div>
          <hr className="h-[1px]" />
          <div className="flex justify-end">
            <div className="flex gap-12 font-source-sans-pro text-[15px] font-900 text-[#000000] text-start py-4 px-3">
              <span>Total</span>
              <span>
                {getSelectedCurrencySymbol(currency?.code!)} {data?.Total}
              </span>
            </div>
          </div>
          <hr />
          <div className="flex justify-center p-4">
            <button
              onClick={onClick}
              className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px] rounded-[4px]"
            >
              Continue to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;

const EmptyCart = () => (
  <div className="flex justify-center items-center h-[calc(100vh-60px)]">
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image src={cartImage} alt="cart" width={20} height={20} />
      <span className="font-source-sans-pro text-sm text-[#000000]">
        Your cart is empty
      </span>
    </div>
  </div>
);
