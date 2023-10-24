import React, { forwardRef, useEffect } from "react";
import { isFunction } from "lodash";
const TextInput = forwardRef(
  (
    {
      icon,
      className,
      filter,
      setData,
      name,
      value,
      data = '',
      placeholder,
      changeValue,
      invalid,
      ...inputProps
    }: any,
    ref:any
  ) => {
    const handleChange = React.useCallback(
      (event:any) => {
        if (!filter || filter.test(event.target.value)) {
          if (isFunction(changeValue)) {
            changeValue(event.target.value, event);
          }
        }
      },
      [name]
    );
    useEffect(() => {
      if (data) changeValue(data);
    }, [data]);
    return (
      <div className={className}>
        {icon && icon}
        <input
          type={"text"}
        className={`input border-slate-300 rounded-md focus:border-slate-300 ${invalid ? 'is-invalid' : ''}`}
          placeholder={placeholder}
          ref={ref}
          defaultValue={value}
          onBlur={handleChange}
        />
      </div>
    );
  }
);
export default TextInput;
