
import React, { useState, useRef } from "react";

const OTPVerificationInput = ({ numOfInputs, onChange, onSubmit }:any) => {
  const [values, setValues] = useState(Array(numOfInputs).fill(""));
  const refs = useRef([] as  any[]);
  const handleChange = (index:number, value:any) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    onChange(newValues.join(""));
    if (value && index < numOfInputs - 1) {
      refs.current[index + 1].focus();
    }
  };
  const isFieldsFilled = () => {
    return values.every((value) => value !== "");
  };
  const handleKeyPress = (e:any, index:number) => {
    if (e.key === "Backspace" && index > 0) {
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
      onChange(newValues.join(""));
      refs.current[index - 1].focus();
    }
  };

  const handlePaste = (e:any) => {
    const pasteData = e.clipboardData.getData("text/plain");
    const pasteDigits = pasteData.match(/\d/g);
    if (pasteDigits && pasteDigits.length === numOfInputs) {
      const newValues = [...pasteDigits];
      setValues(newValues);
      onChange(newValues.join(""));
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-center items-center gap-2 my-5">
        {Array(numOfInputs)
          .fill()
          .map((_, i) => (
            <input
              key={i}
              maxLength={1}
              className="h-12 w-12 border text-lg font-bold items-center rounded-primary bg-slate-100 px-3 dark:border-transparent dark:bg-slate-700 sm:flex"
              value={values[i]}
              placeholder={`${i + 1}`}
              onKeyUp={(e) =>handleKeyPress(e,i)}
              onChange={(e) => handleChange(i, e.target.value)}
              ref={(ref) => (refs.current[i] = ref)}
            />
          ))}
      </div>
      <button
          className="btn w-full text-white bg-primary-500"
          disabled={!isFieldsFilled()}
          onClick={onSubmit}
      >
        Verify
      </button>
    </div>
  );
};

export default OTPVerificationInput;
