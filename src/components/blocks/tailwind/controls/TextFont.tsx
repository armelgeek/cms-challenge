import React, { useState } from 'react'
import _ from 'lodash';
import FontPicker from 'react-fontpicker-ts'
import classes from '../../../../utils/scripts/tw.classes';
import { useDispatch, useGetter } from '../../../../store';
const TextFont = ({ title, data, attr }: any) => {
  const fonts = classes.fontfamily;
  const editor = useGetter('editor', 'data', []);
  const editBlockFontContent = useDispatch('editor', 'editBlockFontContent');
  const [fontFamily, setFontFamily] = useState(!_.isNull(data) && !_.isUndefined(data) ? data : '');
  const handleChange = (e: any) => {
    setFontFamily(e.target.value);
    editBlockFontContent(e.target.value);
    if (editor.selectedBlocks.length > 0) {
      for (let index = 0; index < editor.selectedBlocks.length; index++) {
          const element = editor.selectedBlocks[index];
          editBlockFontContent(e.target.value,element)
      }
    }
  };
  return (
    <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
      <div className="flex flex-row-reverse justify-between items-center w-full text-gray-900 dark:text-white text-xs text-opacity-80 dark:text-opacity-80">
        <div className="w-2/3 items-center">
          <div className="w-full space-y-1">
            <div className="relative flex  gap-2 flex-col w-full max-w-full tracking-wide  min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
              <div className="w-full flex gap-1">
                <select className="p-2 select select-sm bg-white" value={fontFamily} onChange={handleChange}>
                  <option value="">-</option>
                  <option value="Arial">sans-serif</option>
                  <option value="serif">serif</option>
                  <option value="monospace">monospace</option>
                  {fonts.map(font => (
                    <option value={font}>{font}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>
         
        </div>
        <label className='w-1/4 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium'>
            Font
          </label>
      </div>
      </div>
  )
}
export default TextFont;