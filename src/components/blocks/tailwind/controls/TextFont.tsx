import React, { useState } from 'react'
import _ from 'lodash';
import FontPicker from 'react-fontpicker-ts'
import classes from '../../../../utils/scripts/tw.classes';
import { useDispatch } from '../../../../store';
const TextFont = ({ title, data, attr }: any) => {
  const fonts = classes.fontfamily;
  const editBlockFontContent = useDispatch('editor', 'editBlockFontContent');
  const [fontFamily, setFontFamily] = useState(!_.isNull(data) && !_.isUndefined(data) ? data : '');
  const handleChange = (v: any) => {
    setFontFamily(v);
    //editBlockFontContent(v);
  };
  return (
    <div className="flex flex-col family">
      <p className='uppercase font-bold' style={{
        fontSize: '10px',
      }}>Font Family</p>
      <FontPicker defaultValue={fontFamily}/>

    </div>
  )
}
export default TextFont;