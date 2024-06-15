// @ts-nocheck

import Image from "next/image";
import google from "@/assets/images/image 110.svg";
import trash from "@/assets/images/trash-2.svg";
import {
  ICart,
  ICartItemDomain,
  ICartItemGsuite,
  ICartItemHosting,
} from "@/types/cart.types";
import { useAppSelector } from "@/hooks/redux";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import hostingImage from "@/assets/icons/Upload to Cloud.png";
import { IGSuiteProduct } from "@/services/gsuite";
import { IHostingProduct } from "@/services/hosting";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleUpdateCartService } from "@/services/cart";
import { toast } from "react-toastify";

const makeWebsiteLoading = () => {
  document.body.style.opacity = "0.5";
  document.body.style.pointerEvents = "all";
  document.body.style.cursor = "wait";
};

const removeWebsiteLoading = () => {
  document.body.style.opacity = "1";
  document.body.style.pointerEvents = "all";
  document.body.style.cursor = "default";
};

export const CartItemForRemoteDataGSuite = ({
  domainName,
  period,
  product,
  quantity,
  productId,
  productDetails,
  ...rest
}: ICartItemGsuite & {
  productDetails: IGSuiteProduct;
}) => {
  const { currency } = useAppSelector((state) => state.user);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handleUpdateCartService,

    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["cart"],
        })
        .finally(() => {
          removeWebsiteLoading();
          toast.success("Cart updated successfully");
        });
    },
    onError: () => {
      toast.error("Something went wrong");
      removeWebsiteLoading();
    },
  });
  return (
    <div className="flex p-2 gap-4 items-start justify-between hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={google} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000] capitalize font-900">
            Google Workspace
          </span>
          <span className="w-[130px] text-[12px]">
            Domain (<span className="text-[#0011FF]">{domainName}</span>)
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
                      if (p.productId === productId) {
                        const requiredData = {
                          productId: p.productId,
                          qty: p.quantity,
                          period: p.period,
                          product: p.product,
                          type: "new",
                          domainName: p.domainName,
                        };
                        return {
                          ...requiredData,
                          qty: p.quantity - 1,
                        };
                      }
                      return p;
                    }),
                  });

                  makeWebsiteLoading();
                }}
                className="border-[#00000026] border px-2 cursor-pointer"
              >
                -
              </button>
              <span className="border-[#00000026] border px-2">{quantity}</span>
              <button
                onClick={() => {
                  const data = queryClient.getQueryData<ICart>(["cart"]);

                  mutate({
                    data: data?.products.map((p) => {
                      if (p.productId === productId) {
                        const requiredData = {
                          productId: p.productId,
                          qty: p.quantity,
                          period: p.period,
                          product: p.product,
                          type: "new",
                          domainName: p.domainName,
                        };
                        return {
                          ...requiredData,
                          qty: p.quantity + 1,
                        };
                      }
                      return p;
                    }),
                  });

                  makeWebsiteLoading();
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
        value={period}
        onChange={(e) => {
          const data = queryClient.getQueryData<ICart>(["cart"]);

          mutate({
            data: data?.products.map((p) => {
              if (p.productId === productId) {
                const requiredData = {
                  productId: p.productId,
                  qty: p.quantity,
                  period: p.period,
                  product: p.product,
                  type: "new",
                  domainName: p.domainName,
                };
                return {
                  ...requiredData,
                  period: e.target.value,
                };
              }
              return p;
            }),
          });

          makeWebsiteLoading();
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
          {rest?.gsuitePrice}
        </span>
        <button
          onClick={() => {
            const data = queryClient.getQueryData<ICart>(["cart"]);

            mutate({
              data: data?.products.filter((p) => p.productId !== productId),
            });

            makeWebsiteLoading();
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};

export const CartItemForRemoteDataHosting = ({
  domainName,
  period,
  productDetails,
  productId,
  product,
  ...rest
}: ICartItemHosting & {
  productDetails: IHostingProduct;
}) => {
  const { currency } = useAppSelector((state) => state.user);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handleUpdateCartService,

    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["cart"],
        })
        .finally(() => {
          removeWebsiteLoading();
          toast.success("Cart updated successfully");
        });
    },
    onError: () => {
      toast.error("Something went wrong");
      removeWebsiteLoading();
    },
  });
  console.log("productDetails", productDetails);
  return (
    <div className="flex p-2 gap-4 items-start justify-between hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={hostingImage} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000] capitalize font-900">
            {product}
          </span>
          <span className="w-[130px] text-[12px]">
            {rest?.productName && <>({rest?.productName}) </>} Domain (
            <span className="text-[#0011FF]">{domainName}</span>)
          </span>
        </div>
      </div>
      <select
        value={period}
        onChange={(e) => {
          const data = queryClient.getQueryData<ICart>(["cart"]);
          mutate({
            data: data?.products.map((p) => {
              if (p.productId === productId) {
                const requiredData = {
                  productId: p.productId,
                  period: p.period,
                  product: p.product,
                  domainName: p.domainName,
                };
                return {
                  ...requiredData,
                  period: e.target.value,
                };
              }
              return p;
            }),
          });

          makeWebsiteLoading();
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
          {rest?.pleskPrice}
        </span>
        <button
          onClick={() => {
            const data = queryClient.getQueryData<ICart>(["cart"]);

            mutate({
              data: data?.products.filter((p) => p.productId !== productId),
            });

            makeWebsiteLoading();
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};

export const CartItemForRemoteDataDomain = ({
  domainName,
  productId,
  product,
  year,
  ...rest
}: ICartItemDomain) => {
  const { currency } = useAppSelector((state) => state.user);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handleUpdateCartService,

    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["cart"],
        })
        .finally(() => {
          removeWebsiteLoading();
          toast.success("Cart updated successfully");
        });
    },
    onError: () => {
      toast.error("Something went wrong");
      removeWebsiteLoading();
    },
  });
  return (
    <div className="flex p-2 gap-4 items-start justify-between hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={google} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000] capitalize font-900">
            {product}
          </span>
          <span className="w-[130px] text-[12px]">
            Domain (<span className="text-[#0011FF]">{domainName}</span>)
          </span>
        </div>
      </div>
      <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">
        {year} Year
      </span>
      <div className="flex justify-between items-center gap-2 ml-[23px]">
        <span className="font-source-sans-pro text-[12px] font-700 text-[#000000]">
          {getSelectedCurrencySymbol(currency?.code!)}
          {rest?.domainprice}
        </span>
        <button
          onClick={() => {
            const data = queryClient.getQueryData<ICart>(["cart"]);

            mutate({
              data: data?.products.filter((p) => p.productId !== productId),
            });

            makeWebsiteLoading();
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};