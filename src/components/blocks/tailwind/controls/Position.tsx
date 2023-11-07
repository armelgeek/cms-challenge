import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdExpandLess } from 'react-icons/md';
import { removeLeadingNegativeSign } from '../../../../utils/functions';
/**
 * Todo: fais automatiquement la recuperation
 */
const getPosition = (data:any,attr:any,pixels:any) => {
    if (!_.isNull(data) && !_.isUndefined(data[attr])) {
        let { attribute, negative } = removeLeadingNegativeSign(data[attr]);
        let value = attribute.match(/-?\d+/);
        if(value){
            let val = Math.abs(parseInt(value[0]));
            let index = pixels.findIndex((value: any) => value == val);
            return negative ? index * -1 : index;
        }
    }else{
        return 0;
    }
}
const pxl = [1, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256];
const Position = ({ title, data, attr, updateCss }: any) => {
    const [state, setState] = useState({
        posX: !_.isNull(data) && _.isArray(data[attr]) && data[attr].length == 2 ? data[attr][0] : 0,
        posY: !_.isNull(data) && _.isArray(data[attr]) && data[attr].length == 2 ? data[attr][1] : 0,
        marginLeft: 0,
        pixels: pxl,
        xcss: '',
        ycss: !_.isNull(data) && data['ycss'] ? data['ycss'] : 0,
        axisScope: {
            x: 'l',
            y: 't'
        },
        translates: [
            'translate-x',
            'translate-y'
        ],
        scope: ''
    })
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
    const setPosX = useCallback((e: any) => {

        let v = e.target.value * 1;

        let axis
        v < 0 ? axis = '-translate-x-' : axis = 'translate-x-'
        if (v) {
            updateStateAttributes({
                'xcss': axis + state.pixels[Math.abs(v)] / 4,
                'posX': v
            });
            updateCss('transform', 'transform');
            updateCss(axis + state.pixels[Math.abs(v)] / 4, 'xcss');
            updateCss([v, state.posY], attr);
        } else {

            updateStateAttributes({
                'xcss': ''
            })
            updateCss('', 'transform');
            updateCss('', 'xcss');
            updateCss([v, state.posY], attr);
        }
    }, [state])
    const setPosY = useCallback((value: any) => {

        let v = value;

        let axis
        v < 0 ? axis = '-translate-y-' : axis = 'translate-y-'
        if (v) {
            updateStateAttributes({
                'ycss': axis + state.pixels[Math.abs(v)] / 4,
                'posY': v
            });
            updateCss('transform', 'transform');
            updateCss(axis + state.pixels[Math.abs(v)] / 4, 'ycss');
            updateCss([state.posX, v], attr);
        } else {

            updateStateAttributes({
                'ycss': ''
            })
            updateCss('', 'transform');
            updateCss('', 'ycss');
            updateCss([state.posX, v], attr);
        }
    }, [state])
    //console.log('stating', state.posX);
    return (
        <div className="mt-2">
            Translate
            <div className="flex flex-row text-center w-full items-center justify-center">
                <FaChevronLeft />
                <input type="range" onChange={setPosX} value={state.posX} min={-state.pixels.length + 1} max={state.pixels.length - 1} className="mx-2" />
                <FaChevronRight />
            </div>
            <div className="w-full text-center">{state.posX}</div>
            <div className="flex flex-row text-center w-full items-center justify-center">
                <FaChevronLeft onClick={() => {
                    if (state.posY > -state.pixels.length + 1) {
                        setPosY(state.posY--);
                    }
                }} />
                <input type="range" onChange={(e) => setPosY(e.target.value)} value={state.posY} min={-state.pixels.length + 1} max={state.pixels.length - 1} className="mx-2" />
                <FaChevronRight onClick={() => {
                    if (state.posY < state.pixels.length - 1) {
                        setPosY(state.posY++);
                    }
                }} />
            </div>
            <div className="w-full text-center">{state.posY}</div>
        </div>
    )
}
export default Position;