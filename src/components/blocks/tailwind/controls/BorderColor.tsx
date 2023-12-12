import React, { useCallback, useState } from 'react'
import Pallete from '../../components/Pallete';
import _ from 'lodash';
const BorderColor = ({ title, data, attr, updateCss }: any) => {
  const [state, setState] = useState({
    allCss: null,
    palette: false,
    is_over: false,
    color: {
      color: !_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : '',
      hover: !_.isNull(data) && !_.isUndefined(data[attr + 'hover']) ? data[attr + 'hover'] : '',
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
          'color.color': c.replace('bordercolor', 'border'),
        })
        updateCss(c.replace('bordercolor', 'border'), attr);
      } else {
        updateStateAttributes({
          'color.hover': 'hover:' + c.replace('bordercolor', 'border'),
        })
        updateCss('hover:' + c.replace('bordercolor', 'border'), attr + 'hover');
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
        updateCss('', attr + 'hover');
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
    <div className="flex relative disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none min-w-0">
      <div className="flex flex-row-reverse items-center justify-between w-full text-gray-900 dark:text-white text-xs text-opacity-80 dark:text-opacity-80">
        <div className="w-2/3 items-center">
          <div className="w-full space-y-1">
            <div className="relative flex  gap-2 flex-col w-full max-w-full tracking-wide  min-w-0 highlight leading-5.5 text-xs rounded-md  bg-opacity-10">
              <div className="w-full flex gap-1"></div>
              <div
                onClick={() => toogleOver(false)}
                className={` cursor-pointer ${state.color.color.replace('text', 'bg').replace('hover:', '')} mb-1 w-8 h-8 border-2 rounded-full`}
              >

              </div>
            </div>
            {/**<div>
      <span className="uppercase font-bold" style={{
                fontSize: "10px"
            }}>Over</span>
        <div
        onClick={()=> toogleOver(true)}
         className={`  cursor-pointer ${state.color.hover.replace('hover:text', 'bg').replace('hover:', '')} mb-1 w-8 h-8 border-2 rounded-full`}></div>
      </div> */}
            {state.palette && (
              <Pallete close={togglePalette} setColor={setColor} />
            )}

          </div>
        </div>
        <label className='w-1/4 py-0.5 text-xs leading-5.5 truncate pr-1 font-medium'>
           Color
        </label>
      </div>
      </div>
  )
}
export default BorderColor;