import React, { useCallback, useState } from 'react'
import Pallete from '../../components/Pallete';
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
const BgGradient = ({ title, data, attr, updateCss }: any) => {
    const [context,] = useState(attr + '-');
    const [colors,] = useState(classes[attr]);
    const [state, setState] = useState({
        allCss: null,
        palette: false,
        is_over: false,
        color: {
            front: !_.isNull(data) && !_.isUndefined(data[attr]) ? data[attr] : '',
            hover: !_.isNull(data) && !_.isUndefined(data[attr + 'hover']) ? data[attr + 'hover'] : '',
        },
        color_over: ''
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
                    'color.front': c,
                })
                updateCss(c, attr);
            } else {
                updateStateAttributes({
                    'color.hover': 'hover:' + c,
                })
                updateCss('hover:' + c, attr + 'hover');
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
        <div className="flex flex-row">
            <div className="mr-2">
                <span className="capitalize">{attr}</span>
                <div
                    onClick={() => toogleOver(false)}
                    className={` cursor-pointer ${state.color.front.replace(attr + '-', 'bg-')} mb-1 w-8 h-8 border-2 rounded-full`}
                >

                </div>
            </div>
            {state.palette && (
                <Pallete close={togglePalette} setColor={setColor} />
            )}

        </div>
    )
}
export default BgGradient;