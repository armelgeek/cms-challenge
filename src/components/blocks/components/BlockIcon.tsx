import React, { useState, useEffect } from 'react';

const BlockIcon = ({ icon, commonProps, id }: any) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        let previewFrame = document.querySelector("#preview-frame");
        if (previewFrame) {
            let el = previewFrame?.contentWindow.document.querySelector('#' + id) as any;
  
            if (el) {
                Object.keys(commonProps).forEach((attr) => {
                    if(attr == 'className' || attr == 'classname'){
                       
                        if (el.hasAttribute('class')) {
                            el.setAttribute('class', commonProps['className'] + ' iconify ');
                        }
                        if (el.hasAttribute(attr)) {
                            el.setAttribute(attr, commonProps['className'] + ' iconify ');
                        }
                    }else{
                        if (el.hasAttribute(attr)) {
                            el.setAttribute(attr, commonProps[attr]);
                        }
                    }
                    
                });
                
                el.setAttribute("data-icon", `${icon}`);
               
            }
        }
    }, [icon, id,commonProps, isVisible]);

    return isVisible ? (<span {...commonProps} data-icon={icon}></span>) : (<span></span>);
};

export default BlockIcon;