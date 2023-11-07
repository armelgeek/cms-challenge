import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import { toCamelCase } from '../../../../utils/functions';

const Button = ({ title, data, attr, updateCss }: any) => {
  const [selected, setSelected] = useState(!_.isNull(data) && !_.isNull(data[toCamelCase(attr)]) && !_.isUndefined(data[toCamelCase(attr)]) && data[toCamelCase(attr)]!= '');
  const toggle = () => {
    setSelected((s:any) => {
      let lex = !s;
      updateCss(lex ? attr: '', toCamelCase(attr));
      return lex;
    });

  }
 
  return (<div
    onClick={toggle}
    className={`${selected ? 'border-white bg-indigo-500 text-white' : 'border-transparent text-gray-600'} cursor-pointer px-2 flex  justify-center border text-white text-sm mr-1 hover:bg-indigo-300`}>
    {attr}
  </div>
  )
}
export default Button;