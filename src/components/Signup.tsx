import React from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ISignupCredentials, handleSignupService } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setActiveAuthTab,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import { handleSyncCartItems, handleUpdateCartService } from "@/services/cart";

const Signup = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupCredentials>();
  const queryClient = useQueryClient();
  const { cartItems } = useAppSelector((state) => state.cart);

  const { mutate, isPending } = useMutation({
    mutationFn: handleSignupService,
    onSuccess: (data) => {
      Cookies.set("token", data.data.jwtToken);
      toast.success(data.message);
      dispatch(setActiveAuthTab(null));
      dispatch(setIsSidebarOpen(false));
      window.location.reload();
      queryClient
        .invalidateQueries({
          queryKey: ["user"],
        })
        .then(() => {
          if (cartItems.length === 0) {
            queryClient.invalidateQueries({
              queryKey: ["cart"],
            });
          } else {
            handleSyncCartItems({
              data: cartItems,
              token: data.data.jwtToken,
            }).then(() => {
              queryClient.invalidateQueries({
                queryKey: ["cart"],
              });
            });
          }
        });
    },

    onError: (error: string) => {
      toast.error(error);
    },
  });

  const onSubmit = (data: ISignupCredentials) => {
    mutate(data);
  };

  return (
    <div className="pb-7">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="w-[406px] pt-2 flex flex-col">
            <span className="font-source-sans-pro font-700 text-[17px]">
              New User?
            </span>
            <span className="font-source-sans-pro font-400 text-[13px]">
              Create an account in 10 seconds
            </span>
            <div className="grid grid-cols-2 gap-2 pt-3 pb-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  {...register("first_name", { required: true })}
                  placeholder="First Name"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px] "
                />
                {errors.first_name && (
                  <span className="text-red-500 text-[10px]">
                    First Name is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("last_name", { required: true })}
                  placeholder="Last Name"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px]"
                />
                {errors.last_name && (
                  <span className="text-red-500 text-[10px]">
                    Last Name is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email address"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px] "
                />
                {errors.email && (
                  <span className="text-red-500 text-[10px]">
                    Email is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone_number", { required: true })}
                  placeholder="Phone Number"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px]"
                />
                {errors.phone_number && (
                  <span className="text-red-500 text-[10px]">
                    Phone Number is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px] "
                />
                {errors.password && (
                  <span className="text-red-500 text-[10px]">
                    Password is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  {...register("companyName", { required: true })}
                  placeholder="Company Name"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px]"
                />
                {errors.companyName && (
                  <span className="text-red-500 text-[10px]">
                    Company Name is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Address
                </label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[12px] "
                />
                {errors.address && (
                  <span className="text-red-500 text-[10px]">
                    Address is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="font-source-sans-pro  font-400 text-[13px] pt-4 text-[#313131]"
                >
                  City
                </label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px]"
                />
                {errors.city && (
                  <span className="text-red-500 text-[10px]">
                    City is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  {...register("pincode", { required: true })}
                  placeholder="Pin Code"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px] "
                />
                {errors.pincode && (
                  <span className="text-red-500 text-[10px]">
                    Pin Code is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  State
                </label>
                <input
                  type="text"
                  {...register("state", { required: true })}
                  placeholder="State"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px]"
                />
                {errors.state && (
                  <span className="text-red-500 text-[10px]">
                    State is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  Country
                </label>
                <input
                  type="text"
                  {...register("country", { required: true })}
                  placeholder="Country"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px]  text-[10px] "
                />
                {errors.country && (
                  <span className="text-red-500 text-[10px]">
                    Country is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="gstin"
                  className="text-[13px] pt-2 text-[#313131]"
                >
                  GSTIN
                </label>
                <input
                  type="text"
                  {...register("gstin", { required: true })}
                  placeholder="GSTIN"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] text-[10px]"
                />
                {errors.gstin && (
                  <span className="text-red-500 text-[10px]">
                    GSTIN is required
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            disabled={isPending}
            type="submit"
            className="font-source-sans-pro text-[17px] font-700 text-white px-10 disabled:opacity-75  bg-[#0011FF]  h-[40px] w-[215px] rounded-[4px]"
          >
            {isPending ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <span className="font-source-sans-pro font-400 text-xs">
          Already have an account?{"  "}
          <button
            onClick={() => {
              dispatch(setActiveAuthTab("login"));
            }}
            className="underline font-source-sans-pro font-400  text-[#0011FF]"
          >
            Sign in
          </button>
        </span>
      </div>
    </div>
  );
};

export default Signup;
