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
                className="input border-slate-300 rounded-md focus:border-slate-300"
                {...props}
                type={isPasswordVisible? 'text' : 'password'}
            />
            <div
                className="absolute top-3 right-2 bottom-0"
                onClick={togglePasswordVisibility}
            >
                {isPasswordVisible ?  <FiEye className="text-slate-500"/> :<FiEyeOff className="text-slate-500"/>}
            </div>
        </div>
    );
};

export default PasswordToggleTextInput;