import React, { useCallback } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILoginCredentials, handleLoginService } from "@/services/auth";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setActiveAuthTab,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import {
  handleSyncCartItems,
  handleUpdateCartService,
} from "@/services/cart";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginCredentials>();
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: handleLoginService,
    onSuccess: (data) => {
      Cookies.set("token", data.data.jwtToken);
      toast.success(data.message);
      dispatch(setActiveAuthTab(null));
      dispatch(setIsSidebarOpen(false));

      handleSyncCartItems({
        data: cartItems,
        token: data.data.jwtToken,
      })
        .then(() => {
          queryClient.invalidateQueries({
            queryKey: ["cart"],
          });
        })
        .finally(() => {
          window.location.reload();
        });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  const onSubmit = (data: ILoginCredentials) => {
    mutate(data);
  };

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
    onSubmit({
    email: event.currentTarget.form?.elements.email.value,
    password: event.currentTarget.form?.elements.password.value,
    });
    }
    },
    [onSubmit]
    );
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="w-[299px] py-10 flex flex-col">
          <span className="font-source-sans-pro font-700 text-[17px]">
            Existing User?
          </span>
          <span className="font-source-sans-pro font-400 text-[13px]">
            Please sign in with your credentials below to continue.
          </span>
          <label
            htmlFor="forEmail"
            className="font-source-sans-pro font-400 text-[15px] pt-4 text-[#313131]"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email address"
            className="border-[1px] p-3 rounded-lg mt-2"
            onKeyPress={handleKeyPress}
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <label
            htmlFor="password"
            className="font-source-sans-pro font-400 text-[15px] pt-4 text-[#313131]"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="border-[1px] p-3 rounded-lg mt-2"
            onKeyPress={handleKeyPress}
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button" // Keep type as "button" to prevent accidental form submission
          disabled={isPending}
          onClick={handleSubmit(onSubmit)}
          className="font-source-sans-pro text-[17px] disabled:opacity-75 font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px] rounded-[4px]"
        >
          {isPending ? "Loading..." : "Sign In"}
        </button>
      </div>
      <div className="flex justify-center pt-2">
        <span className="font-source-sans-pro font-400 text-[15px]">
          New to Digital Easy?{" "}
          <span
            onClick={() => {
              dispatch(setActiveAuthTab("signup"));
            }}
            className="underline font-source-sans-pro font-400 text-[#0011FF] cursor-pointer"
          >
            Sign up here
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
