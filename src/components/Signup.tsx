import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { ISignupCredentials, handleSignupService } from "@/services/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux"; // Import useDispatch for dispatching actions
import {
  setActiveAuthTab,
  setIsSideBarActive,
  setIsSidebarOpen,
} from "@/store/slices/sidebarSlice";
import { handleSyncCartItems } from "@/services/cart";
import { useAppSelector } from "@/hooks/redux";
import { handleGetAllCurrenciesService } from "@/services/currency";
import { setAuthTokenCookie } from "@/helpers/auth";
import { setAuthToken } from "@/store/slices/userSlice";
import { setSidebarActiveStep } from "@/store/slices/cartSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { cartItems, redirectToCheckout } = useAppSelector(
    (state) => state.cart
  );
  const [selectedCountry, setSelectedCountry] = useState(""); // State for selected country
  const [countries, setCountries] = useState<string[]>([]); // State for countries

  // Fetch currencies and populate countries select options
  const { isLoading, data: currencyData } = useQuery({
    queryKey: ["currencies"],
    queryFn: handleGetAllCurrenciesService,
    staleTime: Infinity,
  });

  // UseEffect to update countries based on currencyData
  useEffect(() => {
    if (currencyData) {
      // Assuming currencyData is an array of currencies with a 'country' property
      const countries = currencyData.map((currency) => currency.countryCode);
      // Update countries in state
      setCountries(countries);
    }
  }, [currencyData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupCredentials>();

  const { mutate, isPending } = useMutation({
    mutationFn: handleSignupService,
    onSuccess: (data) => {
      toast.success(data.message);

      setAuthTokenCookie(data.data.jwtToken);
      dispatch(setAuthToken(data.data.jwtToken));

      let toaster = toast.loading("Syncing cart items...", {
        autoClose: false,
      });

      handleSyncCartItems({
        data: cartItems,
        token: data.data.jwtToken,
      })
        .then(() => {
          queryClient.invalidateQueries({
            queryKey: ["cart"],
          });
        })
        .then(() => {
          queryClient.invalidateQueries({
            queryKey: ["user"],
          });
        })
        .then(() => {
          if (redirectToCheckout) {
            dispatch(setSidebarActiveStep(2));
            dispatch(setIsSideBarActive(true));
          } else {
            dispatch(setIsSidebarOpen(false));
          }
        })
        .finally(() => {
          toast.dismiss(toaster);
        });
    },
    onError: (error: string) => {
      toast.error(error);
    },
  });

  const onSubmit = (data: ISignupCredentials) => {
    mutate(data);
  };

  const handleFormSubmit = (event: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent default behavior of the Enter key
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center">
          <div className="w-[406px]  max-md:w-[350px] flex flex-col">
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
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  type="number"
                  {...register("phone_number", { required: true })}
                  placeholder="Phone Number"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  className="border-[1px] p-3 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[12px]"
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
                  className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]"
                >
                  City
                </label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  type="number"
                  {...register("pincode", { required: true })}
                  placeholder="Pin Code"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
                <select
                  {...register("country", { required: true })}
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <span className="text-red-500 text-[10px]">
                    Country is required
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="gstin"
                  className="font-source-sans-pro font-400 text-[13px] pt-2 text-[#313131]"
                >
                  GSTIN
                </label>
                <input
                  type="text"
                  {...register("gstin", { required: true })}
                  placeholder="GSTIN"
                  className="border-[1px] p-2 rounded-lg mt-2 w-[196px] max-md:w-[150px] text-[10px]"
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
            className="font-source-sans-pro text-[17px] font-700 text-white px-10 disabled:opacity-75 bg-[#0011FF] h-[40px] w-[215px] rounded-[4px]"
          >
            {isPending ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <span className="font-source-sans-pro font-400 text-xs">
          Already have an account?{" "}
          <button
            onClick={() => {
              dispatch(setActiveAuthTab("login"));
            }}
            className="underline font-source-sans-pro font-400 text-[#0011FF]"
          >
            Sign in
          </button>
        </span>
      </div>
    </div>
  );
};

export default Signup;
