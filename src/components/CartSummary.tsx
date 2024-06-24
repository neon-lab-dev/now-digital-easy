import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllCartItemsService } from "@/services/cart";
import Loading from "./Loading";
import cartImage from "@/assets/icons/cart.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  CartItemForLocalDataDomain,
  CartItemForLocalDataGSuite,
  CartItemForLocalDataHosting,
} from "./CartItemForLocalData";
import { handleGetGSuiteDetailsServices } from "@/services/gsuite";
import {
  setActiveAuthTab,
  setIsSideBarActive,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import {
  IGSuitLocal,
  setRedirectToCheckout,
  setSidebarActiveStep,
} from "@/store/slices/cartSlice";
import {
  IHostingProduct,
  handleGetHostingDetailsServices,
} from "@/services/hosting";
import { ICartItemDomain } from "@/types/cart.types";
import {
  CartItemForRemoteDataDomain,
  CartItemForRemoteDataGSuite,
  CartItemForRemoteDataHosting,
} from "./CartItemForRemoteData";

const CartSummary = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const { cartItems: cartItemsFromLocal } = useAppSelector(
    (state) => state.cart
  );
  const { isLoggedIn, authToken } = useAppSelector((state) => state.user);

  const handClickCoupon = () => {
    setShowCoupon(true);
  };

  const { isLoading, isError, isFetching, data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => handleGetAllCartItemsService(currency?.code!, authToken),
    enabled: isLoggedIn,
  });

  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { data: gsuiteData, isLoading: isGSuiteLoading } = useQuery({
    queryFn: () => {
      return handleGetGSuiteDetailsServices(currency?.countryCode!);
    },
    queryKey: ["gsuite"],
  });

  const { data: hostingData, isLoading: isHostingLoading } = useQuery({
    queryKey: ["hosting"],
    queryFn: () => handleGetHostingDetailsServices(currency?.countryCode!),
  });

  return (
    <div className="h-full w-full">
      {isGSuiteLoading || isHostingLoading ? (
        <Loading className="h-[calc(100vh-60px)]" />
      ) : !isLoggedIn ? (
        cartItemsFromLocal?.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="flex justify-between font-source-sans-pro text-xs sm:text-[15px] font-700 px-8 py-4 text-center">
              <div className="pr-6">Product</div>
              <span>Duration</span>
              <span>Price</span>
            </div>
            <hr className="h-[1px]" />
            {cartItemsFromLocal?.map((item) => {
              if ((item as IGSuitLocal).product === "gsuite") {
                return (
                  <CartItemForLocalDataGSuite
                    key={item.productId}
                    {...(item as IGSuitLocal)}
                    productDetails={
                      gsuiteData?.find(
                        (product) => product._id === item.productId
                      )!
                    }
                  />
                );
                // @ts-ignore
              } else if ((item as IHostingProduct).product === "hosting") {
                return (
                  // @ts-ignore
                  <CartItemForLocalDataHosting
                    key={item.productId}
                    // @ts-ignore
                    {...(item as IHostingProduct)}
                    productDetails={
                      hostingData?.find(
                        (product) => product._id === item.productId
                      )!
                    }
                  />
                );
              } else if ((item as ICartItemDomain).product === "domain") {
                return (
                  <CartItemForLocalDataDomain
                    key={item.productId}
                    {...(item as ICartItemDomain)}
                  />
                );
              }
            })}
            <div className="flex justify-center p-4 mt-auto">
              <button
                onClick={() => {
                  dispatch(setIsSidebarOpen(true));
                  dispatch(setIsSideBarActive(false));
                  dispatch(setActiveAuthTab("login"));
                  dispatch(setRedirectToCheckout(true));
                }}
                className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] rounded-[4px]"
              >
                Login to Continue
              </button>
            </div>
          </>
        )
      ) : isLoading || isFetching ? (
        <Loading className="h-[calc(100vh-60px)]" />
      ) : // @ts-ignore
      data?.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex justify-between font-source-sans-pro text-[15px] font-700 px-8 py-4 text-center">
            <div className="pr-6">Product</div>
            <span>Duration</span>
            <span>Price</span>
          </div>
          <hr className="h-[1px]" />
          {data?.products?.map((item) => {
            if (item.product === "gsuite") {
              return (
                <CartItemForRemoteDataGSuite
                  key={item.productId}
                  {...item}
                  productDetails={
                    gsuiteData?.find(
                      (product) => product._id === item.productId
                    )!
                  }
                />
              );
            } else if (item.product === "hosting") {
              return (
                <CartItemForRemoteDataHosting
                  key={item.productId}
                  {...item}
                  productDetails={
                    hostingData?.find(
                      (product) => product._id === item.productId
                    )!
                  }
                />
              );
            } else if (item.product === "domain") {
              return (
                <CartItemForRemoteDataDomain key={item.productId} {...item} />
              );
            }
          })}

          <hr />
          <div className="flex justify-between items-start py-2 px-2 pr-6">
            {!showCoupon ? (
              <button
                onClick={handClickCoupon}
                className="font-source-sans-pro text-sm ms:text-[17px] font-700 text-[#0011FF] px-6 transition-transform duration-300"
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
          <div className="flex justify-end pr-6">
            <div className="flex gap-12 font-source-sans-pro text-[15px] font-900 text-[#000000] text-start py-4 pl-3">
              <span>Total</span>
              <span>
                {getSelectedCurrencySymbol(currency?.code!)} {data?.Total}
              </span>
            </div>
          </div>
          <hr />
          <div className="flex justify-center p-4">
            <button
              onClick={() => {
                dispatch(setSidebarActiveStep(1));
              }}
              className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] rounded-[4px]"
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
