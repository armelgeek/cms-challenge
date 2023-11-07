import React, { useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
const TextFont = ({ title, data, attr, updateCss }: any) => {
  const fonts = classes.fontfamily;
  const [fontFamily, setFontFamily] = useState(!_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : '');
  const handleChange = (e: any) => {
    let v = e.target.value;
    setFontFamily(v);
    updateCss(v, attr);
  };
  return (
    <div className="flex flex-col family">
      <label className="font-bold">Font</label>
      <select className="p-2" value={fontFamily} onChange={handleChange}>
        <option value=""></option>
        <option value="Arial">sans-serif</option>
        <option value="serif">serif</option>
        <option value="monospace">monospace</option>
        {fonts.map(font => (
          <option value={font}>{font}</option>
        ))}
      </select>
    </div>
  )
}
export default TextFont;