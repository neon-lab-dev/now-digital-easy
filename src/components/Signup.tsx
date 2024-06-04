import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

interface SignupProps {
  handleSignIn: () => void;
  handleSignUp: () => void;
}

const Signup: React.FC<SignupProps> = ({ handleSignIn, handleSignUp }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(
        "https://liveserver.nowdigitaleasy.com:5000/client/signin",
        data
      );
      console.log("Login successful:", response.data);
      Cookies.set("token", response.data.token, { expires: 7 });
      toast.success("Login successful");

      handleSignIn();
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="w-[299px] py-10 flex flex-col">
          <span className="font-source-sans-pro font-700 text-[17px]">
            New User?
          </span>
          <span className="font-source-sans-pro font-400 text-[13px]">
            Please sign up with your credentials below to continue.
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
          />
          {errors.email && (
            <span className="text-red-500">Email is required</span>
          )}
          <label
            htmlFor="forpassword"
            className="font-source-sans-pro font-400 text-[15px] pt-4 text-[#313131]"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="border-[1px] p-3 rounded-lg mt-2"
          />
          {errors.password && (
            <span className="text-red-500">Password is required</span>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleSubmit(onSubmit)}
          className="font-source-sans-pro text-[17px] font-700 text-white px-10 py-2 bg-[#0011FF] h-[40px] w-[215px] rounded-[4px]"
        >
          Sign Up
        </button>
      </div>
      <div className="flex justify-center pt-2">
        <span className="font-source-sans-pro font-400 text-[15px]">
          Already a member?{" "}
          <span
            onClick={handleSignUp}
            className="underline font-source-sans-pro font-400 text-[#0011FF] cursor-pointer"
          >
            Sign in
          </span>
        </span>
      </div>
    </div>
  );
};

export default Signup;
