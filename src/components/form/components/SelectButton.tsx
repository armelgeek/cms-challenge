import { isFunction } from "lodash";
import React, { forwardRef } from "react";
const SelectButton = forwardRef(
  (
    {
      name,
      className,
      invalid,
      options,
      selectValue,
      valueKey,
      filter,
      isNumeric = true,
      emptyValue = true,
      setData,
      changeValue,
      ...inputProps
    }:any,
    ref:any
  ) => {
    const handleChange = (event:any) => {
      if (!filter || filter.test(event.target.value)) {
        if (isFunction(changeValue)) {
          if (isNumeric) {
            changeValue(Number(event.target.value), event);
          } else {
            changeValue(event.target.value, event);
          }
        }
        if (setData) {
          if (isNumeric) {
            setData(Number(event.target.value));
          } else {
            setData(event.target.value);
          }
        }
      }
    };
    return (
      <div className={className}>
        <select
          {...inputProps}
          defaultValue={`${selectValue}`}
          name={name}
          className={`${invalid ? 'is-invalid':''}`}
          onChange={handleChange}
          ref={ref}
        >
          {emptyValue && <option value="">Selectionner</option>}
          {options?.map((value:any) => (
            <option
              value={`${valueKey ? value.id : value}`}
            >
              {valueKey ? value[valueKey] : value}
            </option>
          ))}
        </select>
      </div>
    );
  }
);
export default SelectButton;
