import React, { useCallback, useState } from 'react'
import Pallete from '../../components/Pallete';
import _ from 'lodash';
const BgColor = ({ title, data, attr, updateCss }: any) => {
  const [state, setState] = useState({
    allCss: null,
    palette: false,
    is_over: false,
    color: {
      color: !_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : '',
      hover: !_.isNull(data) && !_.isUndefined(data[attr+'hover']) ? data[attr+'hover'] : '',
    },
    color_over: '',
    colors: null
  });
  const updateStateAttributes = useCallback((updates: any) => {
    setState((prevState: any) => ({
      ...prevState,
      ...Object.keys(updates).reduce((acc: any, key) => {
        if (updates[key] && typeof updates[key] === 'object') {
          acc[key] = {
            ...prevState[key],
            ...updates[key],
          };
        } else {
          acc[key] = updates[key];
        }
        return acc;
      }, {}),
    }));
  }, [state]);
  const setColor = useCallback((color: string, tone: any) => {
    let c = attr + '-' //bg-'
    if (color) {
      tone ? c += color + '-' + tone : c += color
      if (!state.is_over) {
        updateStateAttributes({
          'color.color': c,
        })
        updateCss(c, attr);
      } else {
        updateStateAttributes({
          'color.hover': 'hover:' +  c,
        })
        updateCss('hover:' + c, attr+'hover');
      }
    } else {
      if (!state.is_over) {
        updateStateAttributes({
          'color.color': '',
        })
        updateCss('', attr);
      } else {
        updateStateAttributes({
          'color.hover': '',
        })
        updateCss('', attr+'hover');
      }
    }
    updateStateAttributes({
      'palette': false,
    })
  }, [state]);
  const toogleOver = useCallback((isOver = false) => {
    updateStateAttributes({
      'palette': !state.palette,
      'is_over': isOver
    })
  }, [state])
  const togglePalette = useCallback(() => {
    updateStateAttributes({
      'palette': !state.palette
    })
  }, [])
  return (
    <div className="flex flex-row">
      <div className="mr-2">
        Color
        <div 
        onClick={()=> toogleOver(false)}
        className={` cursor-pointer ${state.color.color.replace('text', 'bg').replace('hover:', '')} mb-1 w-8 h-8 border-2 rounded-full`}
        >

        </div>
      </div>
      <div>
        Over
        <div
        onClick={()=> toogleOver(true)}
         className={`  cursor-pointer ${state.color.hover.replace('hover:text', 'bg').replace('hover:', '')} mb-1 w-8 h-8 border-2 rounded-full`}></div>
      </div>
      {state.palette && (
        <Pallete close={togglePalette}  setColor={setColor}/>
      )}
      
    </div>
  )
}
export default BgColor;