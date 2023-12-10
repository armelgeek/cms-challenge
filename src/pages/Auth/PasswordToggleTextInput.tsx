import React, { useState } from 'react';
import {FiEye, FiEyeOff} from "react-icons/fi";

const PasswordToggleTextInput = (props:any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <input
          className="text-sm  h-10 w-full border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
          {...props}
          type={isPasswordVisible? 'text' : 'password'}
      />
      <div
          className="absolute cursor-pointer top-3 right-2 bottom-0"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ?  <FiEye/> :<FiEyeOff/>}
      </div>
    </div>
  );
};

export default PasswordToggleTextInput;