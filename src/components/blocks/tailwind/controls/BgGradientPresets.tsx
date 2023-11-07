import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import { toCamelCase } from '../../../../utils/functions';

const BgGradientPresets = ({ title, data, attr, updateCss }: any) => {
    const [state, setState] = useState({
        gradient: !_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : '',
        direction: ' bg-gradient-to-bl',
        presets: [
            ' from-white to-black ',
            ' from-blue-800 to-pink-700 ',
            ' from-orange-300 to-red-900 ',
            ' from-blue-300 to-blue-900 ',
            ' from-green-300 to-blue-900 ',
            ' from-white to-blue-300 ',
            ' from-red-200 to-red-700 ',
            ' from-lime-400 to-red-700 ',
            ' from-pink-400 to-black ',
            ' from-white to-red-700 ',
            ' from-yellow-100 to-gray-800 ',
            ' from-yellow-300 to-black ',
        ]
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
    const randomGradient=useCallback(()=>{
        let color1 = Math.random() * (classes.colors.length - 0) + 0;
        let color2 = Math.random() * (classes.colors.length - 0) + 0;
        let gradient1 = (Math.random() * (9 - 1) + 1)*100;
        let gradient2 = (Math.random() * (9 - 1) + 1)*100;
        let gradient = ' from-' + classes.colors[color1] + '-' + gradient1 + ' to-' + classes.colors[color2] + '-' + gradient2 + ' '
        updateStateAttributes({
            'presets': state.presets.push(gradient),
            'gradient': gradient + state.direction
        })
        updateCss(gradient + state.direction, attr)
    },[state])
    return (
        <div>
            Presets
            <div className="flex flex-wrap w-full justify-start cursor-pointer">
                {state.presets.map((gradient: any) => (
                    <div
                        className={`h-8 w-8 mx-1 mb-1 ${gradient + state.direction}`}
                        title={gradient}
                        onClick={() => {
                            updateStateAttributes({
                                'gradient': gradient
                            })
                            updateCss(gradient, attr);
                        }}
                    ></div>
                ))}
            </div>
            <button className="btn" onClick={() => {
                updateStateAttributes({
                    'gradient': ''
                })
                updateCss('', attr)
            }}>Clear</button>
            {/**<button className="btn" onClick={randomGradient}>Random</button>**/}
        </div>
    )
}
export default BgGradientPresets;