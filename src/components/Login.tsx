import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

interface SignupProps {
  handleSignIn: () => void;
  handleSignUp: () => void;
}

const Login: React.FC<SignupProps> = ({ handleSignUp, handleSignIn }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    phone_number: "",
    gstin: ""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://liveserver.nowdigitaleasy.com:5000/client/signup', formData);
      console.log('Signup successful:', response.data);
      toast.success('Signup successful');
      handleSignIn();
    } catch (error: any) {
      console.error('Signup failed:', error);

      // Check if error.response exists and contains a data object
      if (error.response && error.response.data) {
        // Use the error message from the response data if available
        const errorMessage = error.data.message || 'Signup failed. Please try again.';
        toast.error(errorMessage); // Display error toast with custom error message
      } else {
        // Otherwise, display a generic error message
        toast.error('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[406px] py-6 flex flex-col">
          <span className="font-source-sans-pro font-700 text-[17px]">New User?</span>
          <span className="font-source-sans-pro font-400 text-[13px]">Create an account in 10 seconds</span>
          <div className="grid grid-cols-2 gap-2 pt-3 pb-3">
            <div>
              <label htmlFor="firstName" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px] "
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px] "
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Phone Number</label>
              <input
                type="number"
                name="phone_number"
                placeholder="Phone Number"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px] "
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="companyName" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="border-[1px] p-3 rounded-lg mt-2 w-[406px]  text-[12px] "
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="city" className="font-source-sans-pro  font-400 text-[13px] pt-4 text-[#313131]">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="pincode" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Pin Code</label>
              <input
                type="number"
                name="pincode"
                placeholder="Pin Code"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px] "
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="state" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">State</label>
              <input
                type="text"
                name="state"
                placeholder="State"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="country" className="font-source-sans-pro font-400 text-[13px] pt-4 text-[#313131]">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px]  text-[10px] "
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="gstin" className=" text-[13px] pt-4 text-[#313131]">GSTIN</label>
              <input
                type="text"
                name="gstin"
                placeholder="GSTIN"
                className="border-[1px] p-3 rounded-lg mt-2 w-[196px] text-[12px]"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={handleSubmit} className="font-source-sans-pro text-[17px] font-700 text-white px-10  bg-[#0011FF]  h-[40px] w-[215px] rounded-[4px]">
          Create Account
        </button>
      </div>
      <div className="flex justify-center">
        <span className="font-source-sans-pro font-400 text-[17px]">Already have an account?<span onClick={handleSignUp} className="underline font-source-sans-pro font-400  text-[#0011FF]"> Sign in</span></span>
      </div>
    </div>
  );
};

export default Login;
