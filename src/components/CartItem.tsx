// @ts-nocheck
import Image from "next/image";
import { useState } from "react";
import google from "@/assets/images/image 110.svg";
import vector from "@/assets/images/Vector.svg";
import trash from "@/assets/images/trash-2.svg";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  handleAddAItemToCartService,
  handleUpdateCartService,
} from "@/services/cart";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";
import { ICart, ICartItem, ICartItemGsuite } from "@/types/cart.types";
import {
  ICartItemDomainLocal,
  deleteCartItem,
  updateACartItem,
} from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/redux";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import { IGSuiteProduct } from "@/services/gsuite";

const CartItem = ({
  productDetails,
  product,
  ...props
}: ICartItemGsuite & {
  productDetails: IGSuiteProduct;
}) => {
  const { currency } = useAppSelector((state) => state.user);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handleUpdateCartService,
    onSettled: () => {
      document.body.style.opacity = "1";
      document.body.style.cursor = "default";
      document.body.style.pointerEvents = "all";
    },
    onSuccess: () => {
      toast.success("Cart updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });

  return (
    <div className="flex p-2 gap-8 items-start hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={google} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000] capitalize">
            {product}
          </span>
          <span className="w-[130px] text-[12px]">
            {/* {productDetails?.name}  */}(
            <span className="text-[#0011FF]">{props.domainName}</span>)
          </span>
          <div className="flex gap-1 items-center">
            <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">
              Users
            </span>
            <div className="bg-white flex justify-center items-start">
              <button
                onClick={() => {
                  const data = queryClient.getQueryData<ICart>(["cart"]);

                  mutate({
                    data: data?.products.map((p) => {
                      const requiredData = {
                        productId: p.productId,
                        qty: p.quantity,
                        period: p.period,
                        product: p.product,
                        type: "new",
                        domainName: p.domainName,
                      };
                      if (p.productId === props.productId) {
                        return {
                          ...requiredData,
                          qty: p.quantity - 1,
                        };
                      }
                      return requiredData;
                    }),
                  });

                  document.body.style.opacity = "0.5";
                  document.body.style.pointerEvents = "all";
                  document.body.style.cursor = "wait";
                }}
                className="border-[#00000026] border px-2 cursor-pointer"
              >
                -
              </button>
              <span className="border-[#00000026] border px-2">
                {props.quantity}
              </span>
              <button
                onClick={() => {
                  const data = queryClient.getQueryData<ICart>(["cart"]);

                  mutate({
                    data: data?.products.map((p) => {
                      const requiredData = {
                        productId: p.productId,
                        qty: p.quantity,
                        period: p.period,
                        product: p.product,
                        type: "new",
                        domainName: p.domainName,
                      };
                      if (p.productId === props.productId) {
                        return {
                          ...requiredData,
                          qty: p.quantity + 1,
                        };
                      }
                      return requiredData;
                    }),
                  });

                  document.body.style.opacity = "0.5";
                  document.body.style.pointerEvents = "all";
                  document.body.style.cursor = "wait";
                }}
                className="border-[#00000026] border px-2 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <select
        value={props.period}
        onChange={(e) => {
          const data = queryClient.getQueryData<ICart>(["cart"]);

          mutate({
            data: data?.products.map((p) => {
              const requiredData = {
                productId: p.productId,
                qty: p.quantity,
                period: p.period,
                product: p.product,
                domainName: p.domainName,
                type: "new",
              };
              if (p.productId === props.productId) {
                return {
                  ...requiredData,
                  period: e.target.value,
                };
              }
              return requiredData;
            }),
          });

          document.body.style.opacity = "0.5";
          document.body.style.pointerEvents = "all";
          document.body.style.cursor = "wait";
        }}
        className="p-1 rounded-lg bg-transparent border border-[#00000026]"
      >
        {productDetails?.price?.map((p) => (
          <option key={p.period} value={p.period}>
            {p.period}
          </option>
        ))}
      </select>
      <div className="flex justify-between items-center gap-2 ml-[23px]">
        <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">
          {getSelectedCurrencySymbol(currency?.code!)}
          {Number(
            productDetails?.price?.find((p) => p.period === props.period)
              ?.offerPrice!
          ).toFixed(2)}
        </span>
        <button
          onClick={() => {
            const data = queryClient.getQueryData<ICart>(["cart"]);

            mutate({
              data: data?.products.filter(
                (p) => p.productId !== props.productId
              ),
            });

            document.body.style.opacity = "0.5";
            document.body.style.cursor = "wait";
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
