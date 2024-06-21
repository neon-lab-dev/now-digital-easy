// @ts-nocheck

import Image from "next/image";
import google from "@/assets/images/image 110.svg";
import domainImage from "@/assets/icons/internet-earth-globe-svgrepo-com.svg";
import trash from "@/assets/images/trash-2.svg";
import { ICart, ICartItemDomain, ICartItemHosting } from "@/types/cart.types";
import {
  IGSuitLocal,
  deleteCartItem,
  updateACartItem,
} from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/redux";
import { getSelectedCurrencySymbol } from "@/helpers/currencies";
import hostingImage from "@/assets/icons/Upload to Cloud.png";
import { IGSuiteProduct } from "@/services/gsuite";
import { IHostingProduct } from "@/services/hosting";

export const CartItemForLocalDataGSuite = ({
  domainName,
  name,
  period,
  product,
  productId,
  qty,
  productDetails,
}: IGSuitLocal & {
  productDetails: IGSuiteProduct;
}) => {
  const dispatch = useDispatch();
  const { currency } = useAppSelector((state) => state.user);
  return (
    <div className="flex p-2 gap-4 items-start justify-between hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={google} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000] capitalize font-900">
            {product}
          </span>
          <span className="w-[130px] text-[12px]">
            {name} (<span className="text-[#0011FF]">{domainName}</span>)
          </span>
          <div className="flex gap-1 items-center">
            <span className="font-source-sans-pro text-[15px] font-700 text-[#000000]">
              Users
            </span>
            <div className="bg-white flex justify-center items-start">
              <button
                onClick={() => {
                  if (qty === 1) return;
                  dispatch(
                    updateACartItem({
                      productId,
                      qty: qty - 1,
                    })
                  );
                }}
                className="border-[#00000026] border px-2 cursor-pointer"
              >
                -
              </button>
              <span className="border-[#00000026] border px-2">{qty}</span>
              <button
                disabled={qty === 300}
                onClick={() => {
                  dispatch(
                    updateACartItem({
                      productId,
                      qty: qty + 1,
                    })
                  );
                }}
                className="border-[#00000026] border px-2"
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
          dispatch(
            updateACartItem({
              productId,
              period: e.target.value,
            })
          );
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
          {(
            Number(
              productDetails?.price?.find((p) => p.period === period)
                ?.offerPrice!
            ) * Number(qty)
          ).toFixed(2)}
        </span>
        <button
          onClick={() => {
            dispatch(deleteCartItem(productId));
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};

export const CartItemForLocalDataHosting = ({
  domainName,
  period,
  productDetails,
  productId,
  product,
}: ICartItemHosting & {
  productDetails: IHostingProduct;
}) => {
  const dispatch = useDispatch();
  const { currency } = useAppSelector((state) => state.user);
  return (
    <div className="flex p-2 gap-4 items-start justify-between hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={hostingImage} alt="" />
        <div className="flex flex-col gap-1">
          <span className="text-[15px] text-[#000000] capitalize font-900">
            {product}
          </span>
          <span className="w-[130px] text-[12px]">
            Domain (<span className="text-[#0011FF]">{domainName}</span>)
          </span>
        </div>
      </div>
      <select
        value={period}
        onChange={(e) => {
          dispatch(
            updateACartItem({
              productId,
              period: e.target.value,
            })
          );
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
          {productDetails?.price?.find((p) => p.period === period)?.amount!}
        </span>
        <button
          onClick={() => {
            dispatch(deleteCartItem(productId));
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};

export const CartItemForLocalDataDomain = ({
  domainName,
  productId,
  product,
  year,
  ...rest
}: ICartItemDomain) => {
  const dispatch = useDispatch();
  const { currency } = useAppSelector((state) => state.user);
  return (
    <div className="flex p-2 gap-4 items-start justify-between hover:bg-[#e1e1e180]">
      <div className="flex items-start gap-1">
        <Image src={domainImage} alt="" className="h-7 w-7 mt-1" />
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
          {rest?.price}
        </span>
        <button
          onClick={() => {
            dispatch(deleteCartItem(productId));
          }}
        >
          <Image src={trash} alt="" className="min-w-4 min-h-4" />
        </button>
      </div>
    </div>
  );
};
