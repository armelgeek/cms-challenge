import React, {useState} from 'react'
import {FaCopyright, FaFileUpload, FaImage, FaRegCopy} from "react-icons/fa";
import BlockImageUrl from "../../../components/blocks/components/BlockImageUrl";
import {useDispatch} from "../../../store";
import Upload from "rc-upload";
let toBase64=function (file:any , callBack:any) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callBack(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};
function BlockChooseImage() {
  const editBlockImageUrl = useDispatch('editor','editBlockImageUrl');
  const props = {
    action: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('');
        }, 2000);
      });
    },
    multiple: true,
    onStart(file:any) {
      return toBase64(file,(imgSrc:string)=> {
        editBlockImageUrl(imgSrc);
      });
    },
    onSuccess(ret:any) {
      console.log('onSuccess', ret);
    },
    onError(err:any) {
      console.log('onError', err);
    },
  };
  const [state,setState]  = useState(0);
  return (
      <div className="flex flex-col">
          <div className="flex flex-row  gap-2 justify-center">
             <button  className={`btn btn-xs bg-${state==0 ? 'primary-500': 'gray-950'} text-white`} onClick={()=> setState(0)}><FaRegCopy/>Copy Url</button>
             <button  className={`btn btn-xs bg-${state==1 ? 'primary-500': 'gray-950'} border text-white`} onClick={()=> setState(1)}> <FaFileUpload/> Upload Image</button>
          </div>
        {state == 0 && (
            <BlockImageUrl/>
        )}
        {state == 1 && (
          <Upload {...props}>
            <div className="py-1 bg-primary-500 rounded-md my-2 text-white px-3 flex flex-col shadow justify-center items-center"><FaImage size={24}/> Choose file</div>
          </Upload>
        )}
      </div>

  )
}

export default BlockChooseImage