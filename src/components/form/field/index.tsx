import React from "react";
import TextInput from "../components/TextInput";
import SelectButton from "../components/SelectButton";
const generateField = (FormComponent: any) => {
  return ({
    className,
    label,
    tip,
    info,
    isBool = false,
    options,
    optional,
    error,
    name,
    half = false,
    ...otherProps
  }: any) => {
    return (
      <>
        <label className="label mb-1">{label}</label>
        <FormComponent
          invalid={!!error}
          options={options}
          name={name}
          label={label}
          {...otherProps}
        />
        {info && <p className="help-text mt-1">{info}</p>}
        {error && <p className="error-message mt-1">{error}</p>}
      </>
    );
  };
};
export default {
    Input: generateField(TextInput),
    Select: generateField(SelectButton),
  };
