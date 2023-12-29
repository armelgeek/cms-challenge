import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useGetter } from '../../../store';
import { FaImage } from 'react-icons/fa';
import { UnSplashImagePicker } from 'unsplash-image-picker'
const BlockImageUrl = () => {
  const editor = useGetter('editor', 'data', []);
  const [unsplash, setUnSplash] = useState(false);
  const [value, setValue] = useState(editor?.current?.image?.url);
  const editBlockImageUrl = useDispatch('editor', 'editBlockImageUrl');
  const updateValue = useCallback((e: any) => {

    setValue(e.target.value);
    editBlockImageUrl(e.target.value);
    if (editor.selectedBlocks.length > 0) {
      for (let index = 0; index < editor.selectedBlocks.length; index++) {
        const element = editor.selectedBlocks[index];
        editBlockImageUrl(e.target.value, element)
      }
    }

  }, [value]);
  useEffect(() => {
    setValue(editor?.current?.image?.url);
  }, [editor?.current])
  return editor.current && (
    <div className="flex flex-col items-start"  >
      <div className="flex items-center p-1 justify-around w-full">
        <FaImage />
        <input className="ml-2 p-1 w-3/4 rounded text-lg" value={value} onChange={updateValue} />
      </div>
    </div>
  )
}
export default BlockImageUrl;