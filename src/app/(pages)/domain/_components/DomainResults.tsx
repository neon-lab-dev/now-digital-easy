"use client";

import Image from "next/image";
import x from "@/assets/icons/x.svg";
import { DomainAvailabilityResponse } from "@/services/google-workspace";

import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addCartItem } from "@/store/slices/cartSlice";
import { ICartItemDomain } from "@/types/cart.types";
import {
  handleAddAItemToCartService,
  handleGetAllCartItemsService,
} from "@/services/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  setIsSideBarActive,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  domains: DomainAvailabilityResponse[];
};
const DomainResults = ({ isOpen, setIsOpen, domains }: Props) => {
  return (
    <div
      style={{
        scale: isOpen ? 1 : 0,
      }}
      className="bg-gradient-checkout transition-all w-[1000px]  border border-[#000659] shadow-[#00065980] shadow-2xl rounded-xl fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute -top-4 -right-4 bg-gray-400 rounded-full p-1"
      >
        <Image src={x} alt="" className="h-6 w-6" />
      </button>

      <div className="flex flex-col items-center py-6">
        <div className="w-full px-20 mt-4">
          <div></div>

          {domains.length > 0 ? (
            <div className="w-full">
              <ul
                className="
                  max-h-[400px] overflow-y-auto"
              >
                <div>
                  <div className="flex justify-between items-center gap-10 my-4 text-xl font-600">
                    <div className="flex gap-4 items-center">
                      <span>Domain</span>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="min-w-28 text-left">Year</div>
                      <div className="min-w-24">Pricing</div>

                      <div className="min-w-28"></div>
                    </div>
                  </div>
                  <hr className=" bg-[#64646480]  h-[2px]" />
                </div>
                {domains.map((domain: any, index: any) => (
                  <DomainCard
                    key={index}
                    domain={domain.domain}
                    prices={domain.price}
                    status={domain.status}
                    setIsOpen={setIsOpen}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex justify-center items-center h-[200px]">
              <span>No domains found</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainResults;

const DomainCard = ({
  domain,
  prices = [],
  status,
  setIsOpen,
}: {
  domain: string;
  prices?: DomainAvailabilityResponse["price"];
  status: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const [selectedPricing, setSelectedPricing] = useState(prices[0]);
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const { currency } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: () => handleGetAllCartItemsService(currency?.code!),
    enabled: isLoggedIn,
  });

  const isAddedToCart = isLoggedIn
    ? data?.products?.some((item: any) => item.domainName === domain)
    : cartItems.some((item) => item.domainName === domain);

  useEffect(() => {
    setSelectedPricing(prices[0]);
  }, [prices]);

  const { mutate: handleAddToCart, isPending: isAddToCartPending } =
    useMutation({
      mutationFn: handleAddAItemToCartService,
      onError: (error: string) => {
        toast.error(error);
      },
      onSuccess: () => {
        toast.success("Domain added to cart");
        queryClient.invalidateQueries({
          queryKey: ["cart"],
        });
        dispatch(setIsSidebarOpen(!isSidebarOpen));
        dispatch(setIsSideBarActive(true));
        setIsOpen(false);
      },
    });

  return (
    <div>
      <div className="flex justify-between items-center gap-10 my-4">
        <div className="flex gap-4 items-center">
          <span>{domain}</span>
          {status !== "available" && (
            <>
              <span className="text-sm text-red-500">Not Available</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-5">
          {status === "available" && (
            <>
              <select
                className="border border-[#646464] p-1 w-[100px] rounded-lg"
                value={selectedPricing?._id}
                onChange={(e) => {
                  setSelectedPricing(
                    prices.find((price) => price._id === e.target.value)!
                  );
                }}
              >
                {prices?.map((price, index) => (
                  <option key={index} value={price._id}>
                    {price.year} year
                  </option>
                ))}
              </select>
              <div className="min-w-24">
                {getSelectedCurrencySymbol(currency?.code!)}
                {selectedPricing?.registerPrice}
              </div>
            </>
          )}

          <button
            disabled={status !== "available" || isAddedToCart}
            onClick={() => {
              const data = {
                product: "domain",
                productId: selectedPricing.productId,
                domainName: domain,
                type: "new",
                year: selectedPricing.year,
                EppCode: "",
                price: selectedPricing.registerPrice,
              } as const;

              if (isLoggedIn) {
                handleAddToCart(data);
              } else {
                dispatch(
                  // @ts-ignore
                  addCartItem({
                    ...data,
                  } as ICartItemDomain)
                );
                toast.success("Domain added to cart");
                dispatch(setIsSidebarOpen(!isSidebarOpen));
                dispatch(setIsSideBarActive(true));
                setIsOpen(false);
              }
            }}
            className=" bg-[#0009FF] text-white rounded-[5px] p-2 shadow-black shadow-md disabled:opacity-50 min-w-28"
          >
            {isAddedToCart
              ? "Added to cart"
              : isAddToCartPending
              ? "Adding ..."
              : "Add to cart"}
          </button>
          <hr className=" bg-[#64646480]  h-[2px]" />
        </div>
      </div>
      <hr className=" bg-[#64646480]  h-[2px]" />
    </div>
  );
};
