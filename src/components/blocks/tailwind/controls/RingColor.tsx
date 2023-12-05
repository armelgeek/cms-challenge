import React, { useCallback, useState } from 'react'
import Pallete from '../../components/Pallete';
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
const RingColor = ({ title, data, attr, updateCss }: any) => {
  const colors = classes[attr];
  const [state, setState] = useState({
    allCss: null,
    palette: false,
    is_over: false,
    color: {
      front: !_.isNull(data) && !_.isUndefined(data[attr])  ? data[attr] : '',
      over: !_.isNull(data) && !_.isUndefined(data[attr+'over']) ? data[attr+'over'] : '',
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
    let c = 'ring-';
    if (color) {
      tone ? c += color + '-' + tone : c += color
      if (!state.is_over) {
        updateStateAttributes({
          'color.color': c,
        })
        updateCss(c, attr);
      } else {
        updateStateAttributes({
          'color.over': 'hover:' +  c,
        })
        updateCss('hover:' + c, attr+'over');
      }
    } else {
      if (!state.is_over) {
        updateStateAttributes({
          'color.color': '',
        })
        updateCss('', attr);
      } else {
        updateStateAttributes({
          'color.over': '',
        })
        updateCss('', attr+'over');
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
      <span className="uppercase font-bold" style={{
                fontSize: "10px"
            }}>Ring</span>
        <div 
        onClick={()=> toogleOver(false)}
        className={` cursor-pointer ${state.color.front} mb-1 w-8 h-8 border-2 rounded-full`}
        >

        </div>
      </div>
      <div>
      <span className="uppercase font-bold" style={{
                fontSize: "10px"
            }}>Hover</span>
        <div
        onClick={()=> toogleOver(true)}
         className={`  cursor-pointer ${state.color.over.replace('hover:ring', 'ring').replace('hover:', '')} mb-1 w-8 h-8 border-2 rounded-full`}></div>
      </div>
      {state.palette && (
        <Pallete close={togglePalette}  setColor={setColor}/>
      )}
      
    </div>
  )
}
export default RingColor;