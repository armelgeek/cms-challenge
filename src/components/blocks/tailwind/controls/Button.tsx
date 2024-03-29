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
    className={`rounded-xl text-xs my-1 badge ${selected ? ' bg-primary-500 text-white' : 'bg-white text-gray-600'} cursor-pointer flex  justify-center border  text-sm mr-1`}>
    {attr}
  </div>
  )
}
export default Button;