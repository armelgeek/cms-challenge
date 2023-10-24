import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const useFileHandler = (initState:any) => {
  const [imageFile, setImageFile] = useState(initState);
  const [isFileLoading, setFileLoading] = useState(false);
  const removeImage = ({ id, name }:any) => {
    const items = imageFile[name].filter((item:any) => item.id !== id);
    setImageFile({
      ...imageFile,
      [name]: items,
    });
  };

  const removeSingle = (name:any) => {
    setImageFile({
      [name]: {},
    });
  };
  const onFileChange = (event:any, { name, type }:any) => {
    const val = event.target.value;
    const img = event.target.files[0];
    const size = img.size / 1024 / 1024;
    const regex = /(\.jpg|\.jpeg|\.webp|\.svg|\.png)$/i;

    setFileLoading(true);
    if (!regex.exec(val)) {
     // alert("File type must be jpeg or png or webp or svg", "error");
      setFileLoading(false);
    } else if (size > 0.5) {
      //alert("File size exceeded 1MB, consider optimizing your image", "error");
      setFileLoading(false);
    } else if (type === "multiple") {
      Array.from(event.target.files).forEach((file:any) => {
        const reader = new FileReader();
        reader.addEventListener("load", (e:any) => {
          setImageFile((oldFiles:any) => ({
            ...oldFiles,
            [name]: [
              ...oldFiles[name],
              { file, url: e.target.result, id: uuidv4() },
            ],
          }));
        });
        reader.readAsDataURL(file);
      });

      setFileLoading(false);
    } else {
      // type is single
      const reader = new FileReader();

      reader.addEventListener("load", (e) => {
        setImageFile({
          ...imageFile,
          [name]: { file: img, url: e?.target?.result },
        });
        setFileLoading(false);
      });
      reader.readAsDataURL(img);
    }
  };

  return {
    imageFile,
    setImageFile,
    isFileLoading,
    onFileChange,
    removeImage,
    removeSingle,
  };
};

export default useFileHandler;
